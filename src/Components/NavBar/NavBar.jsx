import { useFirebaseContext } from "react-firebase-auth-hook/FirebaseContext";
import { Link } from "react-router-dom";

const NavBar = () => {
    const { logOut, user } = useFirebaseContext();
    return (
        <div className=" bg-red-100">
            <div className="navbar  container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                        </ul>
                    </div>
                    <h1 className=" text-3xl font-bold">React Super-Heros</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                        <li>
                            <Link to='/register'>Register</Link>
                        </li>

                    </ul>
                </div>
                <div className="navbar-end">
                    {user?.email && <span>{user?.displayName}</span>}
                    {
                        user?.photoURL && <div className="avatar">
                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user.photoURL} />
                            </div>
                        </div>
                    }
                    <button onClick={logOut} className="btn btn-sm">Logout</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;