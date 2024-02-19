import React, { useEffect, useState } from "react";
import "../styling/mainPage.scss";
import ToDo from "./Todo";
import {
	addToDo,
	getAllToDo,
	updateToDo,
	deleteToDo,
} from "../utilities/handleApi";

function MainPage() {
	const [toDo, setToDo] = useState([]);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [isUpdating, setIsUpdating] = useState(false);
	const [toDoId, setToDoId] = useState("");

	useEffect(() => {
		getAllToDo(setToDo);
	}, []);

	const updateMode = (_id, title, description) => {
		setIsUpdating(true);
		setTitle(title);
		setDescription(description);
		setToDoId(_id);
	};

	return (
		<div className="App">
			<div className="container">
				<h1>Todo App</h1>
				<div className="top">
					<input
						type="text"
						placeholder="Add ToDo title...."
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<input
						type="text"
						placeholder="Add task in brief...."
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
					<button
						className="add"
						onClick={
							isUpdating
								? () =>
										updateToDo(
											toDoId,
											title,
											description,
											setToDo,
											setTitle,
											setDescription,
											setIsUpdating
										)
								: () =>
										addToDo(
											title,
											setTitle,
											description,
											setDescription,
											setToDo
										)
						}
					>
						{isUpdating ? "Update" : "Add"}
					</button>
				</div>
				<div className="list">
					{toDo.map((item) => (
						<ToDo
							key={item._id}
							title={item.title}
							description={item.description}
							updateMode={() =>
								updateMode(item._id, item.title, item.description)
							}
							deleteToDo={() => deleteToDo(item._id, setToDo)}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default MainPage;
