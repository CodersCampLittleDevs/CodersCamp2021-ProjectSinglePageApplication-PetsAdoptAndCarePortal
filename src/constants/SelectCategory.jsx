const SERVICES = [
  {
    type: "Adoption",
  },
  {
    type: "Hotel,",
  },
  {
    type: "Services",
  },
];

export const SelectCategory = () => (
  <div>
    Wybierz rodzaj usługi:
    <select id="services">
      {typeOfService.map((category) => (
        <option value={category.type}>{category.type}</option>
      ))}
    </select>
  </div>
);
