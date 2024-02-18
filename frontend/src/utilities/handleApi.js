import axios from "axios";

const baseUrl = "http://localhost:5000";

const getAllToDo = (setTodos) => {
	axios.get(baseUrl).then(({ data }) => {
		console.log("data --->", data);
		setTodos(data);
	});
};

export { getAllToDo };