# MedSaathi — A Prescription Safety Agent for Pakistan

**The problem.** In Pakistan, antibiotics and painkillers are routinely sold over the counter without a prescription. A patient walks out of a pharmacy holding Panadol, Panadol Extra and Flu-Out — three brands that all contain paracetamol — and takes them together. The strip is printed in English. Nobody explains the interaction with the warfarin their cardiologist started last month.

**What this is.** Not a symptom chatbot. A narrow, auditable **medicine safety check**:

> Give it a list of medicines (typed, or a photo of the strips) plus the patient's context.
> It resolves Pakistani brand names to generics, retrieves authoritative drug label text,
> checks interactions and duplicate ingredients, sanity-checks the dose, screens for emergency
> red flags, and answers in **English or Urdu with citations** — refusing to diagnose or prescribe.

**Why RAG and not just an LLM.** Drug safety answers must be traceable to a source. Every claim this system makes carries a citation to a retrieved document, ensuring accountability and verifiability in medical safety.

---

## 🎯 Key Features

* **Brand-to-Generic Resolution:** Maps 86+ local Pakistani brand names (e.g., Risek, Panadol, Arinac, Velosef) to their active generic ingredients.
* **Safety & Interaction Screening:** Automatically checks for pairwise drug interactions and duplicate active ingredients across multi-component drugs.
* **Dose Ceiling Sanity Checks:** Validates dosage against daily ceilings using deterministic lookup tables — never hallucinated.
* **Red Flag Screening:** Identifies emergency symptoms and critical conditions requiring immediate medical attention, with emergency triage logic.
* **Multimodal Input:** Accepts typed medicine lists or photographs of medicine strips.
* **Bilingual Support with Citations:** Provides answers in both English and Urdu, citing authoritative drug knowledge sources while strictly refusing to diagnose or prescribe.
* **Graceful Offline Fallback:** Works without internet by falling back to curated drug summaries if openFDA is unreachable.

---

## 🏗️ Architecture

The system pairs **deterministic safety logic** with **Gemini Flash** for reasoning and interface handling:

```
                    ┌─────────────────────────────────────────┐
  User input ──────▶│  Gemini Flash  (agent / planner)         │
  text + photo      │  multimodal • function calling • Urdu    │
                    └──────┬──────────────────────────────────┘
                           │ chooses tools, loops until done
        ┌──────────────────┼───────────────────┬──────────────────┬──────────────────┬──────────────┐
        ▼                  ▼                   ▼                  ▼                  ▼              ▼
 resolve_medicine  search_drug_knowledge  check_interactions   check_dose    check_red_flags  handle_context
  brand → generic     HYBRID RAG            pairwise +          max daily     emergency       patient info
  (86+ PK brands)   dense + keyword        duplicate active      ceilings       triage         & language
                   over openFDA labels      ingredients
   deterministic          RAG              deterministic     deterministic   deterministic    agent-driven
```

### Core Components

**Agent / Planner:** 
- Google Gemini Flash (multimodal, function calling, Urdu support)
- Intelligently chooses which tools to use and in what sequence

**Deterministic Safety Tools (Python):**
- `resolve_medicine`: Maps 86+ local Pakistani brand names to generic drugs
- `check_interactions`: Detects pairwise drug interactions and duplicate active ingredients from a curated interaction table
- `check_dose`: Verifies single-dose and daily-dose ceilings
- `check_red_flags`: Performs emergency symptom screening with English/Urdu support

**Hybrid Retrieval-Augmented Generation (RAG):**
- `search_drug_knowledge`: Blends dense vector embeddings (local MiniLM) with keyword overlap over openFDA drug labels
- Retrieves authoritative dosage, interactions, warnings, and adverse effects
- Falls back to curated summaries if openFDA is unreachable

### Design Philosophy

> **"The model plans, reads photographs, and explains — but it never computes a dose ceiling or invents an interaction."**

Four of the five tools are deterministic Python code over curated tables. A hallucinated maximum daily dose is a safety incident; a lookup table cannot hallucinate. This ensures every safety claim is auditable and grounded.

---

## 🛠️ Tech Stack

| Component | Technology |
|---|---|
| **LLM & Multimodal** | Google Gemini Flash with function calling |
| **Embeddings** | Sentence Transformers (MiniLM-L6-v2, local CPU) |
| **Knowledge Base** | openFDA drug labels + curated summaries |
| **Interface** | Gradio (Python web app) |
| **Data Processing** | Pandas, NumPy |
| **Language Support** | English & Urdu |

---

## 📋 Prerequisites

