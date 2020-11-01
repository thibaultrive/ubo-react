import React, { useState, Suspense, lazy } from 'react';
import './App.css';
import Count from './Count';
import App from './App';
import SimpleQuotes from './SimpleQuotes';
import RouterTest from './RouterTest';
import Quote from './Quote';
import ContextCount from './ContextCount';
import {ReduxCount} from './ReduxCount';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import {MyContext} from './myContext'
import Todo from "./Todo";


const drawerWidth = 240;

const DynamicQuote = lazy(() => import('./DynamicQuote'));
const FormDemo = lazy(() => import('./FormDemo'));

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));


export default () => {
  const classes = useStyles();

  return (
    <MyContext.Provider value={useState(5)}>
      <Router>
        <div>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <Typography variant="h6">
                Appli démo React
          </Typography>
            </Toolbar>
          </AppBar>

          <Drawer className={classes.drawer} variant="permanent" anchor="left"
            classes={{ paper: classes.drawerPaper }}>
            <nav>
              <List>
                <ListItem button>
                  <Link to="/">Welcome</Link>
                </ListItem>
                <ListItem button>
                  <Link to="/counter">Composant</Link>
                </ListItem>
                <ListItem button>
                  <Link to="/todo">TODO</Link>
                </ListItem>
                <ListItem button>
                  <Link to="/nested">Imbrication</Link>
                </ListItem>
                <ListItem button>
                  <Link to="/form">Formulaire</Link>
                </ListItem>
                <ListItem button>
                  <Link to="/apicall">Appel API</Link>
                </ListItem>
                <ListItem button>
                  <Link to="/number/42">42</Link>
                </ListItem>
                <ListItem button>
                  <Link to="/favorite">Délégation</Link>
                </ListItem>
                <ListItem button>
                  <Link to="/context">Context</Link>
                </ListItem>
                <ListItem button>
                  <Link to="/redux">Redux</Link>
                </ListItem>
              </List>
            </nav>
          </Drawer>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <div className={classes.appBar}>
            <Suspense fallback={Loading}>
              <div className="App">
                <header className="App-header">
                  <Switch>
                    <Route exact path="/">
                      <App />
                    </Route>
                    <Route path="/counter">
                      <Count />
                    </Route>
                    <Route path="/todo">
                      <Todo />
                    </Route>
                    <Route path="/nested">
                      <SimpleQuotes />
                    </Route>
                    <Route path="/form">
                      <FormDemo />
                    </Route>
                    <Route path="/apicall">
                      <DynamicQuote />
                    </Route>
                    <Route path="/number/:myNumber" component={RouterTest} />
                    <Route path="/number">
                      <Redirect to="/number/42" />
                    </Route>
                    <Route path="/favorite" component={Favorite} />
                    <Route path="/context">
                      <ContextCount />
                      <p><br/></p>
                      <ContextCount />
                    </Route>
                    <Route path="/redux">
                      <ReduxCount />
                      <p><br/></p>
                      <ReduxCount />
                    </Route>
                    <Route path="*">
                      <NoMatch />
                    </Route>
                  </Switch>
                </header>
              </div>
            </Suspense>
          </div>
        </div>
      </Router>
    </MyContext.Provider>
  );
}

function Favorite() {
  return (
    <div className="App">
      <header className="App-header">
        <Quote saying="There are two ways of constructing a piece of software: One is to make it so simple that there are obviously no errors, and the other is to make it so complicated that there are no obvious errors." 
          author="Tony Hoare" />
      </header>
    </div>
  );
}


function NoMatch() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>
          Not found
        </h3>
      </header>
    </div>
  );
}

function Loading() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>
          Chargement...
        </h3>
      </header>
    </div>
  );
}
