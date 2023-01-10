const initialState = {
    email: '',
    user:{},
};

export default (state = initialState, action) => {
    console.log('action ',action)
    
    switch (action.type) {
      case 'ADD_EMAIL':
        return {
          ...state,
          email: state.email = action.payload,
        };

      case 'ADD_USER':
        return {
          ...state,
          user: {...state.user = action.payload},
        };

      case 'CLEAN_USER':
        return {
          ...state,
          user: {},
        }  
      
      default:
        return state;
    }
  };