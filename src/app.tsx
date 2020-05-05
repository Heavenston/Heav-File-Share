import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

const Index = lazy(() => import("~/pages/index"));

export const App = () => <div>
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route
      exact
      path="/"
      component={Index}
      />
    </Switch>
  </Suspense>
</div>
export default hot(App);