const typeOfService = [
  {
    type: "adoption",
    
  },
  {
    type: "hotel,",
  },
  {
    type: "services",
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
