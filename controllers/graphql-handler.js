const graphQLErrorHandler = require('./graphql-error-handler');

const graphQLHandler = ({ handler, validator }) => async (parent, args, context) => {
  try {
    const returnValue = await handler(parent, args, context);
    const validate = await validator(returnValue);
    return validate;
  } catch (err) {
    graphQLErrorHandler(err);
  }
};

module.exports = { graphQLHandler }