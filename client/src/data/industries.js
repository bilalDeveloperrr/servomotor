import {
  Factory,
  Bot,
  Building2,
  Shirt,
  Newspaper,
  Pill,
  Beef,
  Zap,
  Mountain,
  Layers,
  Package,
  Car,
} from "lucide-react";

export const industries = [
  {
    slug: "manufacturing",
    icon: Factory,
    title: "Manufacturing",
    description:
      "Production-line motors and drives run continuously under variable load. Our rapid-response repair and scheduled maintenance programs keep manufacturing lines running and prevent unplanned stoppages that cascade through the production schedule.",
    relatedServices: ["industrial-motor-repair", "preventive-maintenance", "emergency-breakdown-services"],
  },
  {
    slug: "automation",
    icon: Bot,
    title: "Automation",
    description:
      "Robotic cells and automated machinery depend on precisely calibrated servo and spindle motors. We restore positioning accuracy and repeatability so automated systems return to full-spec performance rather than degraded, drifting operation.",
    relatedServices: ["servo-motor-repair", "spindle-motor-repair"],
  },
  {
    slug: "steel-plants",
    icon: Building2,
    title: "Steel Plants",
    description:
      "Rolling mills and heavy-duty drives operate in high-temperature, high-vibration environments that accelerate winding and bearing wear. Our rewinding and transformer repair teams are equipped for the scale and urgency steel operations demand.",
    relatedServices: ["industrial-motor-repair", "industrial-transformer-repair", "coil-rewinding"],
  },
  {
    slug: "textile",
    icon: Shirt,
    title: "Textile",
    description:
      "Spinning, weaving, and processing lines rely on large populations of motors running around the clock. Our rewinding turnaround times are built around minimizing loom and spindle downtime that directly impacts output quotas.",
    relatedServices: ["motor-rewinding", "industrial-motor-repair"],
  },
  {
    slug: "paper-mills",
    icon: Newspaper,
    title: "Paper Mills",
    description:
      "Paper machines demand tightly synchronized motor drives across multiple sections. We repair and rebalance drive motors to maintain the speed synchronization that sheet quality and machine uptime depend on.",
    relatedServices: ["industrial-motor-repair", "coil-rewinding"],
  },
  {
    slug: "pharmaceutical",
    icon: Pill,
    title: "Pharmaceutical",
    description:
      "Cleanroom and process equipment require repair work that meets strict validation and documentation standards. Our preventive maintenance programs help pharmaceutical facilities avoid the compliance risk of unplanned equipment failure.",
    relatedServices: ["preventive-maintenance", "servo-motor-repair"],
  },
  {
    slug: "food-processing",
    icon: Beef,
    title: "Food Processing",
    description:
      "Washdown environments and continuous shift operation put unique stress on motor seals and windings. We help food processing plants stay ahead of failure with scheduled inspection and fast repair turnaround during production windows.",
    relatedServices: ["preventive-maintenance", "industrial-motor-repair"],
  },
  {
    slug: "power-plants",
    icon: Zap,
    title: "Power Plants",
    description:
      "Generation and auxiliary equipment failures carry high operational and safety stakes. Our transformer and coil rewinding teams work to strict testing protocols to restore equipment to rated performance with full documentation.",
    relatedServices: ["industrial-transformer-repair", "coil-rewinding"],
  },
  {
    slug: "mining",
    icon: Mountain,
    title: "Mining",
    description:
      "Extraction and conveyance equipment operates in abrasive, high-load conditions far from easy replacement. Our field engineering teams and emergency dispatch are built to reach remote mining sites and restore operation quickly.",
    relatedServices: ["industrial-motor-repair", "emergency-breakdown-services"],
  },
  {
    slug: "cement",
    icon: Layers,
    title: "Cement",
    description:
      "Kilns, crushers, and grinding mills place continuous heavy load on large industrial motors. We combine preventive diagnostics with heavy-motor repair capability to reduce the production losses a single motor failure can cause.",
    relatedServices: ["industrial-motor-repair", "preventive-maintenance"],
  },
  {
    slug: "packaging",
    icon: Package,
    title: "Packaging",
    description:
      "High-speed packaging lines depend on precise servo and spindle motor timing. Our precision repair and calibration work restores the synchronization accuracy that packaging throughput and product consistency rely on.",
    relatedServices: ["servo-motor-repair", "spindle-motor-repair"],
  },
  {
    slug: "automotive",
    icon: Car,
    title: "Automotive",
    description:
      "Assembly and machining lines run tightly choreographed servo and CNC spindle motors. We deliver precision rebuilds and rapid turnaround that keep automotive production cells within their scheduled cycle times.",
    relatedServices: ["spindle-motor-repair", "servo-motor-repair"],
  },
];
