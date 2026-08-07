import ServiceDetailTemplate from "../components/service/ServiceDetailTemplate";
import { emergencyBreakdownServicesData } from "../data/serviceDetails/emergencyBreakdownServices";

function EmergencyServices() {
  return <ServiceDetailTemplate data={emergencyBreakdownServicesData} />;
}

export default EmergencyServices;
