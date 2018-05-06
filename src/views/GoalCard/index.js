import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as action from './reducer/actions';
import CollapsebleRoadmap from './components/CollapsebleRoadmap'


class GoalCard extends Component {
  constructor(props){
    super(props)
    this.state = { name: '' }
    this.onChange = this.onChange.bind(this)
  }

  onChange(val) {
    this.setState({ name: val })
  }
  onClick() {
    const { name } = this.state
    this.props.addPeople(name)
    this.props.count()
  }
  render() {
    return(
      <CollapsebleRoadmap>
        redux test <strong>{this.props.name}</strong>
        <h6><b>{this.props.number}</b></h6>
        <ul>
        {
          this.props.names.map(name => <li>{name}</li>)
        }
        </ul>
        <input type="text" onChange={e => this.onChange(e.target.value)} />
        <button onClick={this.onClick.bind(this)} >add</button>
      </CollapsebleRoadmap>
    )
  }
}

const mapToProps = ({ card: { admin, count, names }}) =>  ({
  name: admin.name,
  number: count,
  names: names
})

const mapDispatchToProps = dispatch => ({
  addPeople:(val) => dispatch(action.addPeople(val)),
  editAdmin:(val) => dispatch(action.editAdmin(val)),
  count:() => dispatch(action.count())
})

export default connect(mapToProps, mapDispatchToProps)(GoalCard);
