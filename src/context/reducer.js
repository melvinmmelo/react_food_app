export const actionType = {
  SET_USER : 'SET_USER',
  SET_FOOD_ITMES : 'SET_FOOD_ITEMS'
}

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionType.SET_FOOD_ITMES:
      return {
        ...state,
        foodItems: action.foodItems,
      };
    default:
      return state;
  }
}
export default reducer