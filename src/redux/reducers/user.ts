const initialState = {
    email: '',
};

export default (state = initialState, action) => {
    console.log('action ',action)
    
    switch (action.type) {
      case 'ADD_USER':
        return {
          ...state,
          email: state.email = action.payload,
        };
      default:
        return state;
    }
  };