

const studiesReducer = (state = {}, action) => {
  switch (action.type) {
    case 'START_FETCHING_STUDIES':
      return {
        ...state,
        fetching: true,
        finishedFetching: false
      }
    case 'FINISHED_FETCHING':
      return {
        ...state,
        fetching:false,
        finishedFetching: true,
        ...action.payload
      }
    default:
      return state;
  }
}

export default studiesReducer;
