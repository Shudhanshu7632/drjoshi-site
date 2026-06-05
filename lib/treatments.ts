export interface Treatment {
  slug: string;
  condition: string;
  title: string;
  tagline: string;
  heroImage: string;
  overview: string;
  symptoms: string[];
  philosophy: string;
  process: { step: string; title: string; desc: string }[];
  outcomes: { stat: string; label: string }[];
  testimonial: {
    quote: string;
    name: string;
    location: string;
    condition: string;
  };
  faqs: { q: string; a: string }[];
}

export const treatments: Treatment[] = [
  {
    slug: "kidney-disease",
    condition: "KIDNEY DISEASE",
    title: "Ayurvedic Kidney Care",
    tagline: "Slow CKD progression. Reduce creatinine. Avoid dialysis.",
    heroImage:
      "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=1600&auto=format&fit=crop&q=80",
    overview:
      "Chronic Kidney Disease (CKD) affects millions in India — often silently, until the damage is advanced. Conventional medicine offers management. At Dr. Joshi's clinic, we offer reversal. Through a combination of Ayurvedic herbs, Panchkarma therapies, and deep dietary correction, we address the biological roots of kidney deterioration and measurably reduce creatinine, urea, and proteinuria.",
    symptoms: [
      "Elevated creatinine or urea levels",
      "Protein in urine (proteinuria)",
      "Swelling in legs and face",
      "Fatigue and low energy",
      "Reduced urine output",
      "High blood pressure",
      "Anaemia related to CKD",
    ],
    philosophy:
      "The kidneys are not isolated organs. They are the final filtration point of a system that has already been burdened by poor diet, chronic inflammation, and metabolic dysfunction. We treat the entire system — not just the creatinine number.",
    process: [
      {
        step: "01",
        title: "Deep Diagnosis",
        desc: "Complete case analysis: blood reports, lifestyle audit, diet pattern, pulse diagnosis, and constitution assessment.",
      },
      {
        step: "02",
        title: "Herbal Protocol",
        desc: "Authentic formulations targeting kidney cell regeneration, reducing inflammation, and improving glomerular filtration.",
      },
      {
        step: "03",
        title: "Dietary Correction",
        desc: "Kidney-specific diet plan calibrated to your current stage of CKD, blood chemistry, and Prakriti.",
      },
      {
        step: "04",
        title: "Panchkarma Detox",
        desc: "Virechana and Basti therapies to clear systemic toxins (ama) that compound kidney damage.",
      },
    ],
    outcomes: [
      { stat: "68%", label: "Patients showed creatinine reduction" },
      {
        stat: "3 mo",
        label: "Average protocol duration for measurable results",
      },
      { stat: "85%", label: "Avoided dialysis within our program" },
    ],
    testimonial: {
      quote:
        "After 6 years of rising creatinine and dialysis fear, 3 months of treatment later — my creatinine is back to 1.4. I can live normally again.",
      name: "Sanjay D.",
      location: "Mumbai",
      condition: "CKD Stage 3",
    },
    faqs: [
      {
        q: "Can Ayurveda reverse CKD?",
        a: "Ayurveda cannot reverse structural damage that is already complete. However, it can significantly slow or halt progression, reduce creatinine, and in early-stage cases, achieve meaningful functional recovery. Results depend on current stage and compliance.",
      },
      {
        q: "How long before I see results?",
        a: "Most patients see measurable changes in creatinine and urea within 6–12 weeks of consistent treatment. Full protocol runs 3–6 months depending on severity.",
      },
      {
        q: "Can I continue my existing medications?",
        a: "Yes. Our protocols are designed to complement, not replace, existing nephrology care. Many patients are able to reduce medication under medical supervision as kidney function improves.",
      },
      {
        q: "Is online consultation available?",
        a: "Yes. We treat overseas and outstation kidney patients via online consultation with regular remote monitoring.",
      },
    ],
  },
  {
    slug: "cancer-care",
    condition: "CANCER CARE",
    title: "Integrative Cancer Support",
    tagline:
      "Strengthen immunity. Reduce side effects. Support systemic recovery.",
    heroImage:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&auto=format&fit=crop&q=80",
    overview:
      "Cancer treatment in modern medicine is powerful — but often devastating to the body's broader systems. Ayurvedic integrative support works alongside oncology to reduce side effects, strengthen the immune system, and support the body's own recovery capacity. We do not replace cancer treatment. We make the body stronger to endure and recover from it.",
    symptoms: [
      "Fatigue from chemotherapy or radiation",
      "Reduced immunity and infection risk",
      "Nausea and digestive disruption",
      "Inflammation and pain",
      "Low blood counts",
      "Emotional and mental exhaustion",
    ],
    philosophy:
      "Ayurveda understands cancer as a failure of the body's natural regulatory intelligence — Ojas. Our role is to restore that intelligence: cleanse the accumulated toxins, fortify the immune system, and create an internal environment where healing is possible.",
    process: [
      {
        step: "01",
        title: "Oncology Alignment",
        desc: "Review of current treatment protocol to ensure complete Ayurvedic-oncology compatibility.",
      },
      {
        step: "02",
        title: "Immunity Fortification",
        desc: "Rasayana herbs and formulations to strengthen Ojas and maintain immune competence through treatment.",
      },
      {
        step: "03",
        title: "Side Effect Management",
        desc: "Targeted Ayurvedic protocols for nausea, fatigue, mucositis, and bone marrow suppression.",
      },
      {
        step: "04",
        title: "Recovery & Rebuild",
        desc: "Post-treatment restoration of digestion, energy, and systemic function through Panchkarma.",
      },
    ],
    outcomes: [
      {
        stat: "70%",
        label: "Reported significant reduction in chemo side effects",
      },
      { stat: "82%", label: "Improved energy and immunity scores" },
      {
        stat: "6 wk",
        label: "Average time to measurable quality-of-life improvement",
      },
    ],
    testimonial: {
      quote:
        "I went through 6 cycles of chemo. Dr. Joshi's protocol kept me functional, my immunity held, and my recovery was faster than my oncologist expected.",
      name: "Meena R.",
      location: "Pune",
      condition: "Breast Cancer, Stage 2",
    },
    faqs: [
      {
        q: "Is Ayurveda safe during chemotherapy?",
        a: "Yes, when supervised by a qualified physician. Our protocols are specifically designed to complement, not interfere with, oncology treatment. We review all medications before prescribing.",
      },
      {
        q: "Can Ayurveda cure cancer?",
        a: "Ayurveda does not claim to cure cancer. Our role is integrative support — improving quality of life, reducing side effects, and supporting recovery. We work alongside your oncology team.",
      },
      {
        q: "What types of cancer do you support?",
        a: "We support patients across most cancer types. The protocol is adapted to the specific cancer, stage, and ongoing treatment.",
      },
    ],
  },
  {
    slug: "diabetes",
    condition: "DIABETES & METABOLISM",
    title: "Metabolic Disorder Treatment",
    tagline:
      "Reverse insulin resistance. Restore pancreatic function naturally.",
    heroImage:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=1600&auto=format&fit=crop&q=80",
    overview:
      "Type 2 diabetes is a metabolic disease — not an insulin deficiency. It is a failure of cellular insulin response, driven by chronic inflammation, dietary abuse, and lifestyle imbalance. Ayurveda has understood this for centuries. Through targeted herbs, strict dietary correction, and lifestyle realignment, we reverse insulin resistance at the cellular level.",
    symptoms: [
      "High fasting or post-prandial blood sugar",
      "Elevated HbA1c",
      "Fatigue after meals",
      "Frequent urination and thirst",
      "Slow wound healing",
      "Tingling in hands or feet (neuropathy)",
    ],
    philosophy:
      "Diabetes in Ayurveda is called Prameha — a disease of excess. The solution is reduction: of ama (metabolic toxins), of excess Kapha, and of the dietary and lifestyle habits that created the condition. We address the cause, not the consequence.",
    process: [
      {
        step: "01",
        title: "Metabolic Assessment",
        desc: "Full panel review: HbA1c, fasting, PP, insulin resistance markers, and constitution assessment.",
      },
      {
        step: "02",
        title: "Herbal Protocol",
        desc: "Clinically validated herbs: Vijaysar, Gurmar, Karela, Methi — in precise formulations to restore insulin sensitivity.",
      },
      {
        step: "03",
        title: "Dietary Overhaul",
        desc: "A complete dietary plan for your Prakriti and current glycaemic profile. No generic advice.",
      },
      {
        step: "04",
        title: "Panchakarma",
        desc: "Virechana therapy to eliminate metabolic toxins (ama) and reset the digestive fire (Agni).",
      },
    ],
    outcomes: [
      { stat: "2.1", label: "Average HbA1c point reduction in 90 days" },
      { stat: "74%", label: "Patients reduced oral medication dosage" },
      { stat: "89%", label: "Reported improved energy and reduced fatigue" },
    ],
    testimonial: {
      quote:
        "My HbA1c dropped from 9.8 to 6.2 without insulin. Dr. Joshi's protocol changed my relationship with my own body.",
      name: "Ramesh K.",
      location: "Nashik",
      condition: "Type 2 Diabetes, 8 years",
    },
    faqs: [
      {
        q: "Can Ayurveda reverse Type 2 diabetes?",
        a: "In early and moderate stages, significant reversal is achievable. Advanced cases with long insulin dependency require sustained management, but meaningful reduction in medication and improved glucose control is consistently achievable.",
      },
      {
        q: "How long before blood sugar improves?",
        a: "Most patients see measurable glucose changes within 4–6 weeks. HbA1c typically improves within 2–3 months of consistent treatment.",
      },
      {
        q: "Will I have to stop my medications?",
        a: "Not immediately. As glucose control improves, we work with your physician to taper medication safely. This is a gradual, supervised process.",
      },
    ],
  },
  {
    slug: "joint-spine",
    condition: "JOINT & SPINE",
    title: "Arthritis & Back Pain Relief",
    tagline: "Reduce inflammation. Restore mobility. Zero steroid dependency.",
    heroImage:
      "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=1600&auto=format&fit=crop&q=80",
    overview:
      "Arthritis, spondylitis, and chronic back pain are conditions of systemic inflammation — not just local joint damage. Ayurveda targets the root inflammatory cascade, reduces pain without steroids, and restores joint mobility through Panchkarma therapies designed specifically for Vata-dominant musculoskeletal disorders.",
    symptoms: [
      "Chronic joint pain or stiffness",
      "Morning stiffness lasting over 30 minutes",
      "Swollen, warm, or tender joints",
      "Reduced range of motion",
      "Back pain radiating to legs (sciatica)",
      "Cervical or lumbar spondylitis",
    ],
    philosophy:
      "In Ayurveda, most joint disorders are Vata diseases — aggravated Vata lodging in the joints and spine. The solution is Vata pacification: through oils, Panchkarma, herbs, and dietary correction. Not suppression with NSAIDs, but genuine inflammatory resolution.",
    process: [
      {
        step: "01",
        title: "Vata Assessment",
        desc: "Pulse diagnosis and constitution analysis to identify the specific Vata imbalance driving your condition.",
      },
      {
        step: "02",
        title: "Abhyanga + Pinda Sweda",
        desc: "Medicated oil massage followed by herbal bolus heat therapy — reduces inflammation and lubricates joints.",
      },
      {
        step: "03",
        title: "Herbal Anti-inflammatories",
        desc: "Boswellia, Shallaki, Guggulu formulations — clinically validated for joint inflammation reduction.",
      },
      {
        step: "04",
        title: "Basti Therapy",
        desc: "Medicated enemas — the most powerful treatment for Vata disorders according to Ayurvedic classical texts.",
      },
    ],
    outcomes: [
      { stat: "78%", label: "Reported significant pain reduction" },
      { stat: "65%", label: "Restored joint mobility to functional levels" },
      { stat: "80%", label: "Reduced or eliminated NSAID use" },
    ],
    testimonial: {
      quote:
        "I had been on NSAIDs for 4 years for rheumatoid arthritis. 3 months in, I am off them. My joints are mobile and I am pain-free for the first time in years.",
      name: "Anita S.",
      location: "Bangalore",
      condition: "Rheumatoid Arthritis",
    },
    faqs: [
      {
        q: "Is Panchkarma painful?",
        a: "No. Panchkarma therapies like Abhyanga and Basti are non-invasive and deeply relaxing. Most patients find them therapeutic and restorative.",
      },
      {
        q: "How long does the treatment take?",
        a: "A typical Panchkarma course for joint conditions runs 7–21 days, combined with a 3–6 month herbal protocol.",
      },
      {
        q: "Can this treat both arthritis and back pain?",
        a: "Yes. Our protocols are adapted to the specific condition — Osteoarthritis, Rheumatoid Arthritis, Ankylosing Spondylitis, Spondylolisthesis, or simple chronic back pain.",
      },
    ],
  },
  {
    slug: "immunity",
    condition: "IMMUNITY & INFECTIONS",
    title: "Immunity Restoration",
    tagline: "Build a resilient immune system through Rasayana therapy.",
    heroImage:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1600&auto=format&fit=crop&q=80",
    overview:
      "Chronic low immunity, recurrent infections, autoimmune conditions, and post-viral fatigue all share a common root: compromised Ojas — the essential vitality that Ayurveda identifies as the seat of immunity. Rasayana therapy is the Ayurvedic science of immune restoration. It rebuilds Ojas at the cellular level.",
    symptoms: [
      "Recurrent infections (viral, bacterial, fungal)",
      "Slow recovery from illness",
      "Chronic fatigue and low energy",
      "Autoimmune conditions",
      "Post-COVID or post-viral syndromes",
      "Frequent allergies",
    ],
    philosophy:
      "Immunity in Ayurveda is not a number — it is Ojas: the refined essence of nutrition, digestion, and lifestyle. When Ojas is depleted, infections recur. When it is restored, the body defends itself with precision. Our protocols rebuild this foundation.",
    process: [
      {
        step: "01",
        title: "Ojas Assessment",
        desc: "Evaluation of immune competence through pulse diagnosis, constitution mapping, and symptom pattern analysis.",
      },
      {
        step: "02",
        title: "Rasayana Protocol",
        desc: "Ashwagandha, Shatavari, Amalaki, Guduchi — classical Rasayana formulations adapted to your constitution.",
      },
      {
        step: "03",
        title: "Digestive Restoration",
        desc: "Immunity begins in the gut. Agni (digestive fire) must be strong for Ojas to form. We correct this first.",
      },
      {
        step: "04",
        title: "Lifestyle Calibration",
        desc: "Sleep, diet, daily rhythm — all calibrated to maximise Ojas production and immune resilience.",
      },
    ],
    outcomes: [
      { stat: "84%", label: "Reported fewer infections within 90 days" },
      { stat: "77%", label: "Improved energy and reduced fatigue" },
      { stat: "90%", label: "Patient satisfaction with Rasayana protocols" },
    ],
    testimonial: {
      quote:
        "I used to catch every infection that went around. After 4 months on Dr. Joshi's protocol, I have not been ill once. My energy is completely different.",
      name: "Priya M.",
      location: "Delhi",
      condition: "Recurrent Infections + Low Immunity",
    },
    faqs: [
      {
        q: "What is Rasayana therapy?",
        a: "Rasayana is one of the eight branches of classical Ayurveda — the science of rejuvenation and immunity building. It uses specific herbs, lifestyle protocols, and dietary guidelines to rebuild Ojas.",
      },
      {
        q: "How long does immunity restoration take?",
        a: "Initial improvements in energy and infection frequency are typically noticed within 6–8 weeks. Full Rasayana protocols run 3–6 months.",
      },
      {
        q: "Can this help with autoimmune conditions?",
        a: "Yes. Autoimmune conditions require careful assessment and a longer protocol, but Ayurveda has well-documented approaches for conditions like Rheumatoid Arthritis, Lupus, and Hashimoto's thyroiditis.",
      },
    ],
  },
  {
    slug: "panchkarma",
    condition: "PANCHKARMA",
    title: "Deep Detox & Rejuvenation",
    tagline:
      "The five sacred detox therapies. Total cellular cleanse and reset.",
    heroImage:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1600&auto=format&fit=crop&q=80",
    overview:
      "Panchkarma is the crown jewel of Ayurvedic medicine — a systematic five-pronged detoxification that clears accumulated toxins (ama) from every tissue of the body. Unlike symptomatic detox programmes, Panchkarma works at the cellular level. It resets digestion, metabolism, immunity, and mental clarity simultaneously.",
    symptoms: [
      "Chronic fatigue and sluggishness",
      "Digestive issues and bloating",
      "Skin conditions",
      "Mental fog and poor concentration",
      "Accumulated stress and toxin overload",
      "Joint stiffness and body ache",
    ],
    philosophy:
      "Disease begins when ama (undigested metabolic waste) accumulates and blocks the channels of the body. Panchkarma systematically removes this accumulation — restoring the clarity and function of every system. It is the most powerful preventive and therapeutic tool in Ayurveda.",
    process: [
      {
        step: "01",
        title: "Purva Karma",
        desc: "Preparatory therapies: Snehana (oleation) and Svedana (sweating) to loosen and mobilise deep toxins.",
      },
      {
        step: "02",
        title: "Vamana",
        desc: "Therapeutic emesis — for Kapha-dominant conditions and upper respiratory clearing.",
      },
      {
        step: "03",
        title: "Virechana",
        desc: "Therapeutic purgation — the primary treatment for Pitta disorders, liver conditions, and metabolic toxins.",
      },
      {
        step: "04",
        title: "Basti",
        desc: "Medicated enemas — the most powerful treatment for Vata disorders. The king of Panchkarma therapies.",
      },
    ],
    outcomes: [
      { stat: "21", label: "Day signature Panchkarma program" },
      {
        stat: "93%",
        label: "Patients reported significant improvement in energy",
      },
      { stat: "88%", label: "Reported improved digestion and mental clarity" },
    ],
    testimonial: {
      quote:
        "I came in exhausted, left feeling 10 years younger. The Panchkarma protocol was unlike anything I'd experienced. My doctor was surprised at my next blood panel.",
      name: "Vikram P.",
      location: "Delhi",
      condition: "21-Day Panchkarma Program",
    },
    faqs: [
      {
        q: "How long is a Panchkarma program?",
        a: "Standard programs run 7, 14, or 21 days. The 21-day signature program offers the deepest cellular cleanse. Day programs are available for working patients.",
      },
      {
        q: "Is Panchkarma safe?",
        a: "Yes — when administered by qualified practitioners with proper pre-assessment. We assess every patient before prescribing which therapies are appropriate for their constitution and current health status.",
      },
      {
        q: "Can I do Panchkarma alongside other treatments?",
        a: "Panchkarma can be combined with our Kidney, Cancer, or other chronic care protocols. In many cases, it forms the foundational detox stage of longer treatments.",
      },
      {
        q: "What do I need to do before coming?",
        a: "A pre-Panchkarma consultation is required. You will receive dietary instructions, lifestyle guidelines, and a preparation schedule 1–2 weeks before arrival.",
      },
    ],
  },
];

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return treatments.find((t) => t.slug === slug);
}

export function getAllSlugs(): string[] {
  return treatments.map((t) => t.slug);
}
