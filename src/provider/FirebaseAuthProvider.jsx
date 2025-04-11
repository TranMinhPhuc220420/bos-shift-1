import { useEffect, useReducer } from "react";

import { useNavigate } from "react-router";

import AuthContext from "./FirebaseAuthContext";

import firebaseApp from "../firebase";

import {
  GoogleAuthProvider, onAuthStateChanged, getAuth, signOut, signInWithPopup
} from "firebase/auth";

const INITIALIZE = "INITIALIZE";

const auth = getAuth(firebaseApp);

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const reducer = (state, action) => {
  if (action.type === INITIALIZE) {
    const { isAuthenticated, user } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  }

  return state;
};

function AuthProvider({ children }) {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      
      if (user) {
        dispatch({
          type: INITIALIZE,
          payload: { isAuthenticated: true, user },
        });

        // Check if page active is login page
        const path = window.location.pathname;
        const isLoginPage = path.includes("/dang-nhap");
        if (isLoginPage) {
          navigate("/dashboard", { replace: true });
        }

      } else {
        navigate("/dang-nhap", { replace: true });
      }
    });
  }, []);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const _signOut = async () => {
    await signOut(auth);
  };

  const _auth = { ...state.user };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "firebase",
        user: {
          id: _auth.uid,
          email: _auth.email,
          avatar: _auth.photoURL,
          displayName: _auth.displayName,
          role: "user",
        },
        signInWithGoogle,
        signOut: _signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
