import react, {Component} from 'react'

const Input = ({submitHandler}) => {
  return (
    <form onSubmit={submitHandler}>
      <input id="task-add" className="task-add-field"
        type="text" placeholder="click here to add a task"/>
      <button>Add Task</button>
    </form>
  );
}

const Tasks = ({tasks}) => {
  const taskElements = tasks.map((task) => {
    return (<li key={task.id} className="task">{task.desc}</li>)
  });
  
  return (
    <ol className="tasks">
      {taskElements}
    </ol>
  );
}


class Overview extends Component {
  render() {
    return (
      <div className="overview">
        <Tasks tasks={this.props.tasks} />
        <Input submitHandler={this.props.submitHandler} />
      </div>
    )
  }
}

export default Overview;