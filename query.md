# Write your query or mutation here
query getSingleSample {
	getSingleSample {
    type
  }
}

# Write your query or mutation here
query getMultiSample {
	getMultiSample(type:"Car") {
    type
    description
    ... on Car {
      type
      detail
      isTaxi
    }
    ... on Bus {
      type
      detail
      transport
      passenger
    }
    ... on Bike{
      type
      detail
      race
    }
  }
}