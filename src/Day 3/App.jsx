import React, {Component} from 'react'
import Button from './Button';
//import PureComponent from './PureComponent'
import LifeCycle from './LifeCycle'

class App extends Component{
     
    state = {
        count: 0
    }

    incrementCountFunction = (props) => {
        this.setState({count: this.state.count + 1})
    }

    decrementCountFunction = (props) => {
        this.setState({count: this.state.count - 1})
    }

    resetCountFunction = (props) => {
        this.setState({count: 0})
    }
    
    render(){
        return(
            <>
                <div>
                    {/* <Button /> */}
                   <Button title="Increment" clicked={() => this.incrementCountFunction()}></Button>
                   <Button title="Decrement" clicked={() => this.decrementCountFunction()}></Button>
                   <Button title="Reset" clicked={() => this.resetCountFunction()}></Button> 
                </div>
                {/* <PureComponent/> */}
                <LifeCycle myNumber={this.state.count}/>
            </>
        );
    }
}

export default App;