import ServiceDetailTemplate from "../../components/service/ServiceDetailTemplate";
import { transformerRepairData } from "../../data/serviceDetails/transformerRepair";

function TransformerRepair() {
  return <ServiceDetailTemplate data={transformerRepairData} />;
}

export default TransformerRepair;
