import { Search, Stethoscope, FileText, Wrench, TestTube2, PackageCheck } from "lucide-react";

export const processSteps = [
  {
    step: "01",
    icon: Search,
    title: "Inspection",
    description: "A detailed physical and electrical inspection to record the equipment's condition on arrival.",
  },
  {
    step: "02",
    icon: Stethoscope,
    title: "Diagnosis",
    description: "Advanced diagnostic testing pinpoints the root cause of failure with documented findings.",
  },
  {
    step: "03",
    icon: FileText,
    title: "Quotation",
    description: "A transparent, itemized quotation is issued covering scope, materials, and timeline.",
  },
  {
    step: "04",
    icon: Wrench,
    title: "Repair",
    description: "Certified engineers carry out the repair using premium materials and precision workmanship.",
  },
  {
    step: "05",
    icon: TestTube2,
    title: "Testing",
    description: "Every unit undergoes rigorous load, insulation, and performance testing before sign-off.",
  },
  {
    step: "06",
    icon: PackageCheck,
    title: "Delivery",
    description: "Equipment is packaged, documented, and delivered or reinstalled with warranty coverage.",
  },
];
