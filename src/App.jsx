
import  {RouterProvider} from "react-router-dom";
import {router} from './assets/layout/routes.jsx';
import'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.bundle.js';
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App 