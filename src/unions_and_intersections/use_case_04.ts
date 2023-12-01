(() => {
type Order = {
  total: number
  currency: string
}
type Stripe = {
  card: number
}
type Paypal = {
  email: string
}
type StripeOrder = Order & Stripe
type PaypalOrder = Order & Paypal

const isStripeOrder = (order: StripeOrder | PaypalOrder): order is StripeOrder => {
  return 'card' in order
}
const isPaypalOrder =  (order: StripeOrder | PaypalOrder): order is PaypalOrder => {
  return 'email' in order
}

const processOrder = (order: StripeOrder | PaypalOrder): void => {
  if (isStripeOrder(order)) {
    order.card // is available
    order.email // is not available
  }
  if (isPaypalOrder(order)) {
    order.card // is not available
    order.email // is available
  }
}

})()