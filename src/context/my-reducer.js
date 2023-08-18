export const myReducer = (state, action) => {
  console.log("state in reducer =", state);
  console.log("action =", action.payLoad);
  switch (action.type) {
    case "add to cart":
      return { ...state, shopBasket: [...state.shopBasket, action.payLoad] , totalPrice:[...state.totalPrice , action.payLoad.price]};
    case "search":
      return { ...state, searchInputValue: action.payLoad };
      case "nike":
        return {...state ,targetFilter:[...state.targetFilter, action.payLoad]}
  }
};
