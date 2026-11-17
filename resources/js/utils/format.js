const dateFormatter = new Intl.DateTimeFormat('es-AR', {
  weekday: 'short',
  day: 'numeric',
  month: 'short',
  year: 'numeric',
})

const priceFormatter = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  maximumFractionDigits: 0,
})

// Se agrega la hora para que la fecha no se corra un día por la zona horaria
export const formatDate = (isoDate) => dateFormatter.format(new Date(`${isoDate}T00:00:00`))

// MySQL devuelve el precio como texto ("0.00"), por eso se convierte con Number()
export const formatPrice = (price) =>
  Number(price) === 0 ? 'Gratis' : priceFormatter.format(price)