


// import { useFirebaseContext } from "react-firebase-hook/FirebaseContext";

import { useFirebaseContext } from "react-firebase-auth-hook/FirebaseContext";


const SocialLogin = () => {
    const { socialLogin } = useFirebaseContext();
    const handleLogin = log => {
        socialLogin(log)
            .then()
            .catch(err => console.log(err.message))
    }
    return (
        <>
            <div className="divider">continue with</div>
            <div className="">
                <button onClick={() => handleLogin('gOOgle')} className="btn btn-primary btn-circle btn-outline">Go</button>
                <button onClick={() => handleLogin('Github6')} className="btn btn-primary btn-circle btn-outline">Gi</button>
            </div>
        </>
    );
};

export default SocialLogin;