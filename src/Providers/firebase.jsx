import { useEffect, useState, createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signOut,
    signInWithEmailAndPassword,
    FacebookAuthProvider,
    TwitterAuthProvider,
} from "firebase/auth";

/* const useFirebasePH = (config) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth(initializeApp(config));

  // auth providers
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // social login functions
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const updateUserProfile = (payLoad) => {
    return updateProfile(auth.currentUser, payLoad);
  };

  const signUpWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signUpAndUpdate = async (email, password, payLoad) => {
    await signUpWithEmailAndPassword(email, password);
    await updateUserProfile(payLoad);
  };

  const logOut = () => {
    return signOut(auth);
  };

  // observer user auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    // stop observing while unmounting
    return () => {
      return unsubscribe();
    };
  }, []);

  return {
    user,
    signIn,
    logOut,
    loading,
    googleLogin,
    githubLogin,
    signUpAndUpdate,
    updateUserProfile,
    signUpWithEmailAndPassword,
  };
};

export default useFirebasePH; */

const allSocialAuthProviders = [
    {
        providerName: 'google',
        provider: new GoogleAuthProvider()
    },
    {
        providerName: 'github',
        provider: new GithubAuthProvider()
    },
    {
        providerName: 'facebook',
        provider: new FacebookAuthProvider()
    },
    {
        providerName: 'twitter',
        provider: new TwitterAuthProvider()
    },
]

export const FirebaseProvider = ({ config, children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const auth = getAuth(initializeApp(config));

    // auth providers
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // social login functions
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    };
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider);
    };

    const socialLogin = media => {
        const socialProvider = allSocialAuthProviders.find(item => item.providerName === media.toLowerCase());
        if (socialProvider) return signInWithPopup(auth, socialProvider.provider);
        else console.log(media, 'social provider not found');
    }

    const updateUserProfile = (payLoad) => {
        return updateProfile(auth.currentUser, payLoad);
    };

    const signUpWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signUpAndUpdate = async (email, password, payLoad) => {
        await signUpWithEmailAndPassword(email, password);
        await updateUserProfile(payLoad);
    };

    const logOut = () => {
        return signOut(auth);
    };

    // observer user auth state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        // stop observing while unmounting
        return () => {
            return unsubscribe();
        };
    }, []);

    const firebase = {
        user,
        signIn,
        logOut,
        loading,
        googleLogin,
        githubLogin,
        socialLogin,
        signUpAndUpdate,
        updateUserProfile,
        signUpWithEmailAndPassword,
    };

    return (
        <FirebaseContext.Provider value={firebase}>
            {children}
        </FirebaseContext.Provider>
    );
};


export const FirebaseContext = createContext();

export const useFirebaseContext = () => {
    return useContext(FirebaseContext);
};


