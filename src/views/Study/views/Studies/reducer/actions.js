export const startFetcing = () => ({
  type: 'START_FETCHING_STUDIES'
});

export const finishedFetching = payload => ({
  type: 'FINISHED_FETCHING',
  payload
});
