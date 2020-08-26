import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import Header from 'layout/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/ThemeProvider';
import NailList from 'nails/NailList';
import SignIn from 'auth/SignIn';
import NailDetails from 'nails/NailDetails';
import CreateNails from 'nails/CreateNails';
import Links from 'auth/Links';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Links />
        <Header />
        <Switch>
          <Route exact path='/' component={NailList} />
          <Route path='/signin' component={SignIn} />
          <Route path='/naildetails/:id' component={NailDetails} />
          <Route path='/create' component={CreateNails} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
