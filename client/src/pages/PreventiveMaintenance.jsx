import ServiceDetailTemplate from "../components/service/ServiceDetailTemplate";
import { preventiveMaintenanceData } from "../data/serviceDetails/preventiveMaintenance";

function PreventiveMaintenance() {
  return <ServiceDetailTemplate data={preventiveMaintenanceData} />;
}

export default PreventiveMaintenance;
