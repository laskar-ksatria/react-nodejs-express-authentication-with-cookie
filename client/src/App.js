import React from 'react';
import './App.css';

//Pages
import Login from './pages/Login';
import Main from './pages/Main'

//Routes
import { ProtectedLogin, ProtectedRoute } from './Protected';
import { Switch } from 'react-router-dom'

//Redux
import { useSelector, useDispatch } from 'react-redux'

import { CHECKAUTH } from './stores'
function App() {

  const { isLogin } = useSelector((state) => state.userReducer);

  let dispatch = useDispatch();

  const [loading, setLoading] = React.useState(false);

  const checkMyAuth = () => {
    setLoading(true)
    CHECKAUTH(dispatch, () => {
      setLoading(false)
    });
  };

  React.useEffect(checkMyAuth, []);

  return (
    <div className="App">
      <header className="App-header">
        {!loading ? <>
        <Switch>
          <ProtectedLogin exact path="/" auth={isLogin} component={Login} />
          <ProtectedRoute path="/main" auth={isLogin} component={Main} />
        </Switch>
        </> : ""}
      </header>
    </div>
  );
}

export default App;
