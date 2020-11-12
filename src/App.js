import React from 'react';
import { Switch, Route, Link, NavLink } from 'react-router-dom';
import Counter from './simple/Counter';
import HookDefault from './hookDefault'
import ReducerDefault from './reducerDefault'
import ApiTest from './api'
import Profiles from './router/Profiles';
import HistorySample from './router/HistorySample';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import './lib/libtest'

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
          <Link to="/history">history</Link>
        </li>
        <li>
          <Link to="/reduxcounter">redux-counter</Link>
        </li>
        <li>
          <Link to="/reduxtodo">redux-todo</Link>
        </li>
        <li>
          <Link to="/posts">redux-thunk-post</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact={true} component={Counter} />
        <Route path="/hookDefault" component={HookDefault} />
        <Route path="/reducerDefault" component={ReducerDefault} />
        <Route path="/apiTest" component={ApiTest} />
        <Route path="/profiles/" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route path="/reduxcounter" component={CounterContainer} />
        <Route path="/reduxtodo" component={TodosContainer} />
        <Route path="/posts/" component={PostListPage} exact={true} />
        <Route path="/posts/:id" component={PostPage} />
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