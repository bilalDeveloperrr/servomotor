import { Settings, ScanLine, Cog, Zap, Radar, ShieldCheck, Search, Wrench, TestTube2, Gauge } from "lucide-react";

export const servoMotorRepairData = {
  slug: "servo-motor-repair",
  title: "Servo Motor Repair",
  icon: Settings,
  tagline: "Precision restoration for AC and DC servo motors",
  overviewParagraphs: [
    "Servo motors are precision instruments — a worn encoder, a degraded bearing, or a fractional winding fault is enough to throw off positioning accuracy across an entire automated line. We repair AC and DC servo motors from all major manufacturers back to their original performance specification, not just a working state.",
    "Every unit passes through encoder diagnostics, winding inspection, precision bearing replacement, and closed-loop dynamic testing before it leaves our workshop, so what you get back performs identically to a factory unit.",
  ],
  features: [
    { icon: ScanLine, title: "Encoder Replacement & Calibration", description: "Absolute and incremental encoder replacement with full feedback signal recalibration." },
    { icon: Cog, title: "Precision Bearing Replacement", description: "Low-runout bearing replacement matched to OEM tolerance specifications." },
    { icon: Zap, title: "Winding Repair & Rewinding", description: "Stator winding repair using premium magnet wire and Class-F/H insulation systems." },
    { icon: Radar, title: "Feedback Signal Diagnostics", description: "Full resolver and encoder signal tracing to isolate intermittent positioning faults." },
    { icon: ShieldCheck, title: "IP-Rated Seal Restoration", description: "Shaft seal and housing gasket replacement to restore original ingress protection rating." },
    { icon: Gauge, title: "Dynamic Load Testing", description: "Closed-loop testing under simulated load to verify torque and speed response." },
  ],
  process: [
    { step: "01", icon: Search, title: "Inspection & Encoder Diagnostics", description: "Initial teardown with encoder signal tracing and winding resistance checks." },
    { step: "02", icon: Cog, title: "Disassembly & Assessment", description: "Full disassembly to evaluate windings, bearings, and shaft condition." },
    { step: "03", icon: Wrench, title: "Rewinding & Component Replacement", description: "Winding repair and precision bearing, seal, and encoder replacement as needed." },
    { step: "04", icon: Zap, title: "Reassembly & Calibration", description: "Precision reassembly with feedback device recalibration to OEM specification." },
    { step: "05", icon: TestTube2, title: "Dynamic Testing", description: "Closed-loop load testing to verify torque, speed response, and positioning accuracy." },
  ],
  equipment: [
    "Fanuc AC servo motors",
    "Siemens 1FT/1FK series",
    "Yaskawa Sigma series",
    "Mitsubishi HF/HC series",
    "Panasonic Minas servo motors",
    "DC servo motors (all frame sizes)",
  ],
  industriesSlugs: ["automation", "packaging", "automotive", "manufacturing"],
  gallery: [
    { title: "AC Servo Motor Overhaul", icon: Settings, tag: "Before / After", category: "Servo Motors" },
    { title: "Encoder & Bearing Replacement", icon: ScanLine, tag: "Before / After", category: "Servo Motors" },
    { title: "Servo Drive Calibration Bay", icon: Radar, tag: "Facility", category: "Workshop" },
  ],
  faqs: [
    {
      question: "Which servo motor brands do you service?",
      answer: "We repair AC and DC servo motors from Fanuc, Siemens, Yaskawa, Mitsubishi, Panasonic, and most other major industrial automation brands, across a wide range of frame sizes.",
    },
    {
      question: "Can you recalibrate the encoder after repair?",
      answer: "Yes. Every servo motor repair includes full feedback device recalibration — absolute or incremental encoder, or resolver — verified through closed-loop dynamic testing before dispatch.",
    },
    {
      question: "How long does a servo motor repair take?",
      answer: "Most servo motor repairs are completed within 3-5 working days. Encoder-only or bearing-only repairs can often be turned around in 24-48 hours.",
    },
    {
      question: "Do you provide a warranty on servo motor repairs?",
      answer: "Yes, every servo motor repair is backed by a documented service warranty covering workmanship and replaced components.",
    },
  ],
};
