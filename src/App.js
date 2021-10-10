import react, {Component} from 'react'

import Overview from './components/Overview';

const TASKS = [
  {id: 0, desc:"Do the dishes"},
  {id: 1, desc:"Take out the garbage"},
  {id: 2, desc:"Go grocery shopping."}
]

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {tasks: TASKS};
  }

  onTaskSubmit(e) {
    e.preventDefault();
    console.log("firing callback from app...");
    
    let taskDesc = document.querySelector(".task-add-field").value;
    if (taskDesc != null) {       
      let newTask = {id: this.state.tasks.length, desc: taskDesc};
      let tasks = this.state.tasks;
      this.setState({
        tasks: tasks.concat(newTask)
      });
    }
  }

  // Because setState doesn't call all the time. 
  componentDidUpdate() {
    console.log(this.state.tasks);
  }

  render() {
    return (
      <div className="App">
        <h1>Task Overview </h1>
        <Overview tasks={this.state.tasks} submitHandler={this.onTaskSubmit.bind(this)}/>
      </div>
    );
  }
}


export default App;
