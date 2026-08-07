import { Gauge, Search, Scale, Wrench, Radar, Thermometer, TestTube2, Zap, ScanLine, Ruler } from "lucide-react";

export const spindleMotorRepairData = {
  slug: "spindle-motor-repair",
  title: "Spindle Motor Repair",
  icon: Gauge,
  tagline: "High-speed CNC spindle rebuilds to micron-level precision",
  overviewParagraphs: [
    "CNC spindle motors run at speeds where even a few microns of runout translate into visible tool marks and scrapped parts. We repair high-speed spindle motors up to demanding RPM ranges, including precision dynamic balancing, bearing replacement, and rewinding for belt-drive and direct-drive spindles.",
    "Every spindle is verified through run-out and vibration testing at operating speed before it goes back into your machine, not just spun up briefly on a bench.",
  ],
  features: [
    { icon: Scale, title: "High-Speed Dynamic Balancing", description: "Precision balancing to G1.0 grade for vibration-free operation at full RPM." },
    { icon: Gauge, title: "Precision Bearing Replacement", description: "Ceramic and hybrid bearing replacement matched to spindle speed rating." },
    { icon: Zap, title: "High-Frequency Rewinding", description: "Rewinding for high-frequency spindle motors using specialized magnet wire." },
    { icon: Ruler, title: "Run-Out & Vibration Testing", description: "Sub-micron run-out verification and vibration analysis at operating speed." },
    { icon: Thermometer, title: "Thermal Growth Compensation", description: "Testing under thermal load to verify tolerances hold as the spindle heats up." },
    { icon: ScanLine, title: "Encoder / Resolver Calibration", description: "Feedback device calibration for spindles with integrated positioning control." },
  ],
  process: [
    { step: "01", icon: Search, title: "Precision Inspection", description: "Initial run-out check and bearing noise analysis to scope the repair." },
    { step: "02", icon: Radar, title: "Bearing & Winding Diagnosis", description: "Detailed diagnosis of bearing wear, winding condition, and shaft tolerance." },
    { step: "03", icon: Wrench, title: "Rewinding & Bearing Replacement", description: "Precision rewinding and replacement with speed-rated bearings." },
    { step: "04", icon: Scale, title: "Dynamic Balancing", description: "Rotor assembly balanced to G1.0 grade across the full operating speed range." },
    { step: "05", icon: TestTube2, title: "High-Speed Test Run", description: "Run-out and vibration verified at operating RPM before dispatch." },
  ],
  equipment: [
    "CNC spindle motors up to high-speed RPM ratings",
    "Fanuc and Siemens integrated spindle motors",
    "HSD and Step-Tec spindle units",
    "Belt-drive and direct-drive spindle motors",
    "Grinding and milling spindle motors",
    "Spindle motors with integrated encoders",
  ],
  industriesSlugs: ["automotive", "manufacturing", "packaging", "automation"],
  gallery: [
    { title: "CNC Spindle Precision Rebuild", icon: Gauge, tag: "Before / After", category: "CNC Spindle Repair" },
    { title: "High-Speed Spindle Balancing", icon: Scale, tag: "Before / After", category: "CNC Spindle Repair" },
    { title: "CNC Balancing Station", icon: Radar, tag: "Facility", category: "Workshop" },
  ],
  faqs: [
    {
      question: "What RPM range of spindles can you service?",
      answer: "We service belt-drive and direct-drive CNC spindle motors across a wide RPM range, including high-speed grinding and milling spindles. Share the nameplate details for an exact scope.",
    },
    {
      question: "What balancing grade do you work to?",
      answer: "Spindle rotors are dynamically balanced to G1.0 grade as standard, verified across the full operating speed range before the spindle is released.",
    },
    {
      question: "Do you repair spindles with integrated encoders?",
      answer: "Yes, we recalibrate integrated encoders and resolvers as part of the repair for spindles with built-in positioning feedback.",
    },
    {
      question: "How long does a spindle motor rebuild take?",
      answer: "Most spindle rebuilds are completed within 5-7 working days depending on parts availability, with expedited turnaround available for production-critical spindles.",
    },
  ],
};
