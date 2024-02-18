const ToDoModel = require("../models/ToDoModel");

module.exports.getToDo = async (req, res) => {
	const toDo = await ToDoModel.find();
	res.send(toDo);
};

module.exports.createToDo = async (req, res) => {
	const { title, description } = req.body;
	ToDoModel.create({ title, description }).then((data) => {
		console.log("Added successfully");
		console.log(data);
		res.send(data);
	});
};

module.exports.updateToDo = async (req, res) => {
	const { _id, title, description } = req.body;
	ToDoModel.findByIdAndUpdate(_id, { title, description })
		.then(() => res.send("Updated successfully"))
		.catch((err) => console.log(err));
};

module.exports.deleteToDo = async (req, res) => {
	const {_id} = req.body;
	ToDoModel.findByIdAndDelete(_id)
		.then(() => res.send("Deleted successfully"))
		.catch((err) => console.log(err));
};