export const clearFormAfterSubmit = (getValues, setValue) => {
  const data = getValues();
  Object.keys(data).forEach((key) => {
    setValue(key, "");
  });
};
