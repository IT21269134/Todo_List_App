import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import "../styling/mainPage.scss";

function Todo({ title, description, completed, updateMode, deleteTodo }) {
	return (
		<div>
			<div className="todo">
				<div className="text">{title}</div>
				<div className="text">{description} </div>

				<div className="icons">
					<BiEdit className="icon" onClick={updateMode} />
					<AiFillDelete className="icon" onClick={deleteTodo} />
				</div>
			</div>
		</div>
	);
}

export default Todo;
