import './App.scss';

import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import React, { Suspense } from 'react';

import NotFound from './components/NotFound';

const Photo = React.lazy(() => import('./features/Photo'))
function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div> Loading ...</div>}>
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/photo">Go to photo page</Link>
            </li>
            <li>
              <Link to="/photo/add">Go to Add new photo page</Link>
            </li>
            <li>
              <Link to="/photo/123">Go to Edit photo page</Link>
            </li>
          </ul>
          <Switch>
            <Redirect exact from="/" to="/photo" />
            <Route path="/photo" component={Photo} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
