import { Activity, ClipboardCheck, Thermometer, Droplet, Radar, FileText, Search, Calendar, TrendingUp, Gauge } from "lucide-react";

export const preventiveMaintenanceData = {
  slug: "preventive-maintenance",
  title: "Preventive Maintenance",
  icon: Activity,
  tagline: "Scheduled diagnostics that prevent failure before it happens",
  overviewParagraphs: [
    "Most motor failures give warning signs weeks before they happen — rising vibration, a slowly heating bearing, degrading insulation resistance. Our preventive maintenance programs are built around catching those signals through scheduled vibration analysis, thermal scanning, and lubrication management.",
    "Rather than a generic checklist, each program is designed around your equipment fleet and production schedule, with findings delivered as a clear report your maintenance team can act on.",
  ],
  features: [
    { icon: Radar, title: "Vibration Analysis", description: "Scheduled vibration monitoring to catch bearing wear and misalignment early." },
    { icon: Thermometer, title: "Thermal Imaging Scans", description: "Infrared scanning of motors, panels, and connections to detect developing hotspots." },
    { icon: Droplet, title: "Lubrication Programs", description: "Scheduled lubrication management to prevent bearing wear from under- or over-greasing." },
    { icon: ClipboardCheck, title: "Insulation Resistance Trending", description: "Periodic Megger testing tracked over time to catch insulation degradation." },
    { icon: TrendingUp, title: "Predictive Failure Alerts", description: "Trend analysis that flags equipment approaching failure before it stops production." },
    { icon: FileText, title: "Maintenance Reporting", description: "Clear, actionable condition reports after every scheduled visit." },
  ],
  process: [
    { step: "01", icon: Search, title: "Equipment Audit & Baseline", description: "Fleet audit to establish baseline vibration, thermal, and insulation readings." },
    { step: "02", icon: Calendar, title: "Maintenance Schedule Design", description: "A visit and inspection schedule built around your production calendar." },
    { step: "03", icon: Radar, title: "Scheduled Inspections", description: "Vibration analysis, thermal scanning, and lubrication carried out on schedule." },
    { step: "04", icon: Activity, title: "Diagnostic Data Review", description: "Readings compared against baseline to flag developing faults." },
    { step: "05", icon: FileText, title: "Reporting & Recommendations", description: "A clear report with prioritized recommendations after every visit." },
  ],
  equipment: [
    "Industrial motors and drives",
    "Servo and spindle motor systems",
    "Transformers and switchgear",
    "Pumps and rotating equipment",
    "Gearboxes and coupling assemblies",
    "Full facility equipment fleets",
  ],
  industriesSlugs: ["pharmaceutical", "food-processing", "cement", "manufacturing"],
  gallery: [
    { title: "Vibration Analysis Session", icon: Radar, tag: "Facility", category: "Testing Laboratory" },
    { title: "Thermal Scanning Inspection", icon: Thermometer, tag: "Facility", category: "Testing Laboratory" },
    { title: "Lubrication Program Rollout", icon: Droplet, tag: "Facility", category: "Workshop" },
  ],
  faqs: [
    {
      question: "How often are preventive maintenance visits scheduled?",
      answer: "Visit frequency is designed around your equipment criticality and production schedule, typically ranging from monthly to quarterly inspections.",
    },
    {
      question: "What's included in a preventive maintenance report?",
      answer: "Each report includes vibration, thermal, and insulation readings compared against baseline, with prioritized recommendations for any developing issues.",
    },
    {
      question: "Can preventive maintenance be combined with a repair contract?",
      answer: "Yes, many clients combine scheduled preventive maintenance with priority repair response, so issues caught during inspection are resolved quickly.",
    },
    {
      question: "Does preventive maintenance reduce our repair costs over time?",
      answer: "Yes. Catching bearing wear, insulation degradation, or misalignment early typically costs a fraction of an emergency breakdown repair and avoided downtime.",
    },
  ],
};
