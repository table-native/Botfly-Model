/**
 * @fileoverview gRPC-Web generated client stub for botfly
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.botfly = require('./game_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.botfly.GameServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.botfly.GameServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.botfly.GameDetails,
 *   !proto.botfly.BotTemplate>}
 */
const methodDescriptor_GameService_GetBotTemplate = new grpc.web.MethodDescriptor(
  '/botfly.GameService/GetBotTemplate',
  grpc.web.MethodType.UNARY,
  proto.botfly.GameDetails,
  proto.botfly.BotTemplate,
  /**
   * @param {!proto.botfly.GameDetails} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.botfly.BotTemplate.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.botfly.GameDetails,
 *   !proto.botfly.BotTemplate>}
 */
const methodInfo_GameService_GetBotTemplate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.botfly.BotTemplate,
  /**
   * @param {!proto.botfly.GameDetails} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.botfly.BotTemplate.deserializeBinary
);


/**
 * @param {!proto.botfly.GameDetails} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.botfly.BotTemplate)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.botfly.BotTemplate>|undefined}
 *     The XHR Node Readable Stream
 */
proto.botfly.GameServiceClient.prototype.getBotTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/botfly.GameService/GetBotTemplate',
      request,
      metadata || {},
      methodDescriptor_GameService_GetBotTemplate,
      callback);
};


/**
 * @param {!proto.botfly.GameDetails} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.botfly.BotTemplate>}
 *     Promise that resolves to the response
 */
proto.botfly.GameServicePromiseClient.prototype.getBotTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/botfly.GameService/GetBotTemplate',
      request,
      metadata || {},
      methodDescriptor_GameService_GetBotTemplate);
};


module.exports = proto.botfly;

