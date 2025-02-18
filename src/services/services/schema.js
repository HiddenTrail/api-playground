module.exports = {
  'title': 'Service Schema',
  'type': 'object',
  'required': [ 'name' ],
  'additionalProperties': false,
  'properties': {
    'name': {
      'type': 'string',
      'maxLength': 100,
      'minLength': 1
    }
  }
};
