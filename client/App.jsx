import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import GithubTest from './GithubTest';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Dashboard from './containers/Dashboard.jsx';

function App() {
  return (
    <div className='App'>
      <GithubTest />
      <CssBaseline />
      {/* <h1>Test</h1> */}
      <Dashboard />
    </div>
  );
}

export default App;