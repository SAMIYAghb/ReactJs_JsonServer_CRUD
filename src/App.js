import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import CreateProduct from './components/CreateProduct';
import EditProduct from './components/EditProduct';
import Details from './components/Details';



function App() {
  const routers = createBrowserRouter([
    {      
          index: true,
          element: <Home />,
        },
        {
          path: "/details/:id",
          element: <Details />,
        },
        {
          path: "/create",
          element: <CreateProduct />,
        },       
        {
          path: "/edit/:empid",
          element: <EditProduct />,
        },        
        // {
        //   path: "*",
        //   element: <NotFound/>,
        // },
  ]);
  return(
     <RouterProvider router={routers} >
        <App/>
      </RouterProvider>
  )
}

export default App;
