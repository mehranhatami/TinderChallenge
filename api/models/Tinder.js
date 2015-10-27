/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  schema: true,

  attributes: {
    id: {
      type: 'integer',
      required: true,
      unique: false
    },
    name: {
      type: 'string',
      required: true
    },
    age: {
      type: 'integer',
      required: true
    },
    mutualfriends: {
      type: 'integer',
      required: true
    },
    interests: {
      type:'JSON',
      defaultsTo:[]
    },
    imgURL: {
      type: 'string'
    }

  }
};
