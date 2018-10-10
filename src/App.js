import React from 'react'
import Temp from './Temp'
import C from './C'
import K from './K'

class App extends React.Component {
  state = { type: 'c' }

  toggleType = () => {
    this.setState( state => ({ type: state.type === 'c' ? 'k' : 'c' }) )
  }

  render() {
    const { type } = this.state
    const Converter = type === 'c' ? C : K
    return (
      <>
        <button onClick={this.toggleType}>
          Show { type === 'c' ? 'K' : 'C' }
        </button>
        <Temp>
          { (data, feels) => 
          <>
            <Converter f={data} feels={feels}/>
          </>
          }
        </Temp>
      </>
    )
  }
}

export default App
