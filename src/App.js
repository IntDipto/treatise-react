import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Layout from './layout/Layout';
import Author from './pages/Author';
import NotFound from './pages/NotFound';
import SingleBlog from './pages/SingleBlog';
import TermsOfService from './pages/TermsOfService';
import SingleAuthor from './pages/SingleAuthor';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Layout></Layout>,
      children: [
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path:'/membership',
          element: <Home></Home>
        },
        {
          path:'/author',
          element: <Author></Author>
        },
        {
          path:'/authorDetails/:id',
          element: <SingleAuthor></SingleAuthor>
        },
        {
          path:'/terms-conditions',
          element: <TermsOfService></TermsOfService>
        },
        {
          path:'/blog/:id',
          element: <SingleBlog></SingleBlog>
        },
      ]
    },
    {
      path: '*',
      element:<NotFound></NotFound>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
