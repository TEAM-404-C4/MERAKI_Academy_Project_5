// Reducer File
// initialState
const initialState = {
    doctorId=0,
}
// Reducer
 const doctorsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'SET_Doctor':
            return payload;
        
            default:
            return state.doctorId
    }
}

export default doctorsReducer;

// Actions

export const setDoctor = (id) => {
    return { type: 'set_Doctor', payload: id };

}