import React from 'react';


    
   class Clock extends React.Component{
    constructor(props){
            super(props);
            this.state = {date: new Date()};
    }
    componentDidMount(){
      setInterval(()=>{
        this.setState({date: new Date()})
      },1000)
    }
     render(){
        return (
            <h1 className='hello'>Hello Mr Yahya:{this.state.date.toLocaleTimeString(this.props.locale)}</h1>
            );
     }
   }
   
    export default Clock;