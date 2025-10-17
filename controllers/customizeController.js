// external modules

// internal modules
const colorPickerModel = require("../models/colorPickerModel");

// for login-page background-img changing
const loginPageBackgroundImgChange = async (req, res) => {
	try {
		if (req.file.filename) {
			res
				.status(200)
				.json({ message: "Login page background img changed successfully." });
		} else {
			res.status(500).json({ error: "Something was wrong, Try again!" });
		}
	} catch (error) {
		res.status(500).json({ error: "Something was wrong, Try again!" });
	}
};

// for main-logo changing
const mainLogoChange = async (req, res) => {
	try {
		if (req.file.filename) {
			res.status(200).json({ message: "Project's logo changed successfully." });
		} else {
			res.status(500).json({ error: "Something was wrong, Try again!" });
		}
	} catch (error) {
		res.status(500).json({ error: "Something was wrong, Try again!" });
	}
};

// for creating color document if not exist
const createColorDocu = async (req, res) => {
	try {
		const getDocument = await colorPickerModel.findOne({});

		if (getDocument) {
			res.status(200).json({ message: "Already have color document." });
		} else {
			await colorPickerModel({
				admin_total_foreground_color: "#ffffff"
			}).save();
			res.status(200).json({ message: "Created color document successfully." });
		}
	} catch (error) {
		res.status(500).json({ error: "Something was wrong, Try again!" });
	}
};

// for getting all project's colors
const getAllColors = async (req, res) => {
	try {
		const allColors = await colorPickerModel.findOne({});

		if (allColors) {
			res.status(200).json(allColors);
		} else {
			res.status(500).json({ error: "Something was wrong, Try again!" });
		}
	} catch (error) {
		res.status(500).json({ error: "Something was wrong, Try again!" });
	}
};

// for updating colors
const updateColors = async (req, res) => {
	try {
		const {
			menu_bar_bg_color,
			admin_total_foreground_color,
			admin_total_background_color,
			advisors_total_foreground_color,
			advisors_total_background_color,
			students_total_foreground_color,
			students_total_background_color,
			notification_up_color,
			notification_down_color,
			user_name_color,
			user_id_color,
			highlight_left_sidebar_color,
			left_slider_options_fore_color,
			dropdown_foreground_color,
			dropdown_background_color
		} = req.body;

		if (menu_bar_bg_color) {
			await colorPickerModel.updateOne(
				{},
				{
					$set: {
						menu_bar_bg_color
					}
				}
			);
		}

		if (admin_total_foreground_color) {
			await colorPickerModel.updateOne(
				{},
				{
					$set: {
						admin_total_foreground_color
					}
				}
			);
		}

		if (admin_total_background_color) {
			await colorPickerModel.updateOne(
				{},
				{
					$set: {
						admin_total_background_color
					}
				}
			);
		}

		if (advisors_total_foreground_color) {
			await colorPickerModel.updateOne(
				{},
				{
					$set: {
						advisors_total_foreground_color
					}
				}
			);
		}

		if (advisors_total_background_color) {
			await colorPickerModel.updateOne(
				{},
				{
					$set: {
						advisors_total_background_color
					}
				}
			);
		}

		if (students_total_foreground_color) {
			await colorPickerModel.updateOne(
				{},
				{
					$set: {
						students_total_foreground_color
					}
				}
			);
		}

		if (students_total_background_color) {
			await colorPickerModel.updateOne(
				{},
				{
					$set: {
						students_total_background_color
					}
				}
			);
		}

		if (notification_up_color) {
			await colorPickerModel.updateOne(
				{},
				{
					$set: {
						notification_up_color
					}
				}
			);
		}

		if (notification_down_color) {
			await colorPickerModel.updateOne(
				{},
				{
					$set: {
						notification_down_color
					}
				}
			);
		}

		if (user_name_color) {
			await colorPickerModel.updateOne(
				{},
				{
					$set: {
						user_name_color
					}
				}
			);
		}

		if (user_id_color) {
			await colorPickerModel.updateOne(
				{},
				{
					$set: {
						user_id_color
					}
				}
			);
		}

		if (highlight_left_sidebar_color) {
			await colorPickerModel.updateOne(
				{},
				{
					$set: {
						highlight_left_sidebar_color
					}
				}
			);
		}

		if (left_slider_options_fore_color) {
			await colorPickerModel.updateOne(
				{},
				{
					$set: {
						left_slider_options_fore_color
					}
				}
			);
		}

		if (dropdown_foreground_color) {
			await colorPickerModel.updateOne(
				{},
				{
					$set: {
						dropdown_foreground_color
					}
				}
			);
		}

		if (dropdown_background_color) {
			await colorPickerModel.updateOne(
				{},
				{
					$set: {
						dropdown_background_color
					}
				}
			);
		}

		res.status(200).json({ message: "Color updated successfully." });
	} catch (error) {
		res.status(500).json({ error: "Something was wrong, Try again!" });
	}
};

module.exports = {
	loginPageBackgroundImgChange,
	mainLogoChange,
	createColorDocu,
	getAllColors,
	updateColors
};
