export default (state = [], action) => {
  switch(action.type) {
  case 'ADD_TO_CART':
        return [
          ...state,
          Object.assign({}, action.item)
        ];
    default:

          return state;
        }
};
