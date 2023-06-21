export const minHeight = {
  minHeight: `calc(100vh - var(--navbar-height) - var(--footer-height))`,
};

export const currencyFormat = (amount: number) => {
  return "$" + (amount / 100).toFixed(2)
}