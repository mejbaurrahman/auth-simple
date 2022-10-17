import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './Componants/Login/Login';
import Register from './Componants/Register/Register';
import Home from './Pages/Home/Home';


const router= createBrowserRouter([
  {
    path: '/',
    element:<Home></Home>,
    children: [
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  }
])
function App() {
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
