import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql'
import { axios } from 'axios';


const FacilityType = new GraphQLObjectType({
  name: 'Facility',
  fields: {
    val1: { type: GraphQLString },
    val2: { type: GraphQLString }
  }
});

const ExposureType = new GraphQLObjectType({
  name: 'Exposure',
  fields: {
    val1: { type: GraphQLString },
    val2: { type: GraphQLString }
  }
});

const PersonType = new GraphQLObjectType({
  name: 'Person',
  fields: {
    val1: { 
      type: FacilityType,
      resolve(parentValue, args){
        console.log(args)
        return axios.get(`http://localhost:3005/facility/${parentValue}`)
        .then(res => res.data)
      }
    },
    val2: { type: ExposureType,
      resolve(parentValue, args){
        console.log(args)
        return axios.get(`http://localhost:3005/exposure/${parentValue}`)
        .then(res => res.data)
      }
    }
  }
});

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    person: {
      type: PersonType,
      resolve(parentValue, args){
        console.log(args)
        return axios.get(`http://localhost:3005/person/`)
        .then(res => res.data)
      }
    }
  })
});