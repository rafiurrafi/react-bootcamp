import {Component} from "react"
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : "Shore"
        }
        this.changeName = this.changeName.bind(this)
    }
    changeName(){
        const names = ["Google", "Facebook", "Apple"];
        const random = Math.floor(Math.random() * names.length)
        const name = names[random];
        this.setState({name : name})
    }
    render() { 
        return <div>
            <h1>Hello, {this.state.name}</h1>
            <button onClick={this.changeName}>Change Name</button>
        </div>
    }
}
 

export default App;