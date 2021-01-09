import React from 'react';
import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import ProfileView from '../ProfileView';
import HomeView from '../HomeView';
import LoginView from '../LoginView';
import { userLogOut } from '../../actions';

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    width: '100vw',
    maxHeight: '100vh',
    maxWidth: '100vw',
    overflow: 'hidden',
  },
  fullBodyHeight: {
    height: 'calc(100% - 64px)',
    maxHeight: 'calc(100% - 64px)',
  },
  appBar: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  logBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 0,
    marginLeft: 'auto',
    color: 'white',
  },
  userName: {
    marginRight: '1em',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
  imageIcon: {
    height: '100%',
  },
  iconRoot: {
    display: 'inline-block',
    verticalAlign: 'middle',
  },
}));

const MainView = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);

  const handleLogOut = () => {
    dispatch(userLogOut());
  };

  const navBar = () => (
    <AppBar position="static">
      <Toolbar className={classes.appBar}>
        <Typography variant="h4" className={classes.title}>
          <Link className={classes.link} to="/">
            <Icon fontSize="large" classes={{ root: classes.iconRoot }}>
              <img className={classes.imageIcon} src="/assets/images/emoji-happy-smiley.svg" alt="Happy emoji" />
            </Icon>
            HappyMail
          </Link>
        </Typography>

        <div className={classes.grow} />
        {userData.isLoggedIn
          ? (
            <div className={classes.logBar}>
              <Typography variant="body1">
                <span className={classes.userName}>
                  User:
                  {' '}
                  {userData.username}
                </span>
              </Typography>
              <Typography variant="h6" onClick={handleLogOut}>
                <Link className={classes.link} to="/">
                  Log Out
                </Link>
              </Typography>
            </div>
          )
          : (
            <Typography variant="h6" className={classes.logBar}>
              <Link className={classes.link} to="/login">
                Log In
              </Link>
            </Typography>
          )}
      </Toolbar>
    </AppBar>
  );

  const pageBody = () => (
    <Switch>
      <Route path="/login">
        <LoginView />
      </Route>
      <Route path="/">
        {userData.isLoggedIn
          ? (
            <ProfileView />
          )
          : (
            <HomeView />
          )}
      </Route>
    </Switch>
  );

  return (
    <div className={classes.root}>
      {navBar()}
      <main className={classes.fullBodyHeight}>
        {pageBody()}
      </main>
    </div>
  );
};

export default MainView;
