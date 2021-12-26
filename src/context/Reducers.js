const reducers = (state, action) => {
  switch (action.type) {
    case 'ADD_NAME':
      return {...state, nameList: [...state.nameList, action.payload.name]};

    default:
      return state;
  }
};

export default reducers;
