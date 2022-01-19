import { SERVICES } from "../constants/SelectCategory";

export const SelectCategory = () => (
  <select id="services">
    <option value="">Kategoria</option>
    {SERVICES.map((category) => (
      <option value={category}>{category}</option>
    ))}
  </select>
);
