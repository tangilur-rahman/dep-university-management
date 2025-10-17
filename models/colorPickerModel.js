// external modules
const mongoose = require("mongoose");

const schema = mongoose.Schema(
	{
		menu_bar_bg_color: {
			type: String,
			trim: true,
			default: "#000000"
		},

		admin_total_foreground_color: {
			type: String,
			trim: true,
			default: "#ffffff"
		},

		admin_total_background_color: {
			type: String,
			trim: true,
			default: "#0077b6"
		},

		advisors_total_foreground_color: {
			type: String,
			trim: true,
			default: "#ffffff"
		},

		advisors_total_background_color: {
			type: String,
			trim: true,
			default: "#2e3192"
		},

		students_total_foreground_color: {
			type: String,
			trim: true,
			default: "#ffffff"
		},

		students_total_background_color: {
			type: String,
			trim: true,
			default: "#0ead69"
		},

		notification_up_color: {
			type: String,
			trim: true,
			default: "#b1b2d4"
		},

		notification_down_color: {
			type: String,
			trim: true,
			default: "#0ead69"
		},

		user_name_color: {
			type: String,
			trim: true,
			default: "#2e3192"
		},

		user_id_color: {
			type: String,
			trim: true,
			default: "#073b4c"
		},

		highlight_left_sidebar_color: {
			type: String,
			trim: true,
			default: "#1a479e"
		},

		left_slider_options_fore_color: {
			type: String,
			trim: true,
			default: "#6B4CE6"
		},

		dropdown_foreground_color: {
			type: String,
			trim: true,
			default: "#ffffff"
		},

		dropdown_background_color: {
			type: String,
			trim: true,
			default: "#62baea"
		}
	},
	{ timestamps: true }
);

const colorPickerModel = mongoose.model("color", schema);

module.exports = colorPickerModel;
