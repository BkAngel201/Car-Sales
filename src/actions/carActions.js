export const addFeature = (id) => {
    return { type: "ADD_FEATURE", payload: id };
};
export const deleteFeature = (id) => {
    return { type: "DELETE_FEATURE", payload: id };
};
export const chooseCar = (car) => {
    return { type: "CHOOSE_CAR", payload: car}
}