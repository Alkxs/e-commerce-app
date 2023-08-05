export const formatPrice = (price: number) => {
  return (price / 100).toLocaleString(undefined, {
    style: "currency",
    currency: "EUR",
  });
};
