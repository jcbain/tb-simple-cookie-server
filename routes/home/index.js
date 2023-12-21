"use strict";
const cookie = require("@fastify/cookie");

module.exports = async function (fastify, opts) {
  fastify.register(cookie, {
    secret: "my-secret", // for cookies signature
    hook: "onRequest", // set to false to disable cookie autoparsing or set autoparsing on any of the following hooks: 'onRequest', 'preParsing', 'preHandler', 'preValidation'. default: 'onRequest'
    parseOptions: {}, // options for parsing cookies
  });

  fastify.get("/", async function (request, reply) {
    reply.setCookie("tub", "goat");
    reply.type("text/html");
    return "<body><h1>Hello</h1></body>";
  });
};
