import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name:"test"
    };
  }
  submit(){
    var post = document.getElementById('post').value;
  }
  render() {
    return (
      <>
      <div id="header" className="header"><ul>
      <a href="./index.html"><li>home</li></a>
      <a href="./privacy_policy.html"><li>privacy</li></a>
      <a href="./place_holder.html"><li>dmca/security</li></a>
      <li className="feat">whats this?</li>
      </ul></div>
      <center><h1>put</h1>
      </center>
      <center>
      <p>a not so social media website</p>
      </center>

      </>
      );
  }
}


export default App;