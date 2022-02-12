// Reducer File
// initialState
const initialState = {
  doctorId: window.localStorage.getItem("doctorId"),
  appointment: [],
};
// Reducer
const doctorsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_Doctor":
      return { doctorId: payload };
    case "SET_Appointment":
      return { appointment: payload };

    default:
      return state;
  }
};

export default doctorsReducer;

// Actions

export const setDoctor = (id) => {
  return { type: "SET_Doctor", payload: id };
};
export const setAppointmentDoctor = (appointment) => {
  return { type: "SET_Appointment", payload: appointment };
};
