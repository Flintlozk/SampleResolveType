const { graphQLHandler } = require("./graphql-handler");

const getSingleSampleHandler = (parent, args, context) => {
  return {
    type: "Just car",
  };
};
const getMultiSampleHandler = (parent, args, context) => {
  let returnVehicle = {
    type: args.type,
    description: "Not Provided",
  };
  switch (args.type) {
    case "Car":
      return {
        ...returnVehicle,
        // type: "Car",
        detail: "Yes, Just a car not a taxi",
        isTaxi: false,
      };

    case "Bus":
      return {
        // type: "Bus",
        ...returnVehicle,
        detail: "I will take you to the fianl destination",
        transport: true,
        passenger: 300,
      };
    case "Bike": {
      return {
        // type: "Bike",
        ...returnVehicle,
        detail: "Wanna race ?",
        race: true,
      };
    }
    default:
      return {
        ...returnVehicle,
        type: "Just car",
      };
  }
};

const resolver = {
  IVehicle: {
    __resolveType(obj, context, info) {
      switch (obj.type) {
        case "Car":
          return "Car";
        case "Bus":
          return "Bus";
        case "Bike":
          return "Bike";
        default:
          return "Vehicle";
      }
    },
  },
  Query: {
    getSingleSample: graphQLHandler({
      handler: getSingleSampleHandler,
      validator: (x) => x,
    }),
    getMultiSample: graphQLHandler({
      handler: getMultiSampleHandler,
      validator: (x) => x,
    }),
  },
};

module.exports = resolver;
