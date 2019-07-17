const initialState = {
    email: '',
    city: '',
    adultNumber: '',
    childrenNumber: '',
};

const circusReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SAVE_USER_EMAIL':
        return {
          ...state,
          email: action.email,
        };
      case 'SAVE_CITY':
      return {
        ...state,
        city: action.city,
      };
      case 'SAVE_ADULT_NUMBER':
      return {
        ...state,
        adultNumber: action.adultNumber,
      };
      case 'SAVE_CHILDREN_NUMBER':
      return {
        ...state,
        childrenNumber: action.childrenNumber,
      };
    default:
      return state;
  }
};

export default circusReducer;
