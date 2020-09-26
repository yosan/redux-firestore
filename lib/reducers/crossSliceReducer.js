"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = crossSliceReducer;

var _get2 = _interopRequireDefault(require("lodash/get"));

var _set2 = _interopRequireDefault(require("lodash/set"));

var _merge2 = _interopRequireDefault(require("lodash/merge"));

var _groupBy2 = _interopRequireDefault(require("lodash/groupBy"));

var _immer = _interopRequireDefault(require("immer"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function crossSliceReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _immer.default)(state, function (draft) {
    switch (action.type) {
      case _constants.actionTypes.DOCUMENT_MODIFIED:
      case _constants.actionTypes.DOCUMENT_ADDED:
      case _constants.actionTypes.DOCUMENT_REMOVED:
      case _constants.actionTypes.LISTENER_RESPONSE:
      case _constants.actionTypes.UNSET_LISTENER:
        var groups = (0, _groupBy2.default)(!!state.queries && Object.values(state.queries) || [], function (c) {
          return c.storeAs || c.collection;
        });
        Object.keys(groups).forEach(function (storeAs) {
          var updated = {};
          groups[storeAs].forEach(function (item) {
            return (0, _merge2.default)(updated, (0, _get2.default)(item, 'data', {}));
          });
          (0, _set2.default)(draft, ['composite', storeAs], updated);
        });
        return draft;

      default:
        return state;
    }
  });
}