const reducers = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE_JOB':
      return {
        ...state,
        favoriteJobList: [
          ...state.favoriteJobList,
          action.payload.newFavoriteJob,
        ],
      };
    default:
      return state;
  }
};

export default reducers;
//return {...state, nameList: [...state.nameList, action.payload.name]};
