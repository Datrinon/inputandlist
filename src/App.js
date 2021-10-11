import {Component} from 'react'
import Overview from './components/Overview';


const saveKey = "tasks";

const TASKS = [
  {id: 0, desc:"Do the dishes"},
  {id: 1, desc:"Take out the garbage"},
  {id: 2, desc:"Go grocery shopping."}
]

class App extends Component {
  constructor(props) {
    super(props);
      
    const tasks = JSON.parse(localStorage.getItem(saveKey)) ?? TASKS;
    
    this.state = {tasks: tasks};
    
    window.onbeforeunload = () => {
      localStorage.setItem(saveKey, JSON.stringify(this.state.tasks));
    };
  }

  onTaskSubmit(e) {
    e.preventDefault();
    
    let taskDesc = document.querySelector(".task-add-field").value;
    if (taskDesc != null) {       
      let newTask = {id: this.state.tasks.length, desc: taskDesc};
      this.setState((state) => {
        return {tasks: state.tasks.concat(newTask)};
      });
    }
  }

  // Because setState doesn't call all the time. 
  componentDidUpdate() {
    console.log(this.state.tasks);
  }

  editTask(e) {
    console.log("Callbacku.")
    e.preventDefault();
    let form = e.currentTarget.parentNode;
    let id = parseInt(form.querySelector(".task-edit-id").value);
    let newDesc = form.querySelector(".task-edit-field").value;

    this.setState((state) => {
      let updatedTasks = state.tasks.map(task => {
        if (task.id === id) {
          task.desc = newDesc;
        }
        return task;
      });

      return {tasks: updatedTasks}
    })
  }

  deleteTask(id) {
    this.setState((state) => {
      let updatedTasks = state.tasks.filter(task => (task.id !== id));

      return {tasks: updatedTasks};
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Task Overview </h1>
        <Overview
          tasks={this.state.tasks}
          submitHandler={this.onTaskSubmit.bind(this)}
          editTask={this.editTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)}
          />
      </div>
    );
  }
}


export default App;
