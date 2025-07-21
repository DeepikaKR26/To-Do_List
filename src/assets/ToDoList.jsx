import React,{ useState } from 'react';

function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] =useState(" ");

    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function addTask(){
        if(newTask.trim() !== ""){
        setTasks( t=> [...t, newTask]);
        setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks)
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index-1]] =[updatedTasks[index-1],updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length-1){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index + 1]] =[updatedTasks[index+1],updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }


    return(
    <div className='to-do-list'> 
        <h1>To-do-List</h1>
        <div>
            <input
                type='text'
                placeholder='Enter task ....'
                // value={handleInputChange}
                onChange={handleInputChange}/>
                <button
                className='add-button'
                onClick={addTask}>
                    Add
                </button>
        </div>
        <h2> {tasks.length == 0 && "No task is added yet"}</h2>  
        {/* short circuting */}
        <ol>
            {tasks.map((task, index) => 
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button 
                        className="delete-button"
                        onClick={() =>deleteTask(index)}>
                        Delete
                        </button>
                        <button 
                        className="move-up-button"
                        onClick={() =>moveTaskUp(index)}>
                        move Task Up
                        </button>
                        <button 
                        className="move-down-button"
                        onClick={() =>moveTaskDown(index)}>
                        move Task Down
                        </button>
                </li>
            )}
        </ol>

        
    </div>
    );
}
export default ToDoList;