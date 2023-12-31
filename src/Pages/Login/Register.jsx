import React from 'react';
import { useFirebaseContext } from 'react-firebase-auth-hook/FirebaseContext';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const { user, signUpAndUpdate, githubLogin } = useFirebaseContext();
    // const a = useFirebase();

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();
    console.log(user);
    const onSubmit = data => {
        const { email, password, displayName, photoURL } = data;
        signUpAndUpdate(email, password, displayName, photoURL)
            .then(() => {
                navigate('/')
            })
            .catch(err => console.log(err))
    };


    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered"
                                    {...register("displayName", { required: true })}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input type="text" placeholder="image" className="input input-bordered"
                                    {...register("photoURL", { required: true })}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered"
                                    {...register("email", { required: true })}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered"
                                    {...register("password", { required: true })}
                                />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;