* Python 3.8+
* Google Gemini API key (free at [Google AI Studio](https://aistudio.google.com/apikey))
* Colab notebook access (recommended) or local Python environment

---

## 🚀 How to Run

### Option 1: Google Colab (Recommended)

1. **Get an API Key:**
   - Visit [Google AI Studio](https://aistudio.google.com/apikey)
   - Create a free API key (no credit card required)

2. **Open Notebook in Colab:**
   - Click the "Open in Colab" badge at the top of `MedSaathi.ipynb`
   - Or go to [Google Colab](https://colab.research.google.com) and upload the notebook

3. **Add Your API Key:**
   - Click the **🔑 Secrets icon** in the left sidebar
   - Click **"Add new secret"**
   - Name it `GOOGLE_API_KEY`
   - Paste your API key
   - Toggle **"Notebook access"** ON

4. **Run the Notebook:**
   - Click **Runtime → Run all**
   - Wait for Step 1 (setup) to complete (~1–3 minutes)
   - The final cell launches a **Gradio web app** with a public URL that works on your phone

### Option 2: Local Python Environment

```bash
# Clone the repository
git clone https://github.com/PinkPanther21/MedSaathi.git
cd MedSaathi

# Install dependencies
pip install google-genai gradio pandas numpy requests sentence-transformers

# Set your API key as an environment variable
export GOOGLE_API_KEY="your-api-key-here"

# Run the notebook (requires Jupyter)
jupyter notebook MedSaathi.ipynb
```

---

## 📚 Extending MedSaathi

The **Pakistan reality layer** is fully editable in **Step 2** of the notebook:

1. **Add Pakistani Brand Names:**
   - Edit the `BRANDS` list with `(brand_name, generic, strength, drug_class, otc_or_rx)`
   - Example: `('Risek', 'omeprazole', '20 mg', 'PPI', 'Rx')`

2. **Add Drug Interactions:**
   - Edit the `INTERACTIONS` list with `(generic_a, generic_b, severity, mechanism, advice)`
   - Severity levels: `major`, `moderate`, `minor`

3. **Update Dose Ceilings:**
   - Edit the `MAX_DOSES` list with `(generic, unit, max_single_dose, max_daily_dose, note)`

4. **Add Red Flags:**
   - Edit the `RED_FLAGS` list with symptom patterns and emergency guidance

After editing, simply re-run the notebook from Step 2 onwards. No other code changes needed.

---

## 📊 How It Works: Example Flow

**Input:** "I'm taking Panadol, Panadol Extra, and Flu-Out for my cold. I also take Warfarin for my heart."

**Agent Steps:**
1. Resolves brand names → `paracetamol`, `paracetamol + caffeine`, `paracetamol + phenylephrine + chlorpheniramine`, `warfarin`
2. Detects duplicate active ingredient → ⚠️ Three sources of paracetamol (overdose risk)
3. Checks interactions → ⚠️ **MAJOR:** Warfarin + NSAIDs in cold remedy (bleeding risk)
4. Retrieves drug labels → Warfarin dosing, contraindications, interaction mechanism
5. Screens for red flags → Confirms no emergency symptoms
6. Responds in patient's language → "Do not take these together. The cold remedy contains ingredients that increase bleeding risk with Warfarin. Contact your doctor immediately."

---

## ⚠️ Limitations & Disclaimers

* **Educational project:** MedSaathi does not diagnose, prescribe, or replace a doctor or pharmacist.
* **Pakistan-focused:** Brand mappings are specific to Pakistani pharmaceutical market.
* **English/Urdu only:** Other languages are not supported.
* **No personal medical history:** Responses are based on general drug knowledge, not individual patient records.
* **Requires connectivity:** Initial setup and live openFDA retrieval need internet (falls back gracefully offline).

**Always consult a qualified physician or pharmacist for medical decisions.**

---

## 👥 Team & Credits

Built by a team of students for the **HackathonPAK Angels hackathon**.

| Contributor |
|---|
| **Muhammad Faseeh** |
| **Atiqua Abrar** ([@PinkPanther21](https://github.com/PinkPanther21)) |
| **Eman Ejaz** |
| **Amin Khan** |
| **Noor Ul Ain** |
| **Hira Naseer** |

---

## 📁 Project Structure

```
MedSaathi/
├── MedSaathi.ipynb          # Main notebook (all-in-one)
├── README.md                # This file
├── PRD.md                   # Product requirements document
└── medsaathi_cache/         # Local cache (auto-created)
    ├── corpus.json          # Cached openFDA documents
    └── embeddings.npy       # Cached embeddings (if applicable)
```

---

## 🎓 Learning Outcomes

This project demonstrates:

* **Multimodal AI:** Processing text and images with Gemini Flash
* **Function Calling:** Agent-driven tool orchestration
* **RAG (Retrieval-Augmented Generation):** Hybrid dense + keyword search for grounded retrieval
* **Safety-Critical Systems:** Deterministic logic + LLM reasoning for auditable decisions
* **Multilingual NLP:** English/Urdu support in a real-world context
* **Graceful Degradation:** Offline fallbacks and circuit breakers for robustness
* **Product Thinking:** From problem discovery to a working prototype

---

## 📄 License

This project is open source and available for educational and non-commercial use.

---

## 🤝 Contributing

Found a missing Pakistani brand? Spotted an interaction we missed? 

1. Fork the repository
2. Edit Step 2 of the notebook with your additions
3. Submit a pull request with a description of the change


---

**Made with ❤️ in Pakistan for patient safety.**

⚠️ *Disclaimer: MedSaathi is an educational tool. Always consult qualified healthcare professionals for medical decisions.*
