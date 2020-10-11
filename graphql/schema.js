const gql = require("graphql-tag");

const sample = require("../controllers/sample.controller");
const SampleTypeDefs = gql`
  interface IVehicle {
    type: String
    description: String
  }

  type Car implements IVehicle {
    type: String
    detail: String
    isTaxi: Boolean
    description: String
  }

  type Bus implements IVehicle {
    type: String
    detail: String
    transport: Boolean
    passenger: Int
    description: String
  }

  type Bike implements IVehicle {
    type: String
    detail: String
    race: Boolean
    description: String
  }

  type Vehicle implements IVehicle {
    type: String
    description: String
  }

  type Query {
    getSingleSample: Vehicle
    getMultiSample(type: String): IVehicle
  }
`;

const resolvers = Object.assign(sample);
const typeDefs = [SampleTypeDefs];

module.exports = { resolvers, typeDefs };
