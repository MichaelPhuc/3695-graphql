import mongoose from 'mongoose'

export const Reminder = mongoose.model("Reminder", {title: String, content: String, reminderTime: String})