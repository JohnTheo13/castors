export const startFetcing = () => ({
  type: 'START_FETCHING_STUDIES'
});

export const finishedFetching = payload => ({
  type: 'FINISHED_FETCHING',
  payload
});

export const failedfetching = () => ({
  type: 'FAILED_FETCHING',
});


export const recordsFetching = () => ({
  type: 'RECORDS_FETCHING',
});

export const recordsFetched = payload => ({
  type: 'RECORDS_FETCHED',
  payload
});

export const institutesFetched = payload => ({
  type: 'INSTITUTES_FETCHED',
  payload
});
