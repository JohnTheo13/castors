import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchStudies from './request';
import { startFetcing, finishedFetching } from './reducer/actions';

class Studies extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {
    this.props.startFetcing()
    fetchStudies()
      .then(response => {
        this.props.finishedFetching(response);
      })
  }

  render (){
    const { studies } = this.props
console.log(studies);
    return (
      <div>
        <h4>{studies.total_items}</h4>
        {studies.finishedFetching &&
          <ul>
          {
            studies.study.map((stud, index) =>
              <li key={`study-${index}`}>{stud.name}</li>
            )
          }
        </ul>
      }
      </div>
    )
  }
}

const mapToProps = ({studies: { total_items, fetching, finishedFetching, _embedded: study}}) =>  ({
  studies: {
    total_items,
    fetching,
    finishedFetching,
    ...study
  }
})

const mapDispatchToProps = dispatch => ({
  startFetcing:() => dispatch(startFetcing()),
  finishedFetching: res => dispatch(finishedFetching(res))
})

export default  connect(mapToProps, mapDispatchToProps)(Studies);
