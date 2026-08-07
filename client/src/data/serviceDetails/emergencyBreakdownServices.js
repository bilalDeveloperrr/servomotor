import { AlertTriangle, PhoneCall, Truck, Search, Wrench, PackageCheck, FileText, Siren, Clock, ShieldCheck } from "lucide-react";

export const emergencyBreakdownServicesData = {
  slug: "emergency-breakdown-services",
  title: "Emergency Breakdown Services",
  icon: AlertTriangle,
  tagline: "24/7 rapid-response repair when production can't wait",
  overviewParagraphs: [
    "An unplanned motor or transformer failure doesn't wait for business hours, and neither do we. Our emergency breakdown team is on call 24/7, every day of the year, with rapid-response field engineers dispatched to diagnose and repair critical equipment on-site wherever possible.",
    "When a full repair can't be completed immediately, we prioritize getting your line running again through temporary bypass or rapid replacement, followed by a permanent fix and a documented root cause report.",
  ],
  features: [
    { icon: PhoneCall, title: "24/7 Dispatch Hotline", description: "A staffed emergency line, every hour of every day, with no automated queue." },
    { icon: Truck, title: "Rapid-Response Field Engineers", description: "Field teams equipped to diagnose and repair on-site without transporting equipment." },
    { icon: Search, title: "On-Site Diagnostics", description: "Portable diagnostic equipment for immediate fault isolation at your facility." },
    { icon: PackageCheck, title: "Priority Parts Sourcing", description: "Emergency sourcing network for bearings, windings, and replacement components." },
    { icon: Wrench, title: "Emergency Rewind Turnaround", description: "Expedited workshop rewinding when equipment must be removed for repair." },
    { icon: FileText, title: "Root Cause Report", description: "A documented failure analysis so the same fault doesn't recur." },
  ],
  process: [
    { step: "01", icon: Siren, title: "Emergency Call & Triage", description: "Your call is triaged immediately to assess severity and required response." },
    { step: "02", icon: Truck, title: "Engineer Dispatch", description: "The nearest available field engineer is dispatched to your facility." },
    { step: "03", icon: Search, title: "On-Site Diagnosis", description: "Fault isolated on-site using portable diagnostic equipment." },
    { step: "04", icon: Wrench, title: "Rapid Repair or Bypass", description: "Immediate repair, or a temporary bypass to restore production while a permanent fix is arranged." },
    { step: "05", icon: FileText, title: "Root Cause Report", description: "A documented report identifying the failure cause and preventive recommendations." },
  ],
  equipment: [
    "Industrial motors and drives",
    "Servo and spindle motor systems",
    "Transformers and switchgear",
    "Pumps and critical rotating equipment",
    "Control panels and motor starters",
    "Any production-critical electrical equipment",
  ],
  industriesSlugs: ["manufacturing", "mining", "steel-plants", "power-plants"],
  gallery: [
    { title: "Emergency Field Repair", icon: Truck, tag: "Before / After", category: "Motor Repairs" },
    { title: "Rapid Rewind Turnaround", icon: Wrench, tag: "Before / After", category: "Motor Repairs" },
    { title: "24/7 Dispatch Control Room", icon: PhoneCall, tag: "Facility", category: "Workshop" },
  ],
  faqs: [
    {
      question: "How fast can an engineer reach our facility?",
      answer: "Response time depends on your location relative to our field engineering teams. Emergency calls are triaged immediately and the nearest available engineer is dispatched without delay.",
    },
    {
      question: "Is emergency breakdown support really available 24/7?",
      answer: "Yes, including nights, weekends, and holidays. Our emergency hotline is staffed around the clock, every day of the year.",
    },
    {
      question: "What happens if the equipment can't be repaired on-site?",
      answer: "We prioritize getting your line running through a temporary bypass or rapid-turnaround workshop repair, followed by a permanent fix once the immediate crisis is resolved.",
    },
    {
      question: "Do you charge extra for after-hours emergency calls?",
      answer: "Emergency response carries a priority service rate, confirmed transparently before work begins. There are no hidden dispatch fees.",
    },
  ],
};
