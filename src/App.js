import React from 'react';

class App extends React.Component {
   constructor(){
      super()
      this.state={
         'position': '55'
      };
   }
   getTable = () => {
      let rows = [];
      for(let i=0; i<10 ; i++){
         rows.push('<tr></tr>')
      }
      return rows;
   }
   render() {
      return (
         <div>
            <h1>Chess</h1>
            <table>
               {[...Array(10).keys()].map( (outter) =>{
                  return (
                     <tr>{
                        [...Array(10).keys()].map( (inner) =>{
                           return <td id={outter+''+inner} 
                           className={(this.state.position === outter+''+inner ? 'active' : '')}></td>
                        })
                     }</tr>
                  )
               } )}
            </table>
         </div>
      )
   }
}
export default App;

