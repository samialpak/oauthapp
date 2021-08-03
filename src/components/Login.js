import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../utils/refreshToken';
import { setCookie, getCookie, eraseCookie } from '../utils/cookie';

const clientId = '1004157766963-jldjlaaaec0k1j9buqe7ncpbgpc16mlf.apps.googleusercontent.com';

export default class Login extends React.Component {

   constructor(props){
      super(props);
   }

   onSuccess(res) {
     setCookie('id_token', res.tokenObj.id_token);

     alert(
       `Logged in successfully- Welcome " ${res.profileObj.name} "`
     );
     refreshTokenSetup(res);

     this.props.history.push("/token");
   };

   onFailure(res) {
     console.log('Login failed: res:', res);
     alert(
       `Failed to login.`
     );
   };

   render() {
    return (
      <div>
        <GoogleLogin
          clientId={clientId}
          buttonText="Login"
          onSuccess={this.onSuccess.bind(this)}
          onFailure={this.onFailure.bind(this)}
          cookiePolicy={'single_host_origin'}
          style={{ marginTop: '100px' }}
          isSignedIn={true}
        />
      </div>
    );
   }
}
