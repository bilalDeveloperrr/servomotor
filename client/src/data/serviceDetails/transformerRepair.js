import { Zap, Droplet, Search, Wrench, ShieldCheck, Thermometer, TestTube2, Gauge, PackageCheck, Cable } from "lucide-react";

export const transformerRepairData = {
  slug: "industrial-transformer-repair",
  title: "Industrial Transformer Repair",
  icon: Zap,
  tagline: "Full-service repair for oil-filled and dry-type transformers",
  overviewParagraphs: [
    "Transformer failures carry real safety and downtime stakes, which is why our repair process leans on documented testing at every stage rather than visual inspection alone. We service oil-filled and dry-type transformers, covering winding repair, rewinding, oil treatment, and insulation testing.",
    "Every transformer is tested before and after repair — insulation resistance, turns ratio, and dielectric strength — so you receive a unit restored to its rated performance with full test documentation.",
  ],
  features: [
    { icon: Cable, title: "Winding Rewind & Repair", description: "Primary and secondary winding rewinding to original turns ratio specification." },
    { icon: Droplet, title: "Oil Filtration & Treatment", description: "Transformer oil filtration, dehydration, and dielectric strength restoration." },
    { icon: ShieldCheck, title: "Insulation Resistance Testing", description: "Megger testing of windings and bushings before and after repair." },
    { icon: Wrench, title: "Bushing & Tap Changer Repair", description: "Bushing replacement and on-load / off-load tap changer servicing." },
    { icon: Thermometer, title: "Thermal Imaging Inspection", description: "Infrared scanning to detect hotspots from connection or winding faults." },
    { icon: Gauge, title: "Turns Ratio Testing", description: "TTR testing to confirm winding integrity matches nameplate specification." },
  ],
  process: [
    { step: "01", icon: Search, title: "Oil & Insulation Testing", description: "Dielectric, moisture, and insulation resistance testing to scope the fault." },
    { step: "02", icon: Wrench, title: "Winding Inspection", description: "Core and coil inspection for winding damage, hotspots, or insulation breakdown." },
    { step: "03", icon: Zap, title: "Rewinding & Repair", description: "Winding rewind or repair, bushing and tap changer servicing as required." },
    { step: "04", icon: Droplet, title: "Oil Treatment & Refilling", description: "Oil filtered, dehydrated, and refilled, or replaced where contamination requires it." },
    { step: "05", icon: TestTube2, title: "Final Dielectric Testing", description: "Full electrical testing and documentation before the transformer is energized." },
  ],
  equipment: [
    "Oil-filled distribution transformers",
    "Dry-type (cast resin) transformers",
    "Power transformers up to rated MVA capacity",
    "Auto-transformers",
    "On-load and off-load tap changers",
    "Control and instrument transformers",
  ],
  industriesSlugs: ["power-plants", "steel-plants", "cement", "manufacturing"],
  gallery: [
    { title: "Dry-Type Transformer Rewind", icon: Zap, tag: "Before / After", category: "Transformers" },
    { title: "Oil-Filled Transformer Overhaul", icon: Droplet, tag: "Before / After", category: "Transformers" },
    { title: "Load & Insulation Test Cell", icon: TestTube2, tag: "Facility", category: "Testing Laboratory" },
  ],
  faqs: [
    {
      question: "Do you repair both oil-filled and dry-type transformers?",
      answer: "Yes, we service both oil-filled distribution transformers and dry-type (cast resin) transformers, including rewinding, oil treatment, and bushing repair.",
    },
    {
      question: "Is there a size limit on transformers you repair?",
      answer: "We handle transformers up to substantial rated MVA capacity. Share the nameplate rating and fault details for a specific assessment.",
    },
    {
      question: "What tests are performed before the transformer is returned?",
      answer: "Every repaired transformer undergoes insulation resistance, turns ratio, and dielectric strength testing, with full results documented before dispatch.",
    },
    {
      question: "Can transformer oil be treated without a full rewind?",
      answer: "Yes, oil filtration and dielectric restoration is available as a standalone service when the winding itself tests healthy.",
    },
  ],
};
