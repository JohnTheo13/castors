

const studiesReducer = (state = { records: {} }, action) => {
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
    case 'FAILED_FETCHING':
      return {
        ...state,
        fetching: false,
        finishedFetching: false
      }
    case 'RECORDS_FETCHING':
      return {
        ...state,
        recordsFetching: true
      }
    case 'RECORDS_FETCHED':
      let records = {
        ...state.records,
        ...action.payload
      }
      return {
        ...state,
        recordsFetching: false,
        recordsFetched: true,
        records
      }
    default:
      return state;
  }
}

export default studiesReducer;
