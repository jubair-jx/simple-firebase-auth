import React, { useState } from "react";
import app from "../../firebase/firebase.init";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleLoginBtn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        {user ? (
          <button onClick={handleSignOut}>Sign Out</button>
        ) : (
          <button onClick={handleLoginBtn}>Google Login</button>
        )}
        <button onClick={handleGithubLogin}>Github Login</button>
      </div>
      <div>
        {user && (
          <div>
            <h3>{user.displayName}</h3>
            <h4>{user.email}</h4>
            <img src={user.photoURL} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
