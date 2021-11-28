import React  from 'react';
import './App.css';
import { Balance } from './components/Balance';
import { Header } from './components/Header';
import { IaE } from './components/IaE';
import {AddTransaction} from './components/AddTransaction';
import { Transactionlist } from './components/Transactionlist';
import { GlobalProvider } from './context/GlobalState';
function App() {
  return (<>
  <GlobalProvider>
  <Header/>
  <Balance/>
  <IaE/>
  <AddTransaction/>
  <Transactionlist/>
  </GlobalProvider>
  </>);
  
}

export default App;
