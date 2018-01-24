export const addToCart = (item) => {
  // Return action
  return {
    // Unique identifier
    type: 'ADD_TO_CART',
    // Payload
    item: item
  }
};
