import { StepByStepList } from "./StepList";
import { Section } from "../components/EncourageSection/Section";
import dog from "../../../assets/image/encourages/dog.jpg";
import { SelectCategory } from "../../../components/SelectCategory";

export const Main = () => {
  return (
    <div>
      <SelectCategory />
      <Section
        imageSrc={dog}
        title="W trosce o potrzeby Twojego zwierzaka"
        description="Kompleksowa wyszukiwarka usług dla zwięrząt, która powstała z myślą 
        o czworonogach i ich właścicielach ułatwiając im dostęp do szerokiego pasma specjalistów."
      />
      <StepByStepList />
    </div>
  );
};
