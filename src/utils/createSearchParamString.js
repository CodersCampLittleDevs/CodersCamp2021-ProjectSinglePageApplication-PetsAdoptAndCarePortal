export const createSearchParamsString = (data) => {
  const params = new URLSearchParams();
  Object.keys(data).forEach((key) => {
    if (Array.isArray(data[key])) {
      data[key].forEach((element) => {
        params.set(key.toLowerCase(), element);
      });
    } else {
      params.set(key.toLowerCase(), data[key]);
    }
  });
  return params.toString();
};
