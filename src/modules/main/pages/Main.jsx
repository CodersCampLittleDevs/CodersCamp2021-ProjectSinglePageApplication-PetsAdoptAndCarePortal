import { Section } from "../components/EncourageSection/Section";
import dog from "../../../assets/image/encourages/dog.jpg";
import { SearchForm } from "../../../components/SearchForm/SearchForm";
import { DividerSection } from "../../../components/DividerSection/DividerSection";

export const Main = () => {
  return (
    <div>
      Main
      <SearchForm />
      <Section
        imageSrc={dog}
        title="W trosce o potrzeby Twojego zwierzaka"
        description="Kompleksowa wyszukiwarka usług dla zwięrząt, która powstała z myślą 
        o czworonogach i ich właścicielach ułatwiając im dostęp do szerokiego pasma specjalistów."
      />
      <DividerSection />
    </div>
  );
};
