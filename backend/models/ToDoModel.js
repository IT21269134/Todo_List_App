const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,	
	},
});
module.exports = mongoose.model("ToDo", todoSchema);
