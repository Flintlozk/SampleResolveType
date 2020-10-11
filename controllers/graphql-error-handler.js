const graphQLErrorHandler = (err) => {
  const errType = err.name;

  switch (errType) {
    case 'AuthError':
      throw err;
    // start: generic error
    case 'TypeError':
      throw new Error(`[${errType}]Message: ${err.message}`);
    default:
      throw new Error(`[Unexpected Internal Error]Message: ${err.message ? err.message : ''}`);
    // end: generic error
  }
}

module.exports = { graphQLErrorHandler }