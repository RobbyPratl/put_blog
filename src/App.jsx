import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      posts: "",
      update_msg:false
    };
  }
  componentDidMount(){
    var config = {"X-BIN-META":"FALSE","Content-Type": "application/json","X-Master-Key":"API KEY"};
    var url = "https://api.jsonbin.io/v3/b/620c69cb4bf50f4b2dfd8355";
    axios.get(url,{
    headers: config
    })
      .then((resp) => {
        console.log(resp.data.record.post);
        this.setState({posts:resp.data.record.post}) 
      })
      .catch(err => {
        console.log(err);
      });
}
  new_post(){
    var url = "https://api.jsonbin.io/v3/b/620c69cb4bf50f4b2dfd8355"
    var config = {headers:{"Content-Type": "application/json","X-Master-Key":"API KEY"}};
    var data = {
      post:document.getElementById('post').value
    }
    axios.put(url, data, config)
.then((resp) => {
        console.log(resp);
      });
console.log('done')

  }


  
  render() {
    const { posts } = this.state; 
    return (
      <>
      <div id="header" className="header"><ul>
      <a href="./index.html"><li>home</li></a>
      <li>put</li>
      <a href="./what_is_this.html"><li>whats this?</li></a>
      </ul></div>
      <center><textarea id='post' className='textbox'rows='15' cols='50' ></textarea>
      </center>
      <center>
      <button id="submit_button" className="submit_button" onClick={this.new_post}>submit</button>
      </center><center>
      <h1>Newest post: </h1>
      <p className="refresh_dialog"><a href="https://reacccct.robbypratl.repl.co/index.html">^refresh to see new post^</a></p>
      <div className="post">{
        posts.length ?
        posts:
        null
      
      }</div></center>
      </>
      );
  }
}



export default App;