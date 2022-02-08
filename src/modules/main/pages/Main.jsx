import { Section } from "../components/EncourageSection/Section";
import dog from "../../../assets/image/encourages/dog.jpg";
import { SearchForm } from "../../../components/SearchForm/SearchForm";
import { DividerSection } from "../../../components/DividerSection/DividerSection";
import { OpinionsSection } from "../../../components/CustomerOpinions/OpinionsSection/OpinionsSection";
import { ServicesList } from "../../../components/ServicesList/ServicesList";

export const Main = () => {
  return (
    <div>
      <SearchForm />
      <Section
        imageSrc={dog}
        title="W trosce o potrzeby Twojego zwierzaka"
        description="Kompleksowa wyszukiwarka usług dla zwięrząt, która powstała z myślą 
        o czworonogach i ich właścicielach ułatwiając im dostęp do szerokiego pasma specjalistów."
      />
      <ServicesList />
      <OpinionsSection />
      <DividerSection />
    </div>
  );
};
