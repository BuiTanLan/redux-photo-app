import './App.scss';

import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import React, { Suspense } from 'react';

import Header from './components/Header';
import NotFound from './components/NotFound';

const photos = React.lazy(() => import('./features/Photo'))
function App() {
  return (
    <div className="photos-app">
      <Suspense fallback={<div> Loading ...</div>}>
        <BrowserRouter>
         <Header/>
          <Switch>
            <Redirect exact from="/" to="/photos" />
            <Route path="/photos" component={photos} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
