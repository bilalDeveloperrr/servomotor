import { Layers, Search, Wrench, Droplet, Zap, TestTube2, Ruler, ShieldCheck, PackageCheck, Cable } from "lucide-react";

export const coilRewindingData = {
  slug: "coil-rewinding",
  title: "Coil Rewinding",
  icon: Layers,
  tagline: "Custom coil fabrication for generators, pumps, and transformers",
  overviewParagraphs: [
    "Not every coil failure fits a catalog replacement. We rewind and custom-fabricate coils for generators, pump motors, transformers, alternators, and solenoid assemblies, matching exact dimensions, turns count, and wire gauge to the original specification or an upgraded equivalent.",
    "Each coil is impregnated and tested for insulation resistance before it's returned, so it performs reliably in the exact mechanical space and electrical duty it was built for.",
  ],
  features: [
    { icon: Layers, title: "Custom Coil Fabrication", description: "Coils built to exact dimensional and electrical specification when standard parts aren't available." },
    { icon: Cable, title: "Copper & Aluminum Winding", description: "Winding options in copper or aluminum conductor to match original or upgraded specification." },
    { icon: ShieldCheck, title: "Insulation Resistance Testing", description: "Megger and dielectric testing to verify insulation integrity before dispatch." },
    { icon: Ruler, title: "Precise Dimensional Matching", description: "Coil shape and dimensions matched to fit original housings without modification." },
    { icon: Zap, title: "Surge Comparison Testing", description: "Turn-to-turn insulation verification through surge comparison testing." },
    { icon: Droplet, title: "Varnish Impregnation", description: "Vacuum varnish impregnation for moisture resistance and mechanical rigidity." },
  ],
  process: [
    { step: "01", icon: Search, title: "Coil Assessment & Specification", description: "Original coil measured and specified, or engineered from equipment drawings." },
    { step: "02", icon: Wrench, title: "Old Coil Removal", description: "Failed coil carefully removed without damaging the surrounding assembly." },
    { step: "03", icon: Layers, title: "Custom Rewinding", description: "New coil wound to exact turns count, gauge, and dimensional specification." },
    { step: "04", icon: Droplet, title: "Insulation & Impregnation", description: "Varnish impregnation applied and cured for durability and moisture resistance." },
    { step: "05", icon: TestTube2, title: "Electrical Verification", description: "Insulation resistance and surge testing before the coil is released." },
  ],
  equipment: [
    "Generator field and armature coils",
    "Pump motor coils",
    "Transformer coils (control and power)",
    "Alternator coils",
    "Solenoid and contactor coils",
    "Custom coil assemblies to specification",
  ],
  industriesSlugs: ["power-plants", "steel-plants", "paper-mills", "manufacturing"],
  gallery: [
    { title: "Generator Coil Rewinding", icon: Layers, tag: "Before / After", category: "Coil Rewinding" },
    { title: "Pump Motor Coil Rewinding", icon: Cable, tag: "Before / After", category: "Coil Rewinding" },
    { title: "Coil Winding & Impregnation Bay", icon: Droplet, tag: "Facility", category: "Workshop" },
  ],
  faqs: [
    {
      question: "Can you build a coil if I don't have a replacement part number?",
      answer: "Yes. We can specify and fabricate a custom coil from the failed unit's dimensions and winding data, or from equipment drawings if available.",
    },
    {
      question: "Do you offer both copper and aluminum winding?",
      answer: "Yes, we wind coils in either copper or aluminum conductor depending on your original specification or performance requirements.",
    },
    {
      question: "How is the finished coil tested?",
      answer: "Every coil undergoes insulation resistance and surge comparison testing before dispatch, with results included in your handover documentation.",
    },
    {
      question: "What is the typical turnaround for custom coil rewinding?",
      answer: "Standard coil rewinding is typically completed within 3-5 working days; fully custom fabrication may take longer depending on complexity.",
    },
  ],
};
