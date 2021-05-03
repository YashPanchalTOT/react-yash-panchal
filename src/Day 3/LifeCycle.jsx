import React, { Component } from 'react'
class Lifecycle extends Component {
    
    state = {
        count: 0
    }
    componentDidMount(){
        console.log("Component is mounted successfully");
    }  

    static getDerivedStateFromProps(props, state){
        console.log("Component will receive props");
        return null;
    }

    shouldComponentUpdate(newProps, newState){
        return true;
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.myNumber < 0 || this.props.myNumber > 6)
            throw new Error("Invalid Age for minor");
        console.log("Component updated method works successfully");
    }

    componentWillUnmount(){
        console.log("Component will unmount successfully!");
    }

    render(){
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
    
}
export default Lifecycle;