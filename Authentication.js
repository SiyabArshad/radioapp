//code for authentication
import * as React from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from './firebase';
export function Authcontext() {
  const auth = getAuth(app);
  const [user, setUser] = React.useState();
  React.useEffect(() => {
    const unsubscribeFromAuthStatuChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
      } else {
        // User is signed out
        setUser(undefined);
      }
    });

    return unsubscribeFromAuthStatuChanged;
  }, []);

  return {
    user
  };
}