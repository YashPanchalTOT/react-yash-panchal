import React, {Component} from 'react'
import Button from './Button';
import PureComponent from './PureComponent';
// import ParaComponent from './ParaComponent';

class App extends Component{
   
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            count: 1,
            items: [],
            timer: 0,
            userName: null
        }
    }

    incrementCountFunction = (props) => {
        this.setState({count: this.state.count + 1})
    }

    decrementCountFunction = (props) => {
        this.setState({count: this.state.count - 1})
    }

    resetCountFunction = (props) => {
        this.setState({count: 1})
    }
    
    componentDidMount(){
        this.setState({timer: 0});
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result
                })
            },
            (error) => {
                this.setState({
                    isLoaded: false,
                    error
                });
            }
        )      
        this.interval = setInterval(() => this.setState({ timer: this.state.timer + 1}), 1000);
        console.log("Component is mounted successfully");
    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.state.count === 5 && nextState.count === 6) {
            if(window.confirm("Do you want to see more than 5 records?"))
                return true;
            else
                return false;
        }
        if((this.state.timer) % 20 === 0){
            console.log("Force Update method is executed")
            this.forceUpdate();
        }
        return true;
    }

    static getDerivedStateFromProps(props, state){
        return {userName: props.name};
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            if(this.state.count < 1|| this.props.countNum > 100)
                throw new Error("Record Id should be between 1 and 100");
            console.log("Component updated method works successfully");
        }
    }



    componentWillUnmount() {
        clearInterval(this.interval);
        console.log("Component will unmount method worked")
    }

    render(){
        const { items, count, timer} = this.state;
        return(
            <div style={{textAlign: 'center'}}>
                <div>
                    <Button title="Increment" clicked={() => this.incrementCountFunction()}></Button>
                    <Button title="Decrement" clicked={() => this.decrementCountFunction()}></Button>
                    <Button title="Reset" clicked={() => this.resetCountFunction()}></Button> 
                </div>
                <PureComponent countNum={count}/>
                <PureComponent countNum={"Time Spent on Website(in seconds): " + timer} />
                <ul style={{listStyleType: 'none'}}>
                    {
                        items.map(item => {
                            if(item.id > count){
                                return null
                            }
                            return <li>{item.id + ". " + item.title}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default App;