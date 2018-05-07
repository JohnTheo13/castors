// @flow
import React from 'react';
import moment from 'moment';

type RecordType = {
  id: string,
  created_on: {
    date: Date
  },
  _embedded: {
    institute: { name: number }
  }
};

const Record = (record: RecordType) => {
  return (
    <div>
      <h5>{record.id}</h5>
      <p>Created on {moment(record.created_on.date).format("MMM Do YY")} by {record._embedded.institute.name}</p>
    </div>
  )
};

export default Record;
