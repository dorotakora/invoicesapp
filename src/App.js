import React from 'react';
import { Invoice } from "./Invoice";
import { InvoiceList } from "./InvoiceList";
import './css/main.scss';
import {HashRouter as Router, Link, Route, } from 'react-router-dom';



  class Main extends React.Component {

    render(){

      return <div className='container'>
        <button className='button'><Link className='link' to="/new">Nowa faktura</Link></button>
        <button className='button'><Link className='link' to="/list">Lista faktur</Link></button>
      </div>
    }
  }

  class App extends React.Component {

    render() {
      return <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Route path={'/'} exact component={Main}/>
          <Route path={'/new'} component={Invoice}/>
          <Route path={'/list'} component={InvoiceList}/>
        </div>
      </Router>
    }
  }

export default App;
