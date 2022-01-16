import { EncourageSection } from "../components/EncourageSection/EncourageSection";
import dog from "../../../assets/image/encourages/dog.jpg";

export const Main = () => {
  return (
    <div>
      <EncourageSection
        image={dog}
        title="W trosce o potrzeby Twojego zwierzaka"
        description="Kompleksowa wyszukiwarka usług dla zwięrząt, która powstała z myślą 
        o czworonogach i ich właścicielach ułatwiając im dostęp do szerokiego pasma specjalistów."
      />
    </div>
  );
};
