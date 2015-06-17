'use strict';

function handleReply(err, data, request, reply) {
  if (err) {
    reply(err);
  } else {
    reply(data);
  }
}

module.exports.handleReply = handleReply;