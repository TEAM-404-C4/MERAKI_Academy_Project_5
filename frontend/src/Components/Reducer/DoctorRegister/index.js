const initialState = {
  doctorInfo: {},
};
// Reducer

const doctorRegReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "PAGE":
      return {
        doctorInfo: Object.assign({}, state.doctorInfo, payload),
      };

    default:
      return state;
  }
};

export default doctorRegReducer;

// Actions

export const addInfoPage = (result) => {
  return { type: "PAGE", payload: result };
};
