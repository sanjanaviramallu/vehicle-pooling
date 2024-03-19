import './App.css';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Router,RouterProvider } from 'react-router-dom';
import SignIn from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import Main from './components/main/Main';
import JoinRide from './components/joinRide/JoinRide';
import CreateRide from './components/createRide/CreateRide';
//import ForgotPassword from './components/ForgotPassword/ForgotPassword';

function App() {
  let router=createBrowserRouter([
    {
      path:'',
      element:<Login/>
    },
    {
      path:'SignIn',
      element:<SignIn/>
    },
    {
      path:'Login',
      element:<Login/>
    },
    {
      path:'Main',
      element:<Main/>
    },
    {
      path:'JoinRide',
      element:<JoinRide/>
    },
    {
      path:'CreateRide',
      element:<CreateRide/>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
