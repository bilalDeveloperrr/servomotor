import { Cog, Search, Thermometer, Wrench, Settings, ClipboardCheck, TestTube2, Gauge, ShieldCheck, PackageCheck } from "lucide-react";

export const industrialMotorRepairData = {
  slug: "industrial-motor-repair",
  title: "Industrial Motor Repair",
  icon: Cog,
  tagline: "Full-service repair for AC, DC, induction, brake and geared motors",
  overviewParagraphs: [
    "Industrial motors carry the load of an entire production line, and a single failure can stop it. We repair AC motors, DC motors, induction motors, brake motors, and geared motors across all frame sizes and duty ratings, from major brands including ABB, Siemens, WEG, and Crompton.",
    "Our process combines full mechanical and electrical diagnostics with thermal imaging inspection, so repairs address the actual root cause of failure rather than just the symptom that caused the breakdown.",
  ],
  features: [
    { icon: Search, title: "Full Teardown Diagnostics", description: "Complete mechanical and electrical inspection to identify every fault, not just the obvious one." },
    { icon: Wrench, title: "Bearing & Shaft Repair", description: "Precision bearing replacement and shaft machining to restore original tolerances." },
    { icon: Settings, title: "Brake Mechanism Overhaul", description: "Full brake motor disc, coil, and hub replacement with torque verification." },
    { icon: Cog, title: "Gearbox Inspection & Repair", description: "Gear train inspection, lubrication, and repair for geared motor assemblies." },
    { icon: Thermometer, title: "Thermal Imaging Inspection", description: "Infrared scanning to detect hot spots from winding or connection faults." },
    { icon: Gauge, title: "Load & No-Load Testing", description: "Full-load performance testing to verify current draw, speed, and torque output." },
  ],
  process: [
    { step: "01", icon: ClipboardCheck, title: "Receiving Inspection", description: "Visual and nameplate inspection, condition logged before diagnostics begin." },
    { step: "02", icon: Search, title: "Diagnostic Testing", description: "Electrical resistance, insulation, and mechanical run-out testing to isolate faults." },
    { step: "03", icon: Wrench, title: "Mechanical & Electrical Repair", description: "Bearing, shaft, brake, gearbox, or winding repair as required by diagnosis." },
    { step: "04", icon: Settings, title: "Reassembly", description: "Precision reassembly with torque-specified fastening and alignment checks." },
    { step: "05", icon: TestTube2, title: "Full-Load Testing", description: "Performance verification under load before the motor is released for dispatch." },
  ],
  equipment: [
    "AC induction motors (all frame sizes)",
    "DC shunt, series, and compound motors",
    "Brake motors and fail-safe brake assemblies",
    "Geared motors and gearmotor units",
    "ABB, Siemens, WEG, Crompton, and other major brands",
    "Motors from fractional HP to heavy industrial ratings",
  ],
  industriesSlugs: ["manufacturing", "steel-plants", "cement", "mining"],
  gallery: [
    { title: "Induction Motor Restoration", icon: Cog, tag: "Before / After", category: "Motor Repairs" },
    { title: "Brake Motor Rewind", icon: Settings, tag: "Before / After", category: "Motor Repairs" },
    { title: "Geared Motor Overhaul Bay", icon: Wrench, tag: "Facility", category: "Workshop" },
  ],
  faqs: [
    {
      question: "Which motor brands and types do you repair?",
      answer: "We repair AC, DC, induction, brake, and geared motors from ABB, Siemens, WEG, Crompton, and most other major industrial brands, across all frame sizes and duty ratings.",
    },
    {
      question: "Can you repair the motor on-site instead of at your workshop?",
      answer: "Yes, our field engineering teams can carry out inspection and, in many cases, complete repair directly at your facility to reduce transportation time.",
    },
    {
      question: "Do you handle brake motor and gearbox repairs?",
      answer: "Yes, brake mechanism overhaul and gearbox inspection and repair are part of our standard industrial motor repair service, not a separate offering.",
    },
    {
      question: "How is the repair verified before delivery?",
      answer: "Every industrial motor undergoes full-load and no-load testing, with current draw, speed, and vibration readings documented in the final test report.",
    },
  ],
};
