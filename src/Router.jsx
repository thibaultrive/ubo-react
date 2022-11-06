import React, { useState, Suspense, lazy } from 'react';
import './App.css';
import Count from './Count';
import App from './App';
import SimpleQuotes from './SimpleQuotes';
import RouterTest from './RouterTest';
import Quote from './Quote';
import ContextCount from './ContextCount';
import {ReduxCount} from './ReduxCount';
import {AppBar, Toolbar, Typography, Drawer, List, ListItemButton, Divider, Box} from '@mui/material';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom";
import {MyContext} from './myContext'
import Todo from "./Todo";


const drawerWidth = 240;

const DynamicQuote = lazy(() => import('./DynamicQuote'));
const FormDemo = lazy(() => import('./FormDemo'));


export default () => {
  return (
    <MyContext.Provider value={useState(5)}>
      <Router>
        <Box sx={{ display: 'flex' }}>
          <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
            <Toolbar>
              <Typography variant="h6" noWrap component="div">
                Appli démo React
              </Typography>
            </Toolbar>
          </AppBar>

          <Drawer sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
                  variant="permanent" anchor="left">
            <nav>
              <Toolbar />
              <Divider />
              <List>
                <ListItemButton>
                  <Link to="/">Welcome</Link>
                </ListItemButton>
                <ListItemButton>
                  <Link to="/counter">Composant</Link>
                </ListItemButton>
                <ListItemButton>
                  <Link to="/todo">TODO</Link>
                </ListItemButton>
                <ListItemButton>
                  <Link to="/nested">Imbrication</Link>
                </ListItemButton>
                <ListItemButton>
                  <Link to="/form">Formulaire</Link>
                </ListItemButton>
                <ListItemButton>
                  <Link to="/apicall">Appel API</Link>
                </ListItemButton>
                <ListItemButton>
                  <Link to="/number/42">42</Link>
                </ListItemButton>
                <ListItemButton>
                  <Link to="/favorite">Délégation</Link>
                </ListItemButton>
                <ListItemButton>
                  <Link to="/context">Context</Link>
                </ListItemButton>
                <ListItemButton>
                  <Link to="/redux">Redux</Link>
                </ListItemButton>
              </List>
            </nav>
          </Drawer>

          <Box component="main"
              sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
            <Toolbar />
            <Suspense fallback={Loading}>
              <div className="App">
                <header className="App-header">
                  <Routes>
                    <Route path="/" element={<App/>} />
                    <Route path="/counter" element={<Count/>} />
                    <Route path="/todo" element={<Todo/>} />
                    <Route path="/nested" element={<SimpleQuotes/>} />
                    <Route path="/form" element={<FormDemo/>} />
                    <Route path="/apicall" element={<DynamicQuote/>} />
                    <Route path="/number/:myNumber" element={<RouterTest/>} />
                    <Route path="/number" element={<Navigate to="/number/42" replace/>} />
                    <Route path="/favorite" element={<Favorite/>} />
                    <Route path="/context" element={<ContextDemo/>} />
                    <Route path="/redux" element={<ReduxDemo/>} />
                    <Route path="*" element={<NoMatch />} />
                  </Routes>
                </header>
              </div>
            </Suspense>
          </Box>
        </Box>
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


function ContextDemo() {
  return (
      <>
        <ContextCount/>
        <p><br/></p>
        <ContextCount/>
      </>
  )
}

function ReduxDemo() {
  return (
      <>
        <ReduxCount/>
        <p><br/></p>
        <ReduxCount/>
      </>
  )
}