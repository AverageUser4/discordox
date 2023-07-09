import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Loading } from 'src/features/ui';
import { Component as Root } from 'src/pages/Root/Root';

const router = createBrowserRouter([{
  path: '/',
  element: <Outlet/>,
  children: [
    {
      index: true,
      element: <Root/>,
    },
    {
      path: 'login',
      lazy: () => import('./pages/Login/Login'),
    },
    {
      path: 'register',
      lazy: () => import('./pages/Register/Register'),
    },
    {
      path: '*',
      lazy: () => import('./pages/Error/Error'),
    },
  ],
}]);

function App() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<Loading/>}
    />
  );
}

export default App
