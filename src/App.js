import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from '@react-oauth/google';
//  import { googleLogout } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
const App = () => {
  const id ="616592458014-jiaro90hpqv291ndic5rd5h16ku2oobm.apps.googleusercontent.com";
  return (
    <>
      <GoogleOAuthProvider clientId={id}>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            var decoded = jwt_decode(credentialResponse.credential);
            console.log(decoded);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
          useOneTap
        />
        {/* { googleLogout()} */}

      </GoogleOAuthProvider>
     
    </>
  );
};

export default App;
