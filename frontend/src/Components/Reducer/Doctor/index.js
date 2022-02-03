// Reducer File
// initialState
const initialState = {
    doctors: []
}
// Reducer
 const doctorsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'SET_Doctors':
            return state.doctors;
        case 'ADD_Doctor':
            return [...state.doctors, payload];
        case 'UPDATE_Doctor':
            return state.doctors = state.doctors.map((e) => {
                if (e.id == payload.id)
                    return payload;
                return e;


            });
        case 'DELETE_Doctor':
            return state.doctors=state.doctors.filter(doctor => doctor.id!==payload);
        
            default:
            return state.doctors;
    }
}

// Actions
export const setDoctors = (doctors) => {
    return { type: 'SET_DoctorS', payload: doctors };
}
export const addDoctor = (newDoctor) => {
    return { type: 'ADD_Doctor', payload: newDoctor };

}
export const updateDoctor = (updatedDoctor) => {
    return { type: 'UPDATE_Doctor', payload: updatedDoctor };

}
export const deleteDoctor = (id) => {
    return { type: 'DELETE_Doctor', payload: id };

}
export default doctorsReducer;