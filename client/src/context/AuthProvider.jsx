import React, { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

const AuthContext = createContext();

export default function AuthProvider({children}) {
  const [user, setUser] = useState({});
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = auth.onIdTokenChanged((user) => {
      console.log({user});
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
