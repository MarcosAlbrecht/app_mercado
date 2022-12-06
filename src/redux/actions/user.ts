export const addUser = (email: string) => {
    return {
      type: 'ADD_USER',
      payload: email,
    };
  };