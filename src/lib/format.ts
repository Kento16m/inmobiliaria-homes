const currencyFormat = new Intl.NumberFormat('es', { style: 'currency', currency: 'USD' })
const numberFormat = new Intl.NumberFormat('es')
const percentFormat = new Intl.NumberFormat('es', {
  style: 'percent',
  maximumFractionDigits: 1,
  signDisplay: 'exceptZero',
})

export const formatCurrency = (value: number) => currencyFormat.format(value)
export const formatNumber = (value: number) => numberFormat.format(value)
// Recibe una fracción: 0.12 -> "+12 %"
export const formatPercent = (fraction: number) => percentFormat.format(fraction)
