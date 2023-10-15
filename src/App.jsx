
import { Outlet } from 'react-router'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Loading from './Components/Loading/Loading';
import { useFirebaseContext } from 'react-firebase-auth-hook/FirebaseContext';

function App() {
  const { loading } = useFirebaseContext()
  console.log(loading);
  return (
    <>
      <NavBar />
      {loading ? <Loading /> : <Outlet />}
    </>
  )
}

export default App
