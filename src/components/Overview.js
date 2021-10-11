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
    // // remove from all other actively disabled items.
    // document.querySelectorAll(".no-display").forEach(elem => {
    //   elem.classList.remove("no-display");
    // });

    let taskNode = e.target.parentNode;

    while(!taskNode.matches(".task")) {
      taskNode = taskNode.parentNode;
    }
    console.log(taskNode.className);
    let form = taskNode.querySelector(".task-edit-form");

    // hide the task display as to mimic editing it.
    taskNode.querySelector(".description").classList.toggle("no-display");

    // hide edit button
    taskNode
      .querySelector(".toggle-edit")
      .classList
      .toggle("no-display");

    // hide delete button
    taskNode
      .querySelector(".delete")
      .classList
      .toggle("no-display");

    // and then show form.
    // the next time these are pressed, edit button is shown and form is hidden.
    form.classList.toggle("no-display");
  }

  const onTaskEditSubmit = (e) => {
    onEditTask(e);
    toggleEditTaskForm(e);
  }

  return (
    <div className="task-edit">
      <button className="toggle-edit" onClick={toggleEditTaskForm}>Edit</button>
      <form className="task-edit-form no-display" onSubmit={onTaskEditSubmit}>
        <input name="task-id" className="task-edit-id"
            type="hidden" value={task.id}/>
        <input name="task-desc" className="task-edit-field"
          type="text" defaultValue={task.desc} required/>
        <button type="submit">Submit</button>
        <button type="button" onClick={toggleEditTaskForm}>Cancel</button>
      </form>
    </div>
  )
}

const Tasks = ({tasks, editTask, deleteTask}) => {
  const onClickDelete = (id) => {
    let ans = window.confirm("Are you sure you want to delete this task?");

    if (!ans) {
      return;
    }
    
    deleteTask(id);
  }

  const taskElements = tasks.map((task) => {
    return (
    <li key={task.id} className="task">
      <div>
        <span className="marker">{task.id + 1}.</span>
        <p className="description">{task.desc}</p>
      </div>
      <div className="ops">
        <EditTaskForm onEditTask={editTask} task={task}/>
        <button className="delete" onClick={onClickDelete.bind(null, task.id)}>Delete</button>
      </div>
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
        <Tasks tasks={this.props.tasks}
        editTask={this.props.editTask}
        deleteTask={this.props.deleteTask}/>
        <Input submitHandler={this.props.submitHandler} />
      </div>
    )
  }
}

export default Overview;