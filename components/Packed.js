import React from "react";

class Packed extends React.Component {

    render() {
       return(
           <div>
               <h2>Things that are packed:</h2>
               <ul>
                   {
                       this.props.items && (
                           this.props.items.map((item) => {
                               <li>
                                   {item.name}
                               </li>
                           })
                       )
                   }
               </ul>
           </div>
       );
    }
}

export default Packed;