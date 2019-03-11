import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import CEC from './CEComponent';
import RPC from './ReactPureComponent';
import FC from './FunctionalComponent'


class App extends Component {
  render() {
    return ( 
      <div className = "App" >
      <header className = "App-header" > 
        <p > 
      HELLO WORLD 
      </p> 
     <CEC/>
     < RPC />
     < FC />
      </header> 
      </div>
    );

   
  }
}

export default App;