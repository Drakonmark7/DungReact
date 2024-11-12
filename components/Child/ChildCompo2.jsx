/* eslint-disable react/prop-types */
import React from "react";

class ChildComponent2 extends React.Component{
    render(){
        return(
            //<button {...this.props.abc()}>Click me</button>
            this.props.abc
        )
    }
}

export default ChildComponent2;