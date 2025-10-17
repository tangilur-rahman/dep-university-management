// external modules
const mongoose = require("mongoose");

const schema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true
		},

		id: {
			type: String,
			required: true
		},

		email: {
			type: String,
			required: true
		},

		password: {
			type: String,
			required: true,
			trim: true
		},

		profile_img: {
			type: String,
			default: "default-img.png",
			trim: true
		},

		role: {
			type: String,
			required: true,
			trim: true
		},

		gender: {
			type: String,
			trim: true
		},

		group_room: [
			{
				room: String
			}
		],

		advisor_room: [
			{
				room: String
			}
		],

		token: {
			type: String,
			default: ""
		}
	},
	{ timestamps: true }
);

const adminModel = mongoose.model("administrator", schema);

module.exports = adminModel;
