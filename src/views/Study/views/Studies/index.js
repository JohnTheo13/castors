import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudies } from './request';
import { startFetcing, finishedFetching, failedfetching } from './reducer/actions';
import RecordsContainer from './components/RecordsContainer';

class Studies extends Component {
  constructor(props) {
    super(props)
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

  render (){
    const { study } = this.props
console.log(study.records);
    return (
      <div>
        <h4>{study.total_items}</h4>
        {study.finishedFetching &&
          <div>
          {
            study.studies.map((stud, index) =>
              <RecordsContainer records={study.records} key={`study-${index}`} study={stud}/>
            )
          }
        </div>
      }
      </div>
    )
  }
}

const mapToProps = ({study: { total, fetching, finishedFetching, studies, records}}) =>  ({
  study: {
    total,
    fetching,
    finishedFetching,
    studies,
    records
  }
})

const mapDispatchToProps = dispatch => ({
  startFetcing:() => dispatch(startFetcing()),
  finishedFetching: res => dispatch(finishedFetching(res)),
  failedfetching: () => dispatch(failedfetching())
})

export default  connect(mapToProps, mapDispatchToProps)(Studies);
