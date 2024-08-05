import Home from '../pages/home';
import Root from '../pages/root';

import BadURL from '../pages/404';

import About from '../pages/about';
import Boba from '../pages/boba';
import Art from '../pages/art';
import Cs from '../pages/cs';
import Experience from '../pages/experience';
import { Project, Gallery } from '../layouts/portfolio/project_blurb';

import { PROJECTS } from './consts';

import ArtGrid from '../layouts/portfolio/art_pf';

import { createBrowserRouter, Outlet } from 'react-router-dom';

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
            element: <Outlet/>,
            children: [
              {
                index:true,
                element: <About/>
              },
              {
                path: "/about/boba",
                element:<Boba/>
              }
            ]
          },
          {
            path: "/art",
            element: <Art/>
          },
          {
            path: "/cs",
            element: <Cs/>,
            children: [
              {
                index:true,
                element: <Gallery/>
              },
              {path: "/cs/:id",
              element: <Project/>}
            ]
            
          },
          {
            path: "/layout",
            element: <ArtGrid/>
          }

        ]
  
  },
  ]);