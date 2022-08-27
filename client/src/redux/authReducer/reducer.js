import * as types from "./actionTypes";
const prevToken = JSON.parse(localStorage.getItem("creds"));
const init = {
  token: prevToken?.token || "",
  isAuth: !!prevToken?.token || false,
  img: prevToken?.img || "",
  error: false,
  isLoading: false,
};

const reducer = (state = init, action) => {
  switch (action.type) {
    case types.SIGNUP_LOADING: {
      return {
        ...state,
        error: false,
        isLoading: true,
      };
    }
    case types.SIGNUP_ERROR: {
      return {
        ...state,
        error: true,
        isLoading: false,
      };
    }
    case types.SIGNUP_SUCCESS: {
      return {
        ...state,
        error: false,
        isLoading: false,
      };
    }
    case types.LOGIN_LOADING: {
      return {
        ...state,
        error: false,
        isLoading: true,
      };
    }
    case types.LOGIN_ERROR: {
      return {
        ...state,
        error: true,
        isLoading: false,
      };
    }
    case types.LOGIN_SUCCESS: {
      localStorage.setItem("creds", action.payload);
      return {
        ...state,
        error: false,
        isLoading: false,
        isAuth: true,
        token: action.payload.token,
        img: action.payload?.img || "",
      };
    }

    default: {
      return state;
    }
  }
};
export default reducer;
