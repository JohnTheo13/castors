import React, { Component } from 'react';
import { connect } from 'react-redux';
import { recordsFetching, recordsFetched, institutesFetched } from '../reducer/actions';
import { fetchRecords, fetchInstitutes } from '../request';
import Record from './Record';

const collapsedStyle = collapsed => ({
  maxHeight: collapsed ? '1.9em' : 'fit-content',
  lineHeight: '1.7em',
  marginBottom: '0px',
  overflow: 'hidden',
  marginTop: '6px',
  padding: '0px',
  cursor: 'pointer'
})

const pContainer = {
  lineHeight: '1.7em',
  marginBottom: '0px',
  fontFamily: 'Open Sans, sans-serif',
}


class RecordsContainer extends Component {
  constructor(props){
    super(props)
    this.state = { collapsed: true, collapsible: false }
    this.toggle = this.toggle.bind(this)
  }

  componentDidMount() {
    if (this.container.offsetHeight > 82) {
      this.setState({ collapsible: true })
    }
    const { records, institutes, study: { study_id } } = this.props
    if(!(study_id in records)) {
      this.props.recordsFetching();
      fetchRecords(study_id)
        .then(response => {
          records[study_id] = response._embedded.records
          this.props.recordsFetched(records);
        })
      fetchInstitutes(study_id)
      .then(response => {
        institutes[study_id] = response._embedded.institutes
        this.props.institutesFetched(institutes);
      })
    }
  }

  toggle() {
    const { records, study } = this.props
    if(study.study_id in records) {
      this.setState({ collapsed: !this.state.collapsed })
    }
  }

  render() {
    const { study, records, institutes } = this.props
    return (
      <div className="collapsible" style={collapsedStyle(this.state.collapsed)} onClick={this.toggle} >
        <div>{study.name}</div>
        <div ref={(container) => { this.container = container }} style={pContainer} >
          {study.study_id in records &&
            records[study.study_id].map((record, index) =>
              <Record
                  key={record.id}
                  record={record}
              />
            )
          }
        </div>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  recordsFetching: () => dispatch(recordsFetching()),
  recordsFetched: records => dispatch(recordsFetched(records)),
  institutesFetched: institutes => dispatch(institutesFetched(institutes))
})


export default  connect(null, mapDispatchToProps)(RecordsContainer);
