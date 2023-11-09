import React from 'react';

class Info extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      count: 0,


    }
    this.btnPressed = this.btnPressed.bind(this)
  }

  btnPressed() {
    this.setState({
      count: this.state.count + 1
    })
  }
    render (){
      return(
        <>
        <p>        Count: {this.state.count}      </p>
        <button onClick={this.btnPressed}>Click me!</button>
         </>
      )
      
      
      
    }
}



// export  function Info(){
//     const title = "this is my title.";
//     const showTitle = false;
  
//     // if(showTitle){
//     //   return (
//     //     <div>
          
//     //       <h1>{title}</h1>
//     //       <p>lorem*50</p>
//     //     </div>
//     //   )
//     // } else {
//     //   return(
//     //     <div>
          
//     //     <h1>no title</h1>
//     //     <p>lorem*50</p>
//     //   </div>
//     //   )
     
//     // }
   
//   }

export default Info;