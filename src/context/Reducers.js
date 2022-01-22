import {Alert} from 'react-native';

const reducers = (state, action) => {
  const {favoriteJobList} = {...state};
  switch (action.type) {
    case 'ADD_FAVORITE_JOB':
      const found = favoriteJobList.find(
        value => value.id === action.payload.newFavoriteJob.id,
      );

      if (found) {
        Alert.alert('Warning', 'This job is available in favorites.');
        return state;
      } else {
        const newList = [...favoriteJobList, action.payload.newFavoriteJob];

        return {...state, favoriteJobList: newList};
      }

    case 'REMOVE_FAVORITE_JOB':
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
