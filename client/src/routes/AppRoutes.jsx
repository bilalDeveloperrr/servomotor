import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Services = lazy(() => import("../pages/Services"));
const Industries = lazy(() => import("../pages/Industries"));
const Gallery = lazy(() => import("../pages/Gallery"));
const Contact = lazy(() => import("../pages/Contact"));
const NotFound = lazy(() => import("../pages/NotFound"));
const PreventiveMaintenance = lazy(() => import("../pages/PreventiveMaintenance"));
const EmergencyServices = lazy(() => import("../pages/EmergencyServices"));

const ServoMotorRepair = lazy(() => import("../pages/services/ServoMotorRepair"));
const MotorRewinding = lazy(() => import("../pages/services/MotorRewinding"));
const IndustrialMotorRepair = lazy(() => import("../pages/services/IndustrialMotorRepair"));
const SpindleMotorRepair = lazy(() => import("../pages/services/SpindleMotorRepair"));
const CoilRewinding = lazy(() => import("../pages/services/CoilRewinding"));
const TransformerRepair = lazy(() => import("../pages/services/TransformerRepair"));

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/servo-motor-repair" element={<ServoMotorRepair />} />
        <Route path="/services/motor-rewinding" element={<MotorRewinding />} />
        <Route path="/services/industrial-motor-repair" element={<IndustrialMotorRepair />} />
        <Route path="/services/spindle-motor-repair" element={<SpindleMotorRepair />} />
        <Route path="/services/coil-rewinding" element={<CoilRewinding />} />
        <Route path="/services/industrial-transformer-repair" element={<TransformerRepair />} />
        <Route path="/services/preventive-maintenance" element={<PreventiveMaintenance />} />
        <Route path="/services/emergency-breakdown-services" element={<EmergencyServices />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
