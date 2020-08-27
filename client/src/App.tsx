import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

// import { createStructuredSelector } from 'reselect';
// import { selectNewsArticles } from './redux/news/news.selectors';

// import { fetchNewsStartAsync } from './redux/news/news.actions';
// import { AppActions } from './redux/store';

// import { ThunkDispatch } from 'redux-thunk';
// import { News } from './redux/news/news.types';

import SignUp from './pages/sign-up/sign-up.component';
import SignIn from './pages/sign-in/sign-in.component';

import {
  selectUserCategory,
  selectUserCountry,
} from './redux/user/user.selectors';

import './App.scss';

import HomePage from './pages/home-page/home-page.component';
import NavBar from './components/navbar/navbar.component';
import Sidebar from './components/sidebar/sidebar.component';
// import { setCurrentUser } from './redux/user/user.actions';

interface AppProps {}

interface AppState {}

type Props = AppProps & LinkDispatchProps & LinkStateProps;

class App extends React.Component<Props, AppState> {
  render() {
    const { userCategory, userCountry } = this.props;

    return (
      <div className='App'>
        <NavBar />
        <Sidebar />
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <Redirect to={`/news/${userCountry}/${userCategory}`} />
            )}
          />
          <Route
            exact
            path='/auth/sign-in'
            component={SignIn}
            // render={() =>
            //   currentUser ? <Redirect to='/' /> : <SignIn />
            // }
          />
          <Route
            exact
            path='/auth/sign-up'
            // render={() =>
            //   currentUser ? <Redirect to='/' /> : <SignUp />
            // }
            component={SignUp}
          />

          <Route exact path='/news/:country/:category' component={HomePage} />
        </Switch>
      </div>
    );
  }
}

// const mapStateToProps = createStructuredSelector({
//   newsArticles: selectNewsArticles,
// });

// const mapDispatchToProps = (dispatch) => ({
//   setCurrentUser: (user) => dispatch(setCurrentUser(user)),
// });

// const mapDispatchToProps = (
//   dispatch: ThunkDispatch<any, any, AppActions>
// ): LinkDispatchProps => ({
//   fetchNewsStartAsync: () => dispatch(fetchNewsStartAsync()),
// });

interface LinkDispatchProps {
  userCategory: string;
  userCountry: string;
}

interface LinkStateProps {
  userCategory: string;
  userCountry: string;
}

const mapStateToProps = createStructuredSelector({
  userCategory: selectUserCategory,
  userCountry: selectUserCountry,
});

export default connect(mapStateToProps)(App);
// export default App;