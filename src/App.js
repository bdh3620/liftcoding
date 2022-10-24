import './App.css';
import React, {Component} from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';

class App extends Component {
  render() {
    return (
      <div className='App'>
          <Subject title="WEB" sub="World wide web!"></Subject>
          <TOC></TOC>
          <Content title="HTML" sub=" HTML is HyperText Markup Language"></Content>
          <Content title="qwe" sub="asdasdasdadse"></Content>
      </div>
      
    );
  }
}

export default App;
