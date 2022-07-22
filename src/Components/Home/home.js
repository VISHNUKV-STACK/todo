import React, { useState } from "react";

import { v1 as uuidv1 } from "uuid";

const Home = () => {
  const [todo, setTodo] = useState();
  
  const [todos,setTodos] = useState([''])

  let count = 0;
  const handleChange = (e) => {
    const val = e.target.value;
    console.log(val);
    setTodo(val);
  };

  const handleSubmit = () => {
    count = count + 1;
    let id = uuidv1();
    console.log(todo);

    setTodos({
        id,
        todo,
        count,
    });
    console.log(todos);
  };

  return (
    <div className="border w-full flex flex-col justify-center items-center ">
      <div className="p-3 mt-5">
        <h1 className=" font-bold text-4xl">Todo App</h1>
      </div>
      <div className="border max-w-lg w-1/2 flex flex-row  rounded overflow-hidden shadow-lg mt-10 p-2">
        <input
          className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Todo"
          type="text"
          placeholder=" Enter Your Todo "
          onChange={handleChange}
        />
        <div className="w-44  ml-2 flex justify-center items-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white px-5 py-1 rounded focus:outline-none focus:shadow-outline   "
            type="submit"
            onClick={handleSubmit}
          >
            Add Todos
          </button>
        </div>
      </div>
      <div className="border mt-5  w-3/4 p-5 ">
        <div className="border w-full h-12 grid grid-cols-4">
          <div className=" col-span-1 border flex justify-center items-center">
            No
          </div>
          <div className=" col-span-2 border flex justify-center items-center ">
            Todos
          </div>
          <div className=" col-span-1 border flex justify-center items-center ">
            Funtions
          </div>
        </div>

        {todos.length ===0 ? <h1>no todos</h1>:<h1>todos</h1> }
{/* <div className="border w-full h-12  p-2 flex justify-center items-center">
            No Todos Available!!
          </div> */}


{/* <div className="border w-full h-12 grid grid-cols-4 ">
            <div className=" col-span-1 border flex justify-center items-center">
              No
            </div>
            <div className=" col-span-2 border flex justify-center items-center ">
              Todos
            </div>
            <div className=" col-span-1 border flex justify-center items-center ">
              Funtions
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default Home;
