import apolloServer from 'apollo-server'
const { gql } = apolloServer

export const typeDefs = gql`
    type Note {
        title: String!
        content: String!
        dateCreated: String!
    }
    
    type Reminder {
        title: String!
        content: String!
        reminderTime: String!
    }

    type Query {
        notes: [Note]
        reminders: [Reminder]
    }

    type Mutation {
        addNote(title: String!, content: String!, dateCreated: String!): Note!
    }
`