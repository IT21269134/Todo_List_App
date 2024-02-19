import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import "../styling/mainPage.scss";

function Todo({ title, description, updateMode, deleteToDo }) {
	return (
		<div>
			<div className="todo">
				<div className="text">{title}</div>
				<div className="text">{description} </div>

				<div className="icons">
					<BiEdit className="icon" onClick={updateMode} />
					<AiFillDelete className="icon" onClick={deleteToDo} />
				</div>
			</div>
		</div>
	);
}

export default Todo;
