// @flow
import React, { Component } from 'react';
import moment from 'moment';

type RecordType = {
  record: {
    id: string,
    created_on: {
      date: Date
    },
    _embedded: {
      institute: { name: number }
    }
  }
};

class Record extends Component<RecordType> {
  render () {
    const { record } = this.props
    return (
      <div>
        <h5>{record.id}</h5>
        <p>Created on {moment(record.created_on.date).format("MMM Do YY")} by {record._embedded.institute.name}</p>
      </div>
    )
  }
};

export default Record;
