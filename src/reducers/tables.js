const initialState = {};
export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, dataTable: action.payload };
    case "GET_SECTION":
      return { ...state, dataSection: action.payload };
    default:
      return state;
  }
}
