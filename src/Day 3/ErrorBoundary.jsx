import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = { hasError: false};
    }

    static getDerivedStateFromError(error){
        return { hasError: true};
    }

    componentDidCatch(error, errorInfo){
        console.warn(error, errorInfo);
    }

    render() {
        if(this.state.hasError){
            return (
                    <h1>Something went wrong.<br/>Wait for few Seconds..</h1>
            );
        }

        return this.props.children;
    }
}