import { Route, Routes } from 'react-router-dom';
import { Footer } from '@/components/Footer';
import { Home } from '@/pages/Home';
import { FourOhFourPage } from '@/pages/404';
import ResponsiveNavBar from '@/components/Navbar';
import { useTheme } from '@emotion/react';
export const ROUTE_PATHS = {
  home: '/',
  '404': '*',
};

interface IRoute {
  path: string;
  element: JSX.Element;
}

export const routes: IRoute[] = [
  {
    path: ROUTE_PATHS.home,
    element: <Home />,
  },
  {
    path: ROUTE_PATHS['404'],
    element: <FourOhFourPage />,
  },
];

export function BindRoutes(props: { children?: React.ReactNode }): JSX.Element {
  const theme = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme.palette.background.default,
      }}
    >
      <ResponsiveNavBar />
      <Routes>
        {routes.map(route => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        {props.children}
      </Routes>
      <Footer />
    </div>
  );
}
