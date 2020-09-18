import apollo from 'apollo-server'
const { ApolloServer, gql } = apollo

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  type Person {
    val1: String
    val2: String
  }
  type Facility {
    val3: String
    val4: String
  }
  type Exposure {
    val5: String
  }
  
  type Query {
    person(input: Int!): Person
    facility(val1: Int!): Facility
    exposure(val2: Int!): Exposure
  }
`;

const person =
{
  val1: "",
  val2: "",
};
const facility =
{
  val3: "",
  val4: "",
};

const exposure =
{
  val5: ""
};


const resolvers = {
  Query: {
    person: (args) => {
      console.log("resolver:person")
      console.log(args)
      // TODO: nest resolve to facility, pass on the val1 from person
      return person
    },
    facility: (args) => {
      console.log("resolver:facility")
      console.log(args)
      // TODO: nest resolve to facility, pass on the val1
      return facility
    },
    exposure: (args) => {
      console.log("resolver:exposure")
      console.log(args)
      // TODO: nest resolve to facility, pass on the val1
      return exposure
    },
  },
};
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});