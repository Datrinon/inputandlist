import {Component} from 'react'

const Input = ({submitHandler}) => {
  return (
    <form onSubmit={submitHandler}>
      <input id="task-add" className="task-add-field"
        type="text" placeholder="click here to add a task"/>
      <button>Add Task</button>
    </form>
  );
}

const EditTaskForm = ({onEditTask, task}) => {
  const toggleEditTaskForm = (e) => {
    let taskNode = e.currentTarget.parentNode;
    let form = taskNode.querySelector(".task-edit-form");
    
    // hide edit button 
    taskNode
      .querySelector(".toggle-visibility")
      .classList
      .toggle("no-display");
    
    // and then show form. 
    // the next time these are pressed, edit button is shown and form is hidden.
    form.classList.toggle("no-display");
  }

  return (
    <div className="task-edit">
      <button className="toggle-visibility" onClick={toggleEditTaskForm}>Edit</button>
      <form className="task-edit-form" onSubmit={onEditTask}>
        <input name="task-id" className="task-edit-id"
            type="hidden" value={task.id}/>
        <input name="task-desc" className="task-edit-field"
          type="text" defaultValue={task.desc}/>
        <button type="submit">Submit</button> 
        <button type="button" onClick={toggleEditTaskForm}>Cancel</button>
      </form>
    </div>
  )
}

const Tasks = ({tasks, editTask}) => {
  const taskElements = tasks.map((task) => {
    return (
    <li key={task.id} className="task">
      <p className="description">{task.desc}</p>
      <EditTaskForm onEditTask={editTask} task={task}/>
    </li>
    )
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
        <Tasks tasks={this.props.tasks} editTask={this.props.editTask}/>
        <Input submitHandler={this.props.submitHandler} />
      </div>
    )
  }
}

export default Overview;