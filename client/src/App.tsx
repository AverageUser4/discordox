import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Loading, ErrorBoundary } from 'src/features/ui';

const Root = lazy(() => import('src/pages/Root'));
const Error = lazy(() => import('src/pages/Error'));
const Login = lazy(() => import('src/pages/Login'));
const Register = lazy(() => import('src/pages/Register'));

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Suspense fallback={<Loading/>}>
          <Switch>
            <Route exact={true} path="/">
              <Root/>
            </Route>

            <Route path="/login">
              <Login/>
            </Route>

            <Route exact={true} path="/register">
              <Register/>
            </Route>

            <Route path="*">
              <Error/>
            </Route>
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App
