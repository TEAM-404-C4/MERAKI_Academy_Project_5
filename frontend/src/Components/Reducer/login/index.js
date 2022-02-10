const initialState = {
  token: "" || localStorage.getItem("token"),
  isLoggedIn: localStorage.getItem("token") ? true : false,
  userId: "",
  roleId: "",
  profileImage: "",
};

//======================

// Reducers

const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOG_IN":
      localStorage.setItem("token", payload.token);
      return {
        token: payload.token,
        isLoggedIn: true,
        userId: payload.userId,
        roleId: payload.roleId,
        profileImage: payload.profileImage,
      };

    case "LOG_OUT":
      localStorage.clear();
      return {
        token: "",
        isLoggedIn: payload,
        userId: "",
        roleId: "",
      };
    default:
      return state;
  }
};

export default loginReducer;

//=======================

// Actions

export const loginRedux = (result) => {
  return { type: "LOG_IN", payload: result };
};

export const logoutRedux = () => {
  return { type: "LOG_OUT", payload: false };
};
