import apolloServer from 'apollo-server'
import mongoose from 'mongoose'
import typeDefs from './models/typeDefs.js'
import resolvers from './models/resolvers.js'

const { ApolloServer } = apolloServer


const start = async () => {

    const server = new ApolloServer({typeDefs, resolvers})

    await mongoose.connect("mongodb+srv://dbUser:P@ssw0rd@graphql-api.1a5w5.mongodb.net/graphqlNotes?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    
    server.listen({port: 4000}).then(({url}) => console.log(`server running at ${url}`))

}

