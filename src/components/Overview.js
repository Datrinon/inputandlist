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

class Overview extends Component {
  render() {
    const taskElements = [];
    this.props.tasks.forEach((task, index) => {
      let taskView = (
        <li className="task">{task}</li>
      );

      taskElements.push(taskView);
    })

    return (
      <div className="overview">
        <ol className="tasks">
          {taskElements}
        </ol>
        <Input submitHandler={this.props.submitHandler} />
      </div>
    )
  }
}

export default Overview;