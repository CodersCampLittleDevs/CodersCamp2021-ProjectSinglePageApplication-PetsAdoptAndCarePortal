import { EncourageSection } from "../components/EncourageSection/EncourageSection";
import { DividerSection } from "../../../components/DividerSection/DividerSection";
import { ServicesList } from "../../../components/ServicesList/ServicesList";
import { OpinionsSection, SearchForm } from "../../../components";

export const Main = () => {
  return (
    <div>
      <EncourageSection />
      <SearchForm />
      <ServicesList />
      <OpinionsSection />
      <DividerSection />
    </div>
  );
};
