import { CircuitBoard, Layers, Droplet, Scale, Zap, TestTube2, Search, Wrench, PackageCheck, ShieldCheck } from "lucide-react";

export const motorRewindingData = {
  slug: "motor-rewinding",
  title: "Motor Rewinding",
  icon: CircuitBoard,
  tagline: "Complete stator and rotor rewinding to OEM specification",
  overviewParagraphs: [
    "When a winding fails, a proper rewind restores the motor to its original electrical performance — done poorly, it shortens the motor's remaining life. Our rewinding process follows documented winding data, premium-grade insulation systems, and vacuum pressure impregnation for moisture and vibration resistance.",
    "We rewind stators and rotors for induction motors, DC motors, and generators across a wide range of horsepower ratings, with every unit verified through surge comparison and impedance testing before it returns to service.",
  ],
  features: [
    { icon: Layers, title: "Class-F/H Insulation Systems", description: "Premium insulation rated for high-temperature, high-duty-cycle operation." },
    { icon: Droplet, title: "Vacuum Pressure Impregnation", description: "VPI treatment for superior moisture resistance and winding rigidity." },
    { icon: Scale, title: "Precision Slot Wedging", description: "Exact slot-fill and wedging to original manufacturer winding data." },
    { icon: Zap, title: "Impedance & Surge Testing", description: "Surge comparison testing to detect turn-to-turn insulation faults before dispatch." },
    { icon: CircuitBoard, title: "Rotor Rebalancing", description: "Dynamic rotor balancing to eliminate vibration after rewind and reassembly." },
    { icon: TestTube2, title: "Core Loss Testing", description: "Core-loop testing to rule out lamination damage before rewinding begins." },
  ],
  process: [
    { step: "01", icon: Search, title: "Winding Data Recording", description: "Original winding configuration, turns, and wire gauge are recorded before removal." },
    { step: "02", icon: Wrench, title: "Winding Removal & Core Inspection", description: "Old winding stripped and core inspected for lamination damage or hot spots." },
    { step: "03", icon: Layers, title: "Rewinding & Insulation", description: "New windings installed to recorded specification with Class-F/H insulation." },
    { step: "04", icon: Droplet, title: "Vacuum Impregnation", description: "VPI treatment applied and cured for moisture resistance and mechanical strength." },
    { step: "05", icon: PackageCheck, title: "Testing & Balancing", description: "Surge, impedance, and rotor balance testing before final reassembly." },
  ],
  equipment: [
    "Induction motors (all frame sizes)",
    "DC motors and generators",
    "Alternators and synchronous motors",
    "Slip-ring and squirrel-cage rotors",
    "Single-phase and three-phase stators",
    "Motors up to large industrial HP ratings",
  ],
  industriesSlugs: ["textile", "paper-mills", "steel-plants", "manufacturing"],
  gallery: [
    { title: "Stator Rewind — Induction Motor", icon: CircuitBoard, tag: "Before / After", category: "Motor Repairs" },
    { title: "Rotor Rebalancing", icon: Scale, tag: "Before / After", category: "Motor Repairs" },
    { title: "VPI Insulation Treatment Bay", icon: Droplet, tag: "Facility", category: "Workshop" },
  ],
  faqs: [
    {
      question: "What insulation class do you use for rewinding?",
      answer: "We use Class-F and Class-H insulation systems as standard, matched to the motor's original duty rating and thermal requirements, with higher classes available on request.",
    },
    {
      question: "Is there a motor size limit for rewinding?",
      answer: "We rewind motors across a wide range of horsepower ratings, from fractional-HP units to large industrial motors. Contact our team with your nameplate details for a specific quotation.",
    },
    {
      question: "How do you verify the rewind was done correctly?",
      answer: "Every rewound motor undergoes surge comparison testing, impedance testing, and rotor balancing before dispatch, with results documented in the handover report.",
    },
    {
      question: "Can you rewind a motor if I don't have the original winding data?",
      answer: "Yes. Our engineers record the winding configuration before removal, or reference OEM winding databases where the original data is unavailable.",
    },
  ],
};
