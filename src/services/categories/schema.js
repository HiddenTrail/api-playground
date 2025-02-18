module.exports = {
  'title': 'Category Schema',
  'type': 'object',
  'required': [ 'id', 'name' ],
  'additionalProperties': false,
  'properties': {
    'name': {
      'type': 'string',
      'maxLength': 100,
      'minLength': 1
    },
    'id': {
      'type': 'string',
      'maxLength': 100,
      'minLength': 1
    }
  }
};
