import { Note } from './Notes.js'
import { Reminder } from './Reminders.js'

export const resolvers = {
    Query: {
        notes: () => Note.find(),
        reminders: () => Reminder.find()
    },

    Mutation: {
        addNote: async ( _, {title, content, dateCreated } ) => {
            const note = new Note({title, content, dateCreated})
            await note.save()
            return note
        },
        addReminder: async ( _, {title, content, reminderTime } ) => {
            const reminder = new Reminder({title, content, reminderTime})
            await reminder.save()
            return reminder
        }
    }
}