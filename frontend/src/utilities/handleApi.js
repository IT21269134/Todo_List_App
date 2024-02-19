import axios from "axios";

const baseUrl = "http://localhost:5000";

const getAllToDo = (setToDo) => {
	axios.get(baseUrl).then(({ data }) => {
		console.log("data --->", data);
		setToDo(data);
	});
};

const addToDo = (title, setTitle, description, setDescription, setToDo) => {
	axios
		.post(`${baseUrl}/create`, { title, description })
		.then(({ data }) => {
			console.log(data);
			setTitle("");
			setDescription("");
			getAllToDo(setToDo);
		})
		.catch((err) => {
			console.log(err);
		});
};

const updateToDo = (
	toDoId,
	title,
	description,
	setToDo,
	setTitle,
	setDescription,
	setIsUpdating
) => {
	axios
		.post(`${baseUrl}/update`, { _id: toDoId, title, description })
		.then((data) => {
			setTitle("");
			setDescription("");
			setIsUpdating(false);
			getAllToDo(setToDo);
		})
		.catch((err) => {
			console.log(err);
		});
};

const deleteToDo = (_id, setToDo) => {
	axios
		.post(`${baseUrl}/delete`, { _id})
		.then((data) => {
			console.log(data);
			getAllToDo(setToDo);
		})
		.catch((err) => {
			console.log(err);
		});
};
export { getAllToDo, addToDo, updateToDo ,deleteToDo};
