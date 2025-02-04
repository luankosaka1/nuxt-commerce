export default (price: { currency: string, value: number }) => {
  return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3, style: 'currency', currency: price.currency }).format(
    price.value,
  );
}
