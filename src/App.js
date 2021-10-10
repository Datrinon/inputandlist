import react, {Component} from 'react'

import Overview from './components/Overview';

const TASKS = [
  "Do the dishes",
  "Take out the garbage",
  "Go grocery shopping."
]

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {tasks: TASKS};
  }

  onTaskSubmit(e) {
    e.preventDefault();
    console.log("firing callback from app...");
    
    let task = document.querySelector(".task-add-field").value;
    if (task != null) {
      let currentTasks = this.state.tasks;
      this.setState({tasks: currentTasks.push(task)})
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Task Overview </h1>
        <Overview tasks={TASKS} submitHandler={this.onTaskSubmit.bind(this)}/>
      </div>
    );
  }
}


export default App;
