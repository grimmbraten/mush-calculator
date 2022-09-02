import loadable from '@loadable/component';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Guard from '~components/Guard';
import routes from '~routes';
import NotFound from '~views/NotFound';

const DynamicComponent = loadable(props => import(`~views/${props.view}`));

const Router = () => (
  <Routes>
    {routes.map(({ path, exact, view, guarded, redirect }) => (
      <Route
        path={path}
        exact={exact}
        key={`View.${view}`}
        element={
          !guarded ? (
            <DynamicComponent view={view} />
          ) : (
            <Guard redirect={redirect}>
              <DynamicComponent view={view} />
            </Guard>
          )
        }
      />
    ))}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default Router;
