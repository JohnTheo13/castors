import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudies, addRecord } from './request';
import { startFetcing, finishedFetching, failedfetching } from './reducer/actions';
import RecordsContainer from './components/RecordsContainer';

class Studies extends Component {
  constructor(props) {
    super(props)
    this.state = { instituteId: undefined }
  }

  componentDidMount () {
    if(!this.props.studies)
      this.props.startFetcing()
      fetchStudies()
        .then(response => {
          console.log(response);
          if(response) {
            const study = {
              studies: response._embedded.study,
              total: response.total_items,
            }
            this.props.finishedFetching(study);
            return;
          }
          console.error(response.status)
          this.props.failedfetching();
        })
  }

  save = studyId => {
    const { instituteId } = this.state;
    addRecord(studyId, instituteId)
  }

  onChange = e => {
    console.log(e.target.value);
    this.setState({ instituteId: e.target.value })
  }

  render (){
    const { study: { institutes }, study } = this.props
    console.log(institutes);
    return (
      <div>
        <h4>{study.total_items}</h4>
        {study.finishedFetching &&
          <div>
          {
            study.studies.map((stud, index) =>
              <div>
                <RecordsContainer
                    institutes={institutes}
                    records={study.records}
                    key={stud.study_id}
                    study={stud}
                />
                {stud.study_id in institutes &&
                  <select onChange={e => this.onChange(e)}>
                    <option value="">Choose</option>
                    {
                      institutes[stud.study_id].map(institute =>
                        <option value={institute.id}>{institute.name}</option>
                      )
                    }
                  </select>
                }
                <button onClick={() => this.save(stud.study_id)}>Add</button>
              </div>
            )
          }
        </div>
      }
      </div>
    )
  }
}

const mapToProps = ({study: { total, fetching, finishedFetching, studies, records, institutes}}) =>  ({
  study: {
    total,
    fetching,
    finishedFetching,
    studies,
    records,
    institutes
  }
})

const mapDispatchToProps = dispatch => ({
  startFetcing:() => dispatch(startFetcing()),
  finishedFetching: res => dispatch(finishedFetching(res)),
  failedfetching: () => dispatch(failedfetching())
})

export default  connect(mapToProps, mapDispatchToProps)(Studies);
