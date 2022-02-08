import { WelcomeSection } from "../components/WelcomeSection/WelcomeSection";
import { DividerSection } from "../../../components/DividerSection/DividerSection";
import { ServicesList } from "../../../components/ServicesList/ServicesList";
import { OpinionsSection, SearchForm } from "../../../components";

export const Main = () => {
  return (
    <div>
      <WelcomeSection />
      <SearchForm />
      <ServicesList />
      <OpinionsSection />
      <DividerSection />
    </div>
  );
};
