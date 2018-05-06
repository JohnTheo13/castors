export const addPeople = payload => ({
  type: 'NEW_AR',
  payload
});

export const editAdmin = payload => ({
  type: 'EDIT_ADMIN',
  payload
});

export const count = () => ({
  type: 'COUNT'
});
