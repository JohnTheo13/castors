import React, { Component } from 'react';
import fetchStudies from './reducer/request';

class Studies extends Component {
  constructor(props) {
    super(props)
    this.state = { resp: {} }
  }

  componentDidMount () {
    fetchStudies().then(response => {
      this.setState({ resp: response })
    });
  }

  render (){
    return (
      <div>{this.state.resp.total_items}</div>
    )
  }
}

export default Studies;
