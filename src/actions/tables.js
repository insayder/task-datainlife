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

export const getDataBasket = (dataBasket) => async (dispatch, getState, axios) => {
  const dataSendBasket = await axios({
    method: 'post',
    url: '/add_basket.php',
    data: dataBasket
  });
  dispatch({
    type: "GET_DATA_BASKET",
    payload: dataSendBasket,
  });
};

export const getTotal = (total) => async (dispatch, getState, axios) => {
  dispatch({
    type: "GET_TOTAL",
    payload: total,
  });
};

