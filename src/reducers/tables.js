const initialState = {};
export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, dataTable: action.payload };
    case "GET_SECTION":
      return { ...state, dataSection: action.payload };
    case "GET_DATA_BASKET":
      return { ...state, dataSendBasket: action.payload };
    case "GET_TOTAL":
      return { ...state, total: action.payload };
    default:
      return state;
  }
}
