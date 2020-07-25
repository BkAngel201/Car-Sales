export const initialState = 
    {
        additionalPrice: 0,
        car: {
          price: 26395,
          name: '2019 Ford Mustang',
          image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
          features: []
        },
        additionalFeatures: [
          { id: 1, name: 'V-6 engine', price: 1500 },
          { id: 2, name: 'Racing detail package', price: 1500 },
          { id: 3, name: 'Premium sound system', price: 500 },
          { id: 4, name: 'Rear spoiler', price: 250 }
        ]
      }

  export const carReducer = (state = initialState, action) => {
    console.log(state, action);
    switch (action.type) {
        case "ADD_FEATURE": 
            return {
                ...state,
                additionalPrice: state.additionalPrice + state.additionalFeatures[action.payload-1].price,
                car: {
                    ...state.car,
                    features:[
                        ...state.car.features,
                        {...state.additionalFeatures[action.payload-1]}
                    ]
                }
            };
        case "DELETE_FEATURE": {
            return {
                ...state,
                additionalPrice: state.additionalPrice - state.additionalFeatures[action.payload-1].price,
                car:{
                    ...state.car,
                    features: state.car.features.filter(el => {
                        return el.id !== action.payload
                    })
                }
            }
        }

        case "CHOOSE_CAR":
            return {
                ...state,
                ...initialState[action.payload]
            } 
            
        default:
            return state;
    }
  };