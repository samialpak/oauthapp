import React from 'react';
import { GoogleLogout } from 'react-google-login';

import { setCookie, getCookie, eraseCookie } from '../utils/cookie';

const clientId = '1004157766963-jldjlaaaec0k1j9buqe7ncpbgpc16mlf.apps.googleusercontent.com';

export default class Logout extends React.Component {

   constructor(props){
      super(props);

      this.state = {
        thisClass: this.props.thisClass
      };
   }

   onSuccess() {
     alert('Logout successfully - Good Bye');

     eraseCookie('id_token');

     this.state.thisClass.props.history.push("/");
     window.location.reload();
   };

   render() {
    return (
      <div>
        <GoogleLogout
          clientId={clientId}
          buttonText="Logout"
          onLogoutSuccess={this.onSuccess.bind(this)}
        ></GoogleLogout>
      </div>
    );
   }
}
