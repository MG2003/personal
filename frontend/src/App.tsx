import { RouterProvider } from "react-router-dom";
import { router } from './utils/routing';

import './App.css'


function App() {
  return( 
    <RouterProvider 
      router={router} /> 
  );
}




export default App
