"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.methodsToAddFromFirestore = exports.defaultConfig = exports.actionTypes = exports.actionsPrefix = void 0;
var actionsPrefix = '@@reduxFirestore';
exports.actionsPrefix = actionsPrefix;
var actionTypes = {
  START: "".concat(actionsPrefix, "/START"),
  ERROR: "".concat(actionsPrefix, "/ERROR"),
  CLEAR_DATA: "".concat(actionsPrefix, "/CLEAR_DATA"),
  CLEAR_ERROR: "".concat(actionsPrefix, "/CLEAR_ERROR"),
  CLEAR_ERRORS: "".concat(actionsPrefix, "/CLEAR_ERRORS"),
  SET_LISTENER: "".concat(actionsPrefix, "/SET_LISTENER"),
  UNSET_LISTENER: "".concat(actionsPrefix, "/UNSET_LISTENER"),
  GET_REQUEST: "".concat(actionsPrefix, "/GET_REQUEST"),
  GET_SUCCESS: "".concat(actionsPrefix, "/GET_SUCCESS"),
  GET_FAILURE: "".concat(actionsPrefix, "/GET_FAILURE"),
  SET_REQUEST: "".concat(actionsPrefix, "/SET_REQUEST"),
  SET_SUCCESS: "".concat(actionsPrefix, "/SET_SUCCESS"),
  SET_FAILURE: "".concat(actionsPrefix, "/SET_FAILURE"),
  ADD_REQUEST: "".concat(actionsPrefix, "/ADD_REQUEST"),
  ADD_SUCCESS: "".concat(actionsPrefix, "/ADD_SUCCESS"),
  ADD_FAILURE: "".concat(actionsPrefix, "/ADD_FAILURE"),
  UPDATE_REQUEST: "".concat(actionsPrefix, "/UPDATE_REQUEST"),
  UPDATE_SUCCESS: "".concat(actionsPrefix, "/UPDATE_SUCCESS"),
  UPDATE_FAILURE: "".concat(actionsPrefix, "/UPDATE_FAILURE"),
  DELETE_REQUEST: "".concat(actionsPrefix, "/DELETE_REQUEST"),
  DELETE_SUCCESS: "".concat(actionsPrefix, "/DELETE_SUCCESS"),
  DELETE_FAILURE: "".concat(actionsPrefix, "/DELETE_FAILURE"),
  ATTACH_LISTENER: "".concat(actionsPrefix, "/ATTACH_LISTENER"),
  LISTENER_RESPONSE: "".concat(actionsPrefix, "/LISTENER_RESPONSE"),
  LISTENER_ERROR: "".concat(actionsPrefix, "/LISTENER_ERROR"),
  ON_SNAPSHOT_REQUEST: "".concat(actionsPrefix, "/ON_SNAPSHOT_REQUEST"),
  ON_SNAPSHOT_SUCCESS: "".concat(actionsPrefix, "/ON_SNAPSHOT_SUCCESS"),
  ON_SNAPSHOT_FAILURE: "".concat(actionsPrefix, "/ON_SNAPSHOT_FAILURE"),
  DOCUMENT_ADDED: "".concat(actionsPrefix, "/DOCUMENT_ADDED"),
  DOCUMENT_MODIFIED: "".concat(actionsPrefix, "/DOCUMENT_MODIFIED"),
  DOCUMENT_REMOVED: "".concat(actionsPrefix, "/DOCUMENT_REMOVED"),
  TRANSACTION_START: "".concat(actionsPrefix, "/TRANSACTION_START"),
  TRANSACTION_SUCCESS: "".concat(actionsPrefix, "/TRANSACTION_SUCCESS"),
  TRANSACTION_FAILURE: "".concat(actionsPrefix, "/TRANSACTION_FAILURE")
};
exports.actionTypes = actionTypes;
var defaultConfig = {
  logListenerError: true,
  enhancerNamespace: 'firestore',
  helpersNamespace: null,
  allowMultipleListeners: false,
  preserveOnDelete: null,
  preserveOnListenerError: null,
  onAttemptCollectionDelete: null,
  mergeOrdered: true,
  mergeOrderedDocUpdates: true,
  mergeOrderedCollectionUpdates: true
};
exports.defaultConfig = defaultConfig;
var methodsToAddFromFirestore = ['collection', 'collectionGroup', 'configureClient', 'doc', 'batch', 'disableNetwork', 'enableNetwork', 'enablePersistence', 'ensureClientConfigured', 'setLogLevel', 'settings'];
exports.methodsToAddFromFirestore = methodsToAddFromFirestore;
var _default = {
  actionsPrefix: actionsPrefix,
  actionTypes: actionTypes,
  defaultConfig: defaultConfig
};
exports.default = _default;