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
 *   !proto.botfly.BotTemplate,
 *   !proto.botfly.SaveStatus>}
 */
const methodDescriptor_GameService_SaveMyBot = new grpc.web.MethodDescriptor(
  '/botfly.GameService/SaveMyBot',
  grpc.web.MethodType.UNARY,
  proto.botfly.BotTemplate,
  proto.botfly.SaveStatus,
  /**
   * @param {!proto.botfly.BotTemplate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.botfly.SaveStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.botfly.BotTemplate,
 *   !proto.botfly.SaveStatus>}
 */
const methodInfo_GameService_SaveMyBot = new grpc.web.AbstractClientBase.MethodInfo(
  proto.botfly.SaveStatus,
  /**
   * @param {!proto.botfly.BotTemplate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.botfly.SaveStatus.deserializeBinary
);


/**
 * @param {!proto.botfly.BotTemplate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.botfly.SaveStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.botfly.SaveStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.botfly.GameServiceClient.prototype.saveMyBot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/botfly.GameService/SaveMyBot',
      request,
      metadata || {},
      methodDescriptor_GameService_SaveMyBot,
      callback);
};


/**
 * @param {!proto.botfly.BotTemplate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.botfly.SaveStatus>}
 *     Promise that resolves to the response
 */
proto.botfly.GameServicePromiseClient.prototype.saveMyBot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/botfly.GameService/SaveMyBot',
      request,
      metadata || {},
      methodDescriptor_GameService_SaveMyBot);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.botfly.GameDetails,
 *   !proto.botfly.BotTemplate>}
 */
const methodDescriptor_GameService_GetMyBot = new grpc.web.MethodDescriptor(
  '/botfly.GameService/GetMyBot',
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
const methodInfo_GameService_GetMyBot = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.botfly.GameServiceClient.prototype.getMyBot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/botfly.GameService/GetMyBot',
      request,
      metadata || {},
      methodDescriptor_GameService_GetMyBot,
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
proto.botfly.GameServicePromiseClient.prototype.getMyBot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/botfly.GameService/GetMyBot',
      request,
      metadata || {},
      methodDescriptor_GameService_GetMyBot);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.botfly.GameDetails,
 *   !proto.botfly.MatchResult>}
 */
const methodDescriptor_GameService_Play = new grpc.web.MethodDescriptor(
  '/botfly.GameService/Play',
  grpc.web.MethodType.UNARY,
  proto.botfly.GameDetails,
  proto.botfly.MatchResult,
  /**
   * @param {!proto.botfly.GameDetails} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.botfly.MatchResult.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.botfly.GameDetails,
 *   !proto.botfly.MatchResult>}
 */
const methodInfo_GameService_Play = new grpc.web.AbstractClientBase.MethodInfo(
  proto.botfly.MatchResult,
  /**
   * @param {!proto.botfly.GameDetails} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.botfly.MatchResult.deserializeBinary
);


/**
 * @param {!proto.botfly.GameDetails} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.botfly.MatchResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.botfly.MatchResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.botfly.GameServiceClient.prototype.play =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/botfly.GameService/Play',
      request,
      metadata || {},
      methodDescriptor_GameService_Play,
      callback);
};


/**
 * @param {!proto.botfly.GameDetails} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.botfly.MatchResult>}
 *     Promise that resolves to the response
 */
proto.botfly.GameServicePromiseClient.prototype.play =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/botfly.GameService/Play',
      request,
      metadata || {},
      methodDescriptor_GameService_Play);
};


module.exports = proto.botfly;

