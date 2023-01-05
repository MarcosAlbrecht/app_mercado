export const addEmail = (email: string) => {
  return {
    type: 'ADD_EMAIL',
    payload: email,
  };
};
export const addUser = (user: object) => {
  return {
    type: 'ADD_USER',
    payload: user,
  };
};