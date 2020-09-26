"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dataReducer;

var _setWith2 = _interopRequireDefault(require("lodash/fp/setWith"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _constants = require("../constants");

var _reducers = require("../utils/reducers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLEAR_DATA = _constants.actionTypes.CLEAR_DATA,
    GET_SUCCESS = _constants.actionTypes.GET_SUCCESS,
    LISTENER_RESPONSE = _constants.actionTypes.LISTENER_RESPONSE,
    LISTENER_ERROR = _constants.actionTypes.LISTENER_ERROR,
    DELETE_SUCCESS = _constants.actionTypes.DELETE_SUCCESS,
    DOCUMENT_ADDED = _constants.actionTypes.DOCUMENT_ADDED,
    DOCUMENT_MODIFIED = _constants.actionTypes.DOCUMENT_MODIFIED,
    DOCUMENT_REMOVED = _constants.actionTypes.DOCUMENT_REMOVED;

function dataReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GET_SUCCESS:
    case LISTENER_RESPONSE:
      var meta = action.meta,
          payload = action.payload;

      if (!payload || payload.data === undefined) {
        return state;
      }

      var getDocName = function getDocName(data) {
        return data.subcollections ? getDocName(data.subcollections.slice(-1)[0]) : data.doc;
      };

      var docName = getDocName(meta);
      var data = docName ? (0, _get2.default)(payload.data, docName) : payload.data;
      var previousData = (0, _get2.default)(state, meta.storeAs ? [meta.storeAs] : (0, _reducers.pathFromMeta)(meta));

      if (!previousData || meta.subcollections) {
        return (0, _setWith2.default)(Object, meta.storeAs ? [meta.storeAs] : (0, _reducers.pathFromMeta)(meta), data, state);
      }

      return (0, _setWith2.default)(Object, meta.storeAs ? [meta.storeAs] : (0, _reducers.pathFromMeta)(meta), data, state);

    case DOCUMENT_MODIFIED:
    case DOCUMENT_ADDED:
      return (0, _setWith2.default)(Object, (0, _reducers.pathFromMeta)(action.meta), action.payload.data, state);

    case DOCUMENT_REMOVED:
    case DELETE_SUCCESS:
      var removePath = (0, _reducers.pathFromMeta)(action.meta);
      var cleanedState = (0, _setWith2.default)(Object, removePath, null, state);

      if (action.preserve && action.preserve.data) {
        return (0, _reducers.preserveValuesFromState)(state, action.preserve.data, cleanedState);
      }

      return cleanedState;

    case CLEAR_DATA:
      if (action.preserve && action.preserve.data) {
        return (0, _reducers.preserveValuesFromState)(state, action.preserve.data, {});
      }

      return {};

    case LISTENER_ERROR:
      var nextState = (0, _setWith2.default)(Object, (0, _reducers.pathFromMeta)(action.meta), null, state);

      if (action.preserve && action.preserve.data) {
        return (0, _reducers.preserveValuesFromState)(state, action.preserve.data, nextState);
      }

      var existingState = (0, _get2.default)(state, (0, _reducers.pathFromMeta)(action.meta));

      if (existingState) {
        return state;
      }

      return nextState;

    default:
      return state;
  }
}