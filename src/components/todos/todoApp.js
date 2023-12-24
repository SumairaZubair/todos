// import React, { useState } from 'react'
// import '../todosCss/todos.css'
// const TodoApp = () => {
//     const[todos , setTodos]= useState([]);
//     const[inputValue,setInputValue]= useState('')

//     function handleChange(e){
//         setInputValue(e.target.value)
//       }
      
//       function handleSubmit(e){
//         e.preventDefault()
//         if (inputValue.trim() === '') {
//             alert('Please enter a valid todo.'); 
//             return; 
//           }
//         setTodos([...todos, inputValue])
//         setInputValue('')
//       }
//       const handleDelete = (index) => {
//         const newTodos = [...todos];
//         newTodos.splice(index, 1);
//         setTodos(newTodos);
//       };
//   return (
//     <div className='todo-body'>
//         <h2>
//             Task List 2024
//         </h2>
//         <div className='center-box'>
//           <div className=''>
//             <form>
//              <div className='input-btn'>   
//             <input className='input' type='text' value={inputValue} onChange={handleChange} placeholder='What do you planned?' />
//             <button className='add-btn' onClick={handleSubmit}>Add task</button>
//             </div>
//             <div className='input-btn'>   
//             <input className='input-desp' type='text' value={inputValue} onChange={handleChange} placeholder='Your plan description?' />
//             <button className='add-btn' onClick={handleSubmit}>Add task</button>
//             </div>
//             </form>
//           </div>
//           <div className='todo-render-div'>           
//           {todos.map((todo , index) => (
//           <div className='render-task' key={index}>
//             <p className='todo-render'>{todo}</p>
//             <button className='edit-delete'>Edit</button>

//             <button className='edit-delete' onClick={() =>handleDelete(index)}>Delete</button>

//           </div>
//         ))}
//      </div>
//           </div>
//         </div>
  
//   )
// }

// export default TodoApp



// import React, { useState } from 'react';
// import '../todosCss/todos.css';
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { AiFillEdit } from "react-icons/ai";


// const TodoApp = () => {
//     const [todos, setTodos] = useState([]);
//   const [inputTask, setInputTask] = useState('');
//   const [inputDescription, setInputDescription] = useState('');
//   const [editIndex, setEditIndex] = useState(null);

//   function handleTaskChange(e) {
//     setInputTask(e.target.value);
//   }

//   function handleDescriptionChange(e) {
//     setInputDescription(e.target.value);
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (inputTask.trim() === '' || inputDescription.trim() === '') {
//       alert('Please enter a valid task & des...');
//       return;
//     }

//     if (editIndex !== null) {
//       // Edit existing task
//       const updatedTodos = [...todos];
//       updatedTodos[editIndex] = { task: inputTask, description: inputDescription };
//       setTodos(updatedTodos);
//       setEditIndex(null);
//     } else {
//       // Add new task
//       const newTodo = { task: inputTask, description: inputDescription };
//       setTodos([...todos, newTodo]);
//     }

//     setInputTask('');
//     setInputDescription('');
//   }

//   const handleEdit = (index) => {
//     const taskToEdit = todos[index];
//     setInputTask(taskToEdit.task);
//     setInputDescription(taskToEdit.description);
//     setEditIndex(index);
//   };

//   const handleDelete = (index) => {
//     const newTodos = [...todos];
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
//     setEditIndex(null); // Clear edit index when deleting
//   };
//   return (
//     <div className='todo-body'>
//       <h2>Task List 2024</h2>
//       <div className='center-box'>
//         <div>
//           <form>
//             <div className='input-btn'>
//              <div className='input-desps'>
//              <input
//                 className='input'
//                 type='text'
//                 value={inputTask}
//                 onChange={handleTaskChange}
//                 placeholder='What do you planned?'
//               />
//               <input
//                 className='input-desp'
//                 type='text'
//                 value={inputDescription}
//                 onChange={handleDescriptionChange}
//                 placeholder='Your plan description?'
//               />
//              </div>
//              <button className='add-btn' onClick={handleSubmit}>
//                 {editIndex !== null ? 'Edit task' : 'Add task'}
//               </button>
//             </div>
//           </form>
//         </div>
//         <div className='todo-render-div'>
//           {todos.map((todo, index) => (
//             <div className='render-task' key={index}>
//               <p className='todo-render'>
//                 {todo.task} - {todo.description}
//               </p>
//               <button className='edit-delete' onClick={() => handleEdit(index)}>
//                 <AiFillEdit/>
//               </button>
//               <button className='edit-delete' onClick={() => handleDelete(index)}>
//                 <RiDeleteBin6Line/>
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TodoApp;



import React, { useState, useEffect } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
import '../todosCss/todos.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputTask, setInputTask] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    // Load todos from local storage on component mount
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    // Save todos to local storage whenever todos state changes
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function handleTaskChange(e) {
    setInputTask(e.target.value);
  }

  function handleDescriptionChange(e) {
    setInputDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputTask.trim() === '' || inputDescription.trim() === '') {
      alert('Please enter a valid task & des...');
      return;
    }

    if (editIndex !== null) {
      // Edit existing task
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = { task: inputTask, description: inputDescription };
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      // Add new task
      const newTodo = { task: inputTask, description: inputDescription };
      setTodos([...todos, newTodo]);
    }

    setInputTask('');
    setInputDescription('');
  }

  const handleEdit = (index) => {
    const taskToEdit = todos[index];
    setInputTask(taskToEdit.task);
    setInputDescription(taskToEdit.description);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    setEditIndex(null); // Clear edit index when deleting
  };

  return (
    <div className='todo-body'>
      <h2>Task List 2024</h2>
      <div className='center-box'>
        <div>
          <form>
            <div className='input-btn'>
             <div className='input-desps'>
             <input
                className='input'
                type='text'
                value={inputTask}
                onChange={handleTaskChange}
                placeholder='What do you planned?'
              />
              <input
                className='input-desp'
                type='text'
                value={inputDescription}
                onChange={handleDescriptionChange}
                placeholder='Your plan description?'
              />
             </div>
             <button className='add-btn' onClick={handleSubmit}>
                {editIndex !== null ? 'Edit task' : 'Add task'}
              </button>
            </div>
          </form>
        </div>
        <div className='todo-render-div'>
          {todos.map((todo, index) => (
            <div className='render-task' key={index}>
              <p className='todo-render'>
                {todo.task} - {todo.description}
              </p>
              <button className='edit-delete' onClick={() => handleEdit(index)}>
                <AiFillEdit/>
              </button>
              <button className='edit-delete' onClick={() => handleDelete(index)}>
                <RiDeleteBin6Line/>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;

