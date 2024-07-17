import Home from '../pages/home';
import Root from '../pages/root';

import BadURL from '../pages/404';

import About from '../pages/about';
import Art from '../pages/art';
import Projects from '../pages/cs';

import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
    {
        path: "/", 
        element: <Root />,
        errorElement: <BadURL/>,
        children: [
          {
            index:true ,
            element: <Home />,      
          },
          {
            path: "/about",
            element: <About/>
          },
          {
            path: "/art",
            element: <Art/>
          },
          {
            path: "/projects",
            element: <Projects/>
          }

        ]
  
  },
  ]);