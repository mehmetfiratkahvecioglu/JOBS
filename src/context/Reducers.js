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

    case 'REMOVE_FAVORITE_JOB':
      const {favoriteJobList} = {...state};
      const {removeJobId} = action.payload;
      const newFavoriteJobList = favoriteJobList.filter(
        value => value.id !== removeJobId,
      );
      return {...state, favoriteJobList: newFavoriteJobList};
    default:
      return state;
  }
};

export default reducers;
//return {...state, nameList: [...state.nameList, action.payload.name]};
