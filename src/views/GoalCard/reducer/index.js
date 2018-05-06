const initial = {
  names: ['paul'],
  count: 1,
  admin: {
    name: 'John',
    last: 'theo'
  }
}

const cardReducer = (state = initial, action) => {
  switch (action.type) {
    case 'NEW_AR':
      const { names } = state
      names.push(action.payload)
      return { ...state, names }
    case 'COUNT':
      let { count } = state
        count += 1
      return { ...state, count }
    case 'EDIT_ADMIN':
      let { admin } = state,
      name = action.payload;
      admin = { ...admin, name}
      return { ...state, admin }
    default:
      return state;
  }
};

export default cardReducer;
