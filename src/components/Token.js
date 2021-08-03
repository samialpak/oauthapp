import React from "react";
import { setCookie, getCookie, eraseCookie } from '../utils/cookie';
import Logout from './Logout';

export default class Token extends React.Component {

   constructor(props){
      super(props);

      let id_token = getCookie('id_token');

      this.state = {
         id_token: id_token
      }
   }

   render(){
      return (
         <div>

            <Logout thisClass={this}/>

            <br/>
            <header className="App-header">
               Cakes UI
            </header>
            <br/>

            <div className="App-body">
              <b>Google Id_Token</b>
              <br/><br/>
              {this.state.id_token}
            </div>

         </div>
   )}
}
