// Reducer File
// initialState
const initialState = {
  doctorId: 2,
};
// Reducer
const doctorsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_Doctor":
      return payload;

    default:
      return state;
  }
};

export default doctorsReducer;

// Actions

export const setDoctor = (id) => {
  return { type: "SET_Doctor", payload: id };
};

