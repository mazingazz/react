import React from 'react';
import { Switch, Route, Link, NavLink } from 'react-router-dom';
import Counter from './simple/Counter';
import HookDefault from './hookDefault'
import ReducerDefault from './reducerDefault'
import ApiTest from './api'
import Profiles from './router/Profiles';
import HistorySample from './router/HistorySample';

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <NavLink 
            to="/hookDefault"
            activeStyle={{ background: 'black', color: 'white' }}>HookDefault</NavLink>
        </li>
        <li>
          <Link to="/reducerDefault">ReducerDefault</Link>
        </li>
        <li>
          <Link to="/apiTest">ApiTest</Link>
        </li>
        <li>
          <Link to="/profiles">Profile</Link>
        </li>
        <li>
          <Link to="/history">예제</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact={true} component={Counter} />
        <Route path="/hookDefault" component={HookDefault} />
        <Route path="/reducerDefault" component={ReducerDefault} />
        <Route path="/apiTest" component={ApiTest} />
        <Route path="/profiles/" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route
          // path 를 따로 정의하지 않으면 모든 상황에 렌더링됨
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </>
  );
}

export default App;