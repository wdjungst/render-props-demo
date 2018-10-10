import React from 'react'

const COLD = 50
const HOT = 80

class Temp extends React.Component {
  state = { f: 0, feels: 'cold' }

  setTemp = ({ target: { value }}) => {
    let feels 
    if (value >= HOT)
      feels = 'hot'
    else if (value <= COLD)
      feels = 'cold'
    else
      feels = 'meh'

    this.setState({ f: value, feels })
  }

  render() {
    const { f, feels } = this.state
    return (
      <>
        <input 
          value={f}
          onChange={this.setTemp}
          type="number"
          step="0.1"
        />
        { this.props.children(f, feels) }
      </>
    )
  }
}

export default Temp
