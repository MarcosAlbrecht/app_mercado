export const addEmail = (email: string) => {
    return {
      type: 'ADD_EMAIL',
      payload: email,
    };
  };