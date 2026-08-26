const orders = [];

export function createOrder({ name, email, productId, quantity}) {
  return {
    id: Date.now(),
    name,
    email,
    productId,
    quantity,
    createdAt: new Date().toISOString()
  };
}
export default orders;
