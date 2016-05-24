//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var meteorInstall = Package.modules.meteorInstall;
var Buffer = Package.modules.Buffer;
var process = Package.modules.process;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var ReactMeteorData;

var require = meteorInstall({"node_modules":{"meteor":{"react-meteor-data":{"react-meteor-data.jsx":["meteor/tmeasday:check-npm-versions","./createContainer.jsx","./ReactMeteorData.jsx",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/react-meteor-data/react-meteor-data.jsx                                                               //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
exports.__esModule = true;                                                                                        //
exports.ReactMeteorData = exports.createContainer = undefined;                                                    //
                                                                                                                  //
var _tmeasdayCheckNpmVersions = require('meteor/tmeasday:check-npm-versions');                                    // 1
                                                                                                                  //
(0, _tmeasdayCheckNpmVersions.checkNpmVersions)({                                                                 // 2
  react: '15.x',                                                                                                  // 3
  'react-addons-pure-render-mixin': '15.x'                                                                        // 4
}, 'react-meteor-data');                                                                                          //
                                                                                                                  //
var createContainer = require('./createContainer.jsx')['default'];                                                // 7
var ReactMeteorData = require('./ReactMeteorData.jsx')['default'];                                                // 8
                                                                                                                  //
exports.createContainer = createContainer;                                                                        //
exports.ReactMeteorData = ReactMeteorData;                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"ReactMeteorData.jsx":["babel-runtime/helpers/typeof","babel-runtime/helpers/classCallCheck",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/react-meteor-data/ReactMeteorData.jsx                                                                 //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
exports.__esModule = true;                                                                                        //
                                                                                                                  //
var _typeof2 = require("babel-runtime/helpers/typeof");                                                           //
                                                                                                                  //
var _typeof3 = _interopRequireDefault(_typeof2);                                                                  //
                                                                                                                  //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                           //
                                                                                                                  //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                  //
                                                                                                                  //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                 //
                                                                                                                  //
var ReactMeteorData = {                                                                                           // 1
  componentWillMount: function () {                                                                               // 2
    function componentWillMount() {                                                                               //
      this.data = {};                                                                                             // 3
      this._meteorDataManager = new MeteorDataManager(this);                                                      // 4
      var newData = this._meteorDataManager.calculateData();                                                      // 5
      this._meteorDataManager.updateData(newData);                                                                // 6
    }                                                                                                             //
                                                                                                                  //
    return componentWillMount;                                                                                    //
  }(),                                                                                                            //
  componentWillUpdate: function () {                                                                              // 8
    function componentWillUpdate(nextProps, nextState) {                                                          //
      var saveProps = this.props;                                                                                 // 9
      var saveState = this.state;                                                                                 // 10
      var newData = void 0;                                                                                       // 11
      try {                                                                                                       // 12
        // Temporarily assign this.state and this.props,                                                          //
        // so that they are seen by getMeteorData!                                                                //
        // This is a simulation of how the proposed Observe API                                                   //
        // for React will work, which calls observe() after                                                       //
        // componentWillUpdate and after props and state are                                                      //
        // updated, but before render() is called.                                                                //
        // See https://github.com/facebook/react/issues/3398.                                                     //
        this.props = nextProps;                                                                                   // 20
        this.state = nextState;                                                                                   // 21
        newData = this._meteorDataManager.calculateData();                                                        // 22
      } finally {                                                                                                 //
        this.props = saveProps;                                                                                   // 24
        this.state = saveState;                                                                                   // 25
      }                                                                                                           //
                                                                                                                  //
      this._meteorDataManager.updateData(newData);                                                                // 28
    }                                                                                                             //
                                                                                                                  //
    return componentWillUpdate;                                                                                   //
  }(),                                                                                                            //
  componentWillUnmount: function () {                                                                             // 30
    function componentWillUnmount() {                                                                             //
      this._meteorDataManager.dispose();                                                                          // 31
    }                                                                                                             //
                                                                                                                  //
    return componentWillUnmount;                                                                                  //
  }()                                                                                                             //
};                                                                                                                //
                                                                                                                  //
// A class to keep the state and utility methods needed to manage                                                 //
// the Meteor data for a component.                                                                               //
                                                                                                                  //
var MeteorDataManager = function () {                                                                             //
  function MeteorDataManager(component) {                                                                         // 38
    (0, _classCallCheck3["default"])(this, MeteorDataManager);                                                    //
                                                                                                                  //
    this.component = component;                                                                                   // 39
    this.computation = null;                                                                                      // 40
    this.oldData = null;                                                                                          // 41
  }                                                                                                               //
                                                                                                                  //
  MeteorDataManager.prototype.dispose = function () {                                                             // 37
    function dispose() {                                                                                          //
      if (this.computation) {                                                                                     // 45
        this.computation.stop();                                                                                  // 46
        this.computation = null;                                                                                  // 47
      }                                                                                                           //
    }                                                                                                             //
                                                                                                                  //
    return dispose;                                                                                               //
  }();                                                                                                            //
                                                                                                                  //
  MeteorDataManager.prototype.calculateData = function () {                                                       // 37
    function calculateData() {                                                                                    //
      var component = this.component;                                                                             // 52
                                                                                                                  //
      if (!component.getMeteorData) {                                                                             // 54
        return null;                                                                                              // 55
      }                                                                                                           //
                                                                                                                  //
      // When rendering on the server, we don't want to use the Tracker.                                          //
      // We only do the first rendering on the server so we can get the data right away                           //
      if (Meteor.isServer) {                                                                                      // 51
        return component.getMeteorData();                                                                         // 61
      }                                                                                                           //
                                                                                                                  //
      if (this.computation) {                                                                                     // 64
        this.computation.stop();                                                                                  // 65
        this.computation = null;                                                                                  // 66
      }                                                                                                           //
                                                                                                                  //
      var data = void 0;                                                                                          // 69
      // Use Tracker.nonreactive in case we are inside a Tracker Computation.                                     //
      // This can happen if someone calls `ReactDOM.render` inside a Computation.                                 //
      // In that case, we want to opt out of the normal behavior of nested                                        //
      // Computations, where if the outer one is invalidated or stopped,                                          //
      // it stops the inner one.                                                                                  //
      this.computation = Tracker.nonreactive(function () {                                                        // 51
        return Tracker.autorun(function (c) {                                                                     // 76
          if (c.firstRun) {                                                                                       // 77
            var savedSetState = component.setState;                                                               // 78
            try {                                                                                                 // 79
              component.setState = function () {                                                                  // 80
                throw new Error("Can't call `setState` inside `getMeteorData` as this could cause an endless" + " loop. To respond to Meteor data changing, consider making this component" + " a \"wrapper component\" that only fetches data and passes it in as props to" + " a child component. Then you can use `componentWillReceiveProps` in that" + " child component.");
              };                                                                                                  //
                                                                                                                  //
              data = component.getMeteorData();                                                                   // 89
            } finally {                                                                                           //
              component.setState = savedSetState;                                                                 // 91
            }                                                                                                     //
          } else {                                                                                                //
            // Stop this computation instead of using the re-run.                                                 //
            // We use a brand-new autorun for each call to getMeteorData                                          //
            // to capture dependencies on any reactive data sources that                                          //
            // are accessed.  The reason we can't use a single autorun                                            //
            // for the lifetime of the component is that Tracker only                                             //
            // re-runs autoruns at flush time, while we need to be able to                                        //
            // re-call getMeteorData synchronously whenever we want, e.g.                                         //
            // from componentWillUpdate.                                                                          //
            c.stop();                                                                                             // 102
            // Calling forceUpdate() triggers componentWillUpdate which                                           //
            // recalculates getMeteorData() and re-renders the component.                                         //
            component.forceUpdate();                                                                              // 93
          }                                                                                                       //
        });                                                                                                       //
      });                                                                                                         //
                                                                                                                  //
      if (Package.mongo && Package.mongo.Mongo) {                                                                 // 110
        Object.keys(data).forEach(function (key) {                                                                // 111
          if (data[key] instanceof Package.mongo.Mongo.Cursor) {                                                  // 112
            console.warn("Warning: you are returning a Mongo cursor from getMeteorData. This value " + "will not be reactive. You probably want to call `.fetch()` on the cursor " + "before returning it.");
          }                                                                                                       //
        });                                                                                                       //
      }                                                                                                           //
                                                                                                                  //
      return data;                                                                                                // 121
    }                                                                                                             //
                                                                                                                  //
    return calculateData;                                                                                         //
  }();                                                                                                            //
                                                                                                                  //
  MeteorDataManager.prototype.updateData = function () {                                                          // 37
    function updateData(newData) {                                                                                //
      var component = this.component;                                                                             // 125
      var oldData = this.oldData;                                                                                 // 126
                                                                                                                  //
      if (!(newData && (typeof newData === "undefined" ? "undefined" : (0, _typeof3["default"])(newData)) === 'object')) {
        throw new Error("Expected object returned from getMeteorData");                                           // 129
      }                                                                                                           //
      // update componentData in place based on newData                                                           //
      for (var key in meteorBabelHelpers.sanitizeForInObject(newData)) {                                          // 124
        component.data[key] = newData[key];                                                                       // 133
      }                                                                                                           //
      // if there is oldData (which is every time this method is called                                           //
      // except the first), delete keys in newData that aren't in                                                 //
      // oldData.  don't interfere with other keys, in case we are                                                //
      // co-existing with something else that writes to a component's                                             //
      // this.data.                                                                                               //
      if (oldData) {                                                                                              // 124
        for (var _key in meteorBabelHelpers.sanitizeForInObject(oldData)) {                                       // 141
          if (!(_key in newData)) {                                                                               // 142
            delete component.data[_key];                                                                          // 143
          }                                                                                                       //
        }                                                                                                         //
      }                                                                                                           //
      this.oldData = newData;                                                                                     // 147
    }                                                                                                             //
                                                                                                                  //
    return updateData;                                                                                            //
  }();                                                                                                            //
                                                                                                                  //
  return MeteorDataManager;                                                                                       //
}();                                                                                                              //
                                                                                                                  //
exports["default"] = ReactMeteorData;                                                                             //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"createContainer.jsx":["babel-runtime/helpers/extends","react","react-addons-pure-render-mixin","./ReactMeteorData.jsx",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/react-meteor-data/createContainer.jsx                                                                 //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
exports.__esModule = true;                                                                                        //
exports['default'] = undefined;                                                                                   //
                                                                                                                  //
var _extends2 = require('babel-runtime/helpers/extends');                                                         //
                                                                                                                  //
var _extends3 = _interopRequireDefault(_extends2);                                                                //
                                                                                                                  //
var _react = require('react');                                                                                    // 5
                                                                                                                  //
var _react2 = _interopRequireDefault(_react);                                                                     //
                                                                                                                  //
var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');                                      // 6
                                                                                                                  //
var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);                           //
                                                                                                                  //
var _ReactMeteorData = require('./ReactMeteorData.jsx');                                                          // 8
                                                                                                                  //
var _ReactMeteorData2 = _interopRequireDefault(_ReactMeteorData);                                                 //
                                                                                                                  //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                 //
                                                                                                                  //
function createContainer() {                                                                                      // 10
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];                          //
  var Component = arguments[1];                                                                                   //
                                                                                                                  //
  var expandedOptions = options;                                                                                  // 11
  if (typeof options === 'function') {                                                                            // 12
    expandedOptions = {                                                                                           // 13
      getMeteorData: options                                                                                      // 14
    };                                                                                                            //
  }                                                                                                               //
                                                                                                                  //
  var _expandedOptions = expandedOptions;                                                                         //
  var _getMeteorData = _expandedOptions.getMeteorData;                                                            //
  var _expandedOptions$pure = _expandedOptions.pure;                                                              //
  var pure = _expandedOptions$pure === undefined ? true : _expandedOptions$pure;                                  //
                                                                                                                  //
                                                                                                                  //
  var mixins = [_ReactMeteorData2['default']];                                                                    // 23
  if (pure) {                                                                                                     // 24
    mixins.push(_reactAddonsPureRenderMixin2['default']);                                                         // 25
  }                                                                                                               //
                                                                                                                  //
  /* eslint-disable react/prefer-es6-class */                                                                     //
  return _react2['default'].createClass({                                                                         // 10
    displayName: 'MeteorDataContainer',                                                                           // 30
    mixins: mixins,                                                                                               // 31
    getMeteorData: function () {                                                                                  // 32
      function getMeteorData() {                                                                                  //
        return _getMeteorData(this.props);                                                                        // 33
      }                                                                                                           //
                                                                                                                  //
      return getMeteorData;                                                                                       //
    }(),                                                                                                          //
    render: function () {                                                                                         // 35
      function render() {                                                                                         //
        return _react2['default'].createElement(Component, (0, _extends3['default'])({}, this.props, this.data));
      }                                                                                                           //
                                                                                                                  //
      return render;                                                                                              //
    }()                                                                                                           //
  });                                                                                                             //
} /**                                                                                                             //
   * Container helper using react-meteor-data.                                                                    //
   */                                                                                                             //
                                                                                                                  //
exports['default'] = createContainer;                                                                             //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}}}},{"extensions":[".js",".json",".jsx"]});
var exports = require("./node_modules/meteor/react-meteor-data/react-meteor-data.jsx");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['react-meteor-data'] = exports, {
  ReactMeteorData: ReactMeteorData
});

})();
