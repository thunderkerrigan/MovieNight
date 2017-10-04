const Realm = require('realm');

module.exports = {
  realm: function () {
    return Realm.open({
      path: './Realm/movieNight.realm',
      schema: [UserSchema, VoteCastSchema, PollsSchema, DirectorSchema, MoviesSchema]
    });
  }
}

const UserSchema = {
  name: 'User',
  properties: {
    username: 'string',
    polls: {
      type: 'list',
      objectType: 'Polls'
    },
    votes: {
      type: 'list',
      objectType: 'VoteCast'
    }
  }
};

const VoteCastSchema = {
  name: 'VoteCast',
  properties: {
    choice1Weight: {
      type: 'Movies'
    },
    choice2Weight: {
      type: 'Movies'
    },
    choice2Weight: {
      type: 'Movies'
    },
    poll: {
      type: 'Polls'
    }
  }
};

const PollsSchema = {
  name: 'Polls',
  properties: {
    date: 'date',
    letter: 'string',
    issuer: 'User',
    choices: {
      type: 'list',
      objectType: 'Movies'
    }
  }
};

const DirectorSchema = {
  name: 'Director',
  properties: {
    lastName: 'string',
    firstName: 'string'
  }
};

const MoviesSchema = {
  name: 'Movies',
  properties: {
    title: 'string',
    date: 'date',
    summary: 'string',
    posterURL: 'string',
    director: {
      type: 'Director'
    }
  }
};