import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Layout from './layout/Layout';
import Author from './pages/Author';
import NotFound from './pages/NotFound';
import SingleBlog from './pages/SingleBlog';
import TermsOfService from './pages/TermsOfService';
import SingleAuthor from './pages/SingleAuthor';
import Membership from './pages/Membership';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SubscribeMemberShip from './pages/SubscribeMemberShip';


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
          path:'/login',
          element: <SignIn></SignIn>
        },
        {
          path:'/sign-up',
          element: <SignUp></SignUp>
        },
        {
          path:'/subscribe-membership',
          element: <SubscribeMemberShip></SubscribeMemberShip>
        },
        {
          path:'/membership',
          element: <Membership></Membership>
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
