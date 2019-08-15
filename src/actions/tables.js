export const getDataTable = () => async (dispatch, getState, axios) => {
  const dataTable = await axios("/get_products.php");
  dispatch({
    type: "GET_DATA",
    payload: dataTable,
  });
};

export const getSection = (dataSection) => async (dispatch, getState, axios) => {
  dispatch({
    type: "GET_SECTION",
    payload: dataSection,
  });
};
