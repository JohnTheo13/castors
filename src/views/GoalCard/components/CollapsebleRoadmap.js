import React, { Component } from 'react'

const collapsedStyle = collapsed => ({
  maxHeight: collapsed ? '0em' : 'fit-content',
  lineHeight: '1.7em',
  marginBottom: '0px',
  overflow: 'hidden',
  marginTop: '6px',
  padding: '0px',
})

const pContainer = {
  lineHeight: '1.7em',
  marginBottom: '0px',
  fontFamily: 'Open Sans, sans-serif',
}


class CollapsebleRoadmap extends Component {
  constructor(props){
    super(props)
    this.state = { collapsed: true, collapsible: false }
    this.toggle = this.toggle.bind(this)
  }

  componentDidMount() {
    if (this.container.offsetHeight > 82) {
      this.setState({ collapsible: true }) // eslint-disable-line
    }
  }

  toggle() {
    this.setState({ collapsed: !this.state.collapsed })
  }

  render() {
    const { children } = this.props
    return (
      <div>
      <div className="collapsible" style={collapsedStyle(this.state.collapsed)} >
        <div ref={(container) => { this.container = container }} style={pContainer} >
          {children}
        </div>
      </div>
        <button onClick={this.toggle} >
          collapse
        </button>
      </div>
    )
  }
}

export default CollapsebleRoadmap;
