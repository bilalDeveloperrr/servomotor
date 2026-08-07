import ServiceDetailTemplate from "../../components/service/ServiceDetailTemplate";
import { servoMotorRepairData } from "../../data/serviceDetails/servoMotorRepair";

function ServoMotorRepair() {
  return <ServiceDetailTemplate data={servoMotorRepairData} />;
}

export default ServoMotorRepair;
