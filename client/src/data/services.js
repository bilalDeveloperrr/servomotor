import {
  Settings,
  CircuitBoard,
  Cog,
  Gauge,
  Layers,
  Zap,
  Activity,
  AlertTriangle,
} from "lucide-react";

export const services = [
  {
    slug: "servo-motor-repair",
    icon: Settings,
    title: "Servo Motor Repair",
    description:
      "Precision repair of AC and DC servo motors, including encoder replacement, bearing replacement, winding repair, and full performance testing and calibration.",
    features: ["Encoder replacement", "Bearing replacement", "Winding repair", "Testing & calibration"],
  },
  {
    slug: "motor-rewinding",
    icon: CircuitBoard,
    title: "Motor Rewinding",
    description:
      "Complete stator and rotor rewinding for industrial motors, executed with premium-grade insulation materials and class-leading winding accuracy.",
    features: ["Stator rewinding", "Rotor rewinding", "Class-F/H insulation", "Impedance testing"],
  },
  {
    slug: "industrial-motor-repair",
    icon: Cog,
    title: "Industrial Motor Repair",
    description:
      "Maintenance and repair of AC motors, DC motors, induction motors, brake motors, and geared motors across all frame sizes and duty ratings.",
    features: ["AC & DC motors", "Induction motors", "Brake motors", "Geared motors"],
  },
  {
    slug: "spindle-motor-repair",
    icon: Gauge,
    title: "Spindle Motor Repair",
    description:
      "Repair of high-speed CNC spindle motors including precision balancing, bearing replacement, rewinding, testing, and shaft alignment.",
    features: ["High-speed balancing", "Precision bearings", "Rewinding", "Alignment & run-out testing"],
  },
  {
    slug: "coil-rewinding",
    icon: Layers,
    title: "Coil Rewinding",
    description:
      "Specialized industrial coil rewinding for generators, pumps, transformers, and other rotating and static electrical equipment.",
    features: ["Generator coils", "Pump motor coils", "Transformer coils", "Custom coil fabrication"],
  },
  {
    slug: "industrial-transformer-repair",
    icon: Zap,
    title: "Industrial Transformer Repair",
    description:
      "Full-service maintenance for oil-filled and dry-type transformers, covering rewinding, insulation testing, and repair to restore rated performance.",
    features: ["Oil-filled transformers", "Dry-type transformers", "Insulation resistance testing", "Rewinding"],
  },
  {
    slug: "preventive-maintenance",
    icon: Activity,
    title: "Preventive Maintenance",
    description:
      "Scheduled inspections, vibration analysis, thermal scanning, lubrication programs, and predictive diagnostics that prevent failure before it happens.",
    features: ["Vibration analysis", "Thermal imaging", "Lubrication programs", "Predictive diagnostics"],
  },
  {
    slug: "emergency-breakdown-services",
    icon: AlertTriangle,
    title: "Emergency Breakdown Services",
    description:
      "24/7 emergency industrial repair support with rapid-response engineers dispatched to minimize unplanned production downtime.",
    features: ["24/7 dispatch", "Rapid response team", "On-site diagnostics", "Priority parts sourcing"],
  },
];
