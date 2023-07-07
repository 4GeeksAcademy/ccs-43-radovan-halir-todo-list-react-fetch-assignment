import React, { useState } from "react";

//cuando usar el use state?
//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
	const handleImputCambio = (event) => {
		setInputValue(event.target.value)
	}
	const handleEnter = (event) => {
		if (event.key === "Enter") {
			agregar();
		}
	}
	const agregar = () => {
		if (inputValue.trim() !== "") {
			setTodos([...todos, inputValue]);
			setInputValue("")
		}
	}
	return (
		<div className="container">
			<h1>MY TASKS</h1>
			<ul>

				<li>
					<input
						type="text"
						onChange={handleImputCambio}
						value={inputValue}
						onKeyPress={handleEnter}
						placeholder="What stuff do you need to do?">
					</input>
				</li>
				{
					todos.length == 0 ? (
						<li>there is no task to add</li>
					) : (
						todos.map((item, index) => {
							return (
								<li className="hover">
									{item}{""}
									<i class="fa-solid fa-trash cesto"
										onClick={() =>
											setTodos(
												todos.filter(
													(t, currentIndex) =>
														index != currentIndex
												)
											)
										}></i>
								</li>
							)
						})
					)
				}
				<div className='card m-1 container-fluid counter'>{todos.length} pending items</div>
			</ul>

			{/* <div>23 task</div> */}
		</div>
	);
};
export default Home;
