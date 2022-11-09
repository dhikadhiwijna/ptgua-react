// Create our number formatter.
const formatter = new Intl.NumberFormat("id", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
});

export const rupiahFormat = (value) => {
  return formatter.format(value);
};
