import React from "react";
import Tasks from "./Tasks";
import { Paper, TextField, Checkbox, Button } from "@material-ui/core";
import "./App.css";

class App extends Tasks {
    state = { tasks: [], currentTask: "" };

    render() {
        const { tasks, currentTask } = this.state;
        return (
            <div className="app">
                <header className="app-header">
                    <h1>'My Players List'</h1>
                </header>
                <div className="main-content">
                    <Paper elevation={3} className="todo-container">
                        <form onSubmit={this.handleSubmit} className="task-form">
                            <TextField
                                variant="outlined"
                                size="small"
                                className="task-input"
                                value={currentTask}
                                required={true}
                                onChange={this.handleChange}
                                placeholder="Enter Player Name"
                                InputProps={{
                                    style: { color: 'black' },        
                                }}
                                inputProps={{
                                    style: { color: 'black' },        
                                }}
                            />
                            <Button
                                className="add-task-btn"
                                color="primary"
                                variant="outlined"
                                type="submit"
                            >
                                Add Player
                            </Button>
                        </form>

                        <div className="tasks-list">
                            {tasks.map((task) => (
                                <Paper key={task._id} className="task-item">
                                    <Checkbox
                                        checked={task.completed}
                                        onClick={() => this.handleUpdate(task._id)}
                                        color="primary"
                                    />
                                    <div className={task.completed ? "task-text completed" : "task-text"}>
                                        {task.task}
                                    </div>
                                    <Button
                                        onClick={() => this.handleDelete(task._id)}
                                        color="secondary"
                                        className="delete-task-btn"
                                    >
                                        Remove Player
                                    </Button>
                                </Paper>
                            ))}
                        </div>
                    </Paper>
                </div>
            </div>
        );
    }
}

export default App;
