import React, { useEffect, useState } from "react";
import "../styling/mainPage.scss";
import ToDo from "./Todo";
import { getAllToDo } from "../utilities/handleApi";

function MainPage() {
	const [toDo, setToDo] = useState([]);

    useEffect(() => {
        getAllToDo(setToDo);
        // fetch("http://localhost:8000/api/todos")
        //     .then((res) => res.json())
        //     .then((data) => setToDo(data));
    }, []);

	return (
		<div className="App">
			<div className="container">
				<h1>Todo App</h1>
				<div className="top">
					<input type="text" placeholder="Add ToDo...." />
					<button className="add" onClick={}>Add</button>
				</div>
				<div className="list">
					{toDo.map((item) => (
						<ToDo
							key={item.id}
							title={item.title}
							description={item.description}
							completed={item.completed}
						/>
					))}

				</div>
			</div>
		</div>
	);
}

export default MainPage;
