import { Section } from "../components/EncourageSection/Section";
import dog from "../../../assets/image/encourages/dog.png";
import dog2 from "../../../assets/image/encourages/dog2.png";

export const Main = () => {
  return (
    <div>
      <Section
        sectionSide="true"
        imageSrc={dog}
        title="W trosce o potrzeby Twojego zwierzaka"
        description="Kompleksowa wyszukiwarka usług dla zwięrząt, która powstała z myślą 
        o czworonogach i ich właścicielach ułatwiając im dostęp do szerokiego pasma specjalistów."
        imageSide="right"
        descriptionSide="left"
      />
      <Section
        sectionSide={false}
        imageSrc={dog2}
        title="Wszystkie usługi w jednym miejscu!"
        description={
          <>
            Świadomość opiekunów w zakresie profilaktyki swoich zwierząt
            regularnie wzrasta. Próbując sprostać wymaganiom i ułatwić
            włascicielom czworonogów dostep do fachowej opieki oraz
            profesjonalnych usług, stworzyliśmy platformę
            <strong>PETS Adopt & Care.</strong>
            <span>
              <strong> Załóż konto</strong> już dziś by cieszyć się
              nieograniczonym dostępem do szerokiego grona specjalistów i usług
              jakie oferuje nasz portal.
            </span>
            <span>
              <strong>PETS Adopt & Care</strong> to również świetny kanał
              promocji swojej firmy, a zarazem prosty sposób umawiania wizyt dla
              swoich podopiecznych.
            </span>
            <span>
              <strong>Zarejestruj swoją firmę</strong> aby dołaćzyć do naszego
              grona specjalistów i świadczyć usługi dla wszystkich miłośników
              zwierząt!
            </span>
          </>
        }
        imageSide="left"
        descriptionSide="right"
      />
    </div>
  );
};
