import './App.css';
import { Component } from 'react';
import Feed from './components/Feed';


class App extends Component{
  state = {contacts: [], loading: false}

  componentDidMount() {
    var i = 1;
    this.setState({loading:true})
    fetch("https://api.randomuser.me/?results=100")
      .then(response => response.json())
      .then(parsedResponse => 
        parsedResponse.results.map(user => (
        {
          id : i++,
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          thumbnail: user.picture.thumbnail,
        }
        ))
      )
      .then(contacts => {
        this.setState({ contacts, loading:false })
    });
  }
  
  render(){
    // console.log(this.state.contacts)
    return (
      <div style =  {{margin : '10px'}} className='App'>
        <nav style = {{backgroundColor : 'black',color : 'white',height : '50px'}}>
          <ul>
            <li style = {{listStyle : 'none'}}>
              <a style={{color : 'white',textDecoration : 'none',fontSize : '25px'}} href='#blank'>HOC Demo Example</a>
            </li>
          </ul>
        </nav>

        <Feed contacts = {this.state.contacts} loading={this.state.loading} />
      </div>
    );
  }
}

export default App;
