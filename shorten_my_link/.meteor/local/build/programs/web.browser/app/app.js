var require = meteorInstall({"client":{"template.main.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/template.main.js                                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.body.addContent((function() {                                                                                 // 2
  var view = this;                                                                                                     // 3
  return HTML.Raw('<div class="render-target"></div>');                                                                // 4
}));                                                                                                                   // 5
Meteor.startup(Template.body.renderToDocument);                                                                        // 6
                                                                                                                       // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"components":{"header.js":["react",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/header.js                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.__esModule = true;                                                                                             //
                                                                                                                       //
var _react = require("react");                                                                                         // 1
                                                                                                                       //
var _react2 = _interopRequireDefault(_react);                                                                          //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                      //
                                                                                                                       //
var Header = function Header() {                                                                                       // 3
  return _react2["default"].createElement(                                                                             // 4
    "nav",                                                                                                             //
    { className: "nav navbar-default" },                                                                               //
    _react2["default"].createElement(                                                                                  //
      "div",                                                                                                           //
      { className: "navbar-header" },                                                                                  //
      _react2["default"].createElement(                                                                                //
        "a",                                                                                                           //
        { className: "navbar-brand" },                                                                                 //
        "ShortenMyLink"                                                                                                //
      )                                                                                                                //
    )                                                                                                                  //
  );                                                                                                                   //
};                                                                                                                     //
                                                                                                                       //
exports["default"] = Header;                                                                                           //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"link_create.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/link_create.js                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.__esModule = true;                                                                                             //
                                                                                                                       //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                                //
                                                                                                                       //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                       //
                                                                                                                       //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                          //
                                                                                                                       //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                 //
                                                                                                                       //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                            //
                                                                                                                       //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                   //
                                                                                                                       //
var _react = require('react');                                                                                         // 1
                                                                                                                       //
var _react2 = _interopRequireDefault(_react);                                                                          //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                      //
                                                                                                                       //
var LinkCreate = function (_Component) {                                                                               //
  (0, _inherits3['default'])(LinkCreate, _Component);                                                                  //
                                                                                                                       //
  function LinkCreate(props) {                                                                                         // 4
    (0, _classCallCheck3['default'])(this, LinkCreate);                                                                //
                                                                                                                       //
    var _this = (0, _possibleConstructorReturn3['default'])(this, _Component.call(this, props));                       //
                                                                                                                       //
    _this.state = { error: '' };                                                                                       // 7
    return _this;                                                                                                      //
  }                                                                                                                    //
                                                                                                                       //
  LinkCreate.prototype.handleSubmit = function () {                                                                    // 3
    function handleSubmit(event) {                                                                                     //
      var _this2 = this;                                                                                               //
                                                                                                                       //
      event.preventDefault();                                                                                          // 11
                                                                                                                       //
      Meteor.call('links.insert', this.refs.link.value, function (error) {                                             // 13
        if (error) {                                                                                                   // 14
          _this2.setState({ error: 'Enter a valid URL' });                                                             // 15
        } else {                                                                                                       //
          _this2.setState({ error: '' });                                                                              // 17
          _this2.refs.link.value = '';                                                                                 // 18
        }                                                                                                              //
      });                                                                                                              //
    }                                                                                                                  //
                                                                                                                       //
    return handleSubmit;                                                                                               //
  }();                                                                                                                 //
                                                                                                                       //
  LinkCreate.prototype.render = function () {                                                                          // 3
    function render() {                                                                                                //
      return _react2['default'].createElement(                                                                         // 24
        'form',                                                                                                        //
        { onSubmit: this.handleSubmit.bind(this) },                                                                    //
        _react2['default'].createElement(                                                                              //
          'div',                                                                                                       //
          { className: 'form-group' },                                                                                 //
          _react2['default'].createElement(                                                                            //
            'label',                                                                                                   //
            null,                                                                                                      //
            'Link to shorten'                                                                                          //
          ),                                                                                                           //
          _react2['default'].createElement('input', { ref: 'link', className: 'form-control' })                        //
        ),                                                                                                             //
        _react2['default'].createElement(                                                                              //
          'div',                                                                                                       //
          { className: 'text-danger' },                                                                                //
          this.state.error                                                                                             //
        ),                                                                                                             //
        _react2['default'].createElement(                                                                              //
          'button',                                                                                                    //
          { className: 'btn btn-primary' },                                                                            //
          'Shorten!'                                                                                                   //
        )                                                                                                              //
      );                                                                                                               //
    }                                                                                                                  //
                                                                                                                       //
    return render;                                                                                                     //
  }();                                                                                                                 //
                                                                                                                       //
  return LinkCreate;                                                                                                   //
}(_react.Component);                                                                                                   //
                                                                                                                       //
exports['default'] = LinkCreate;                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"link_list.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/react-meteor-data","../../imports/collections/links",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/link_list.js                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.__esModule = true;                                                                                             //
                                                                                                                       //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                                //
                                                                                                                       //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                       //
                                                                                                                       //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                          //
                                                                                                                       //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                 //
                                                                                                                       //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                            //
                                                                                                                       //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                   //
                                                                                                                       //
var _react = require('react');                                                                                         // 1
                                                                                                                       //
var _react2 = _interopRequireDefault(_react);                                                                          //
                                                                                                                       //
var _reactMeteorData = require('meteor/react-meteor-data');                                                            // 2
                                                                                                                       //
var _links = require('../../imports/collections/links');                                                               // 3
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                      //
                                                                                                                       //
var LinkList = function (_Component) {                                                                                 //
  (0, _inherits3['default'])(LinkList, _Component);                                                                    //
                                                                                                                       //
  function LinkList() {                                                                                                //
    (0, _classCallCheck3['default'])(this, LinkList);                                                                  //
    return (0, _possibleConstructorReturn3['default'])(this, _Component.apply(this, arguments));                       //
  }                                                                                                                    //
                                                                                                                       //
  LinkList.prototype.renderRows = function () {                                                                        //
    function renderRows() {                                                                                            //
      return this.props.links.map(function (link) {                                                                    // 7
        var url = link.url;                                                                                            //
        var clicks = link.clicks;                                                                                      //
        var token = link.token;                                                                                        //
                                                                                                                       //
        var shortLink = 'http://localhost:3000/' + token;                                                              // 9
                                                                                                                       //
        return _react2['default'].createElement(                                                                       // 11
          'tr',                                                                                                        //
          { key: token },                                                                                              //
          _react2['default'].createElement(                                                                            //
            'td',                                                                                                      //
            null,                                                                                                      //
            url                                                                                                        //
          ),                                                                                                           //
          _react2['default'].createElement(                                                                            //
            'td',                                                                                                      //
            null,                                                                                                      //
            _react2['default'].createElement(                                                                          //
              'a',                                                                                                     //
              { href: shortLink },                                                                                     //
              shortLink                                                                                                //
            )                                                                                                          //
          ),                                                                                                           //
          _react2['default'].createElement(                                                                            //
            'td',                                                                                                      //
            null,                                                                                                      //
            clicks                                                                                                     //
          )                                                                                                            //
        );                                                                                                             //
      });                                                                                                              //
    }                                                                                                                  //
                                                                                                                       //
    return renderRows;                                                                                                 //
  }();                                                                                                                 //
                                                                                                                       //
  LinkList.prototype.render = function () {                                                                            // 5
    function render() {                                                                                                //
      return _react2['default'].createElement(                                                                         // 26
        'table',                                                                                                       //
        { className: 'table' },                                                                                        //
        _react2['default'].createElement(                                                                              //
          'thead',                                                                                                     //
          null,                                                                                                        //
          _react2['default'].createElement(                                                                            //
            'tr',                                                                                                      //
            null,                                                                                                      //
            _react2['default'].createElement(                                                                          //
              'th',                                                                                                    //
              null,                                                                                                    //
              'URL'                                                                                                    //
            ),                                                                                                         //
            _react2['default'].createElement(                                                                          //
              'th',                                                                                                    //
              null,                                                                                                    //
              'Address'                                                                                                //
            ),                                                                                                         //
            _react2['default'].createElement(                                                                          //
              'th',                                                                                                    //
              null,                                                                                                    //
              'Clicks'                                                                                                 //
            )                                                                                                          //
          )                                                                                                            //
        ),                                                                                                             //
        _react2['default'].createElement(                                                                              //
          'tbody',                                                                                                     //
          null,                                                                                                        //
          this.renderRows()                                                                                            //
        )                                                                                                              //
      );                                                                                                               //
    }                                                                                                                  //
                                                                                                                       //
    return render;                                                                                                     //
  }();                                                                                                                 //
                                                                                                                       //
  return LinkList;                                                                                                     //
}(_react.Component);                                                                                                   //
                                                                                                                       //
exports['default'] = (0, _reactMeteorData.createContainer)(function () {                                               //
  Meteor.subscribe('links');                                                                                           // 44
                                                                                                                       //
  return { links: _links.Links.find({}).fetch() };                                                                     // 46
}, LinkList);                                                                                                          //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"main.js":["react","react-dom","./components/header","./components/link_create","../imports/collections/links","./components/link_list",function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/main.js                                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _react = require('react');                                                                                         // 1
                                                                                                                       //
var _react2 = _interopRequireDefault(_react);                                                                          //
                                                                                                                       //
var _reactDom = require('react-dom');                                                                                  // 2
                                                                                                                       //
var _reactDom2 = _interopRequireDefault(_reactDom);                                                                    //
                                                                                                                       //
var _header = require('./components/header');                                                                          // 4
                                                                                                                       //
var _header2 = _interopRequireDefault(_header);                                                                        //
                                                                                                                       //
var _link_create = require('./components/link_create');                                                                // 5
                                                                                                                       //
var _link_create2 = _interopRequireDefault(_link_create);                                                              //
                                                                                                                       //
var _links = require('../imports/collections/links');                                                                  // 6
                                                                                                                       //
var _link_list = require('./components/link_list');                                                                    // 7
                                                                                                                       //
var _link_list2 = _interopRequireDefault(_link_list);                                                                  //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                      //
                                                                                                                       //
var App = function App() {                                                                                             // 9
  return _react2['default'].createElement(                                                                             // 10
    'div',                                                                                                             //
    null,                                                                                                              //
    _react2['default'].createElement(_header2['default'], null),                                                       //
    _react2['default'].createElement(_link_create2['default'], null),                                                  //
    _react2['default'].createElement(_link_list2['default'], null)                                                     //
  );                                                                                                                   //
};                                                                                                                     //
                                                                                                                       //
Meteor.startup(function () {                                                                                           // 19
  _reactDom2['default'].render(_react2['default'].createElement(App, null), document.querySelector('.render-target'));
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"imports":{"collections":{"links.js":["meteor/mongo","valid-url","meteor/check",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/collections/links.js                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.__esModule = true;                                                                                             //
exports.Links = undefined;                                                                                             //
                                                                                                                       //
var _mongo = require('meteor/mongo');                                                                                  // 1
                                                                                                                       //
var _validUrl = require('valid-url');                                                                                  // 2
                                                                                                                       //
var _validUrl2 = _interopRequireDefault(_validUrl);                                                                    //
                                                                                                                       //
var _check = require('meteor/check');                                                                                  // 3
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                      //
                                                                                                                       //
Meteor.methods({                                                                                                       // 5
  'links.insert': function () {                                                                                        // 6
    function linksInsert(url) {                                                                                        // 6
      (0, _check.check)(url, _check.Match.Where(function (url) {                                                       // 7
        return _validUrl2['default'].isUri(url);                                                                       //
      }));                                                                                                             //
                                                                                                                       //
      // We're ready to save the url                                                                                   //
      var token = Math.random().toString(36).slice(-5);                                                                // 6
      Links.insert({ url: url, token: token, clicks: 0 });                                                             // 11
    }                                                                                                                  //
                                                                                                                       //
    return linksInsert;                                                                                                //
  }()                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
var Links = exports.Links = new _mongo.Mongo.Collection('links');                                                      // 15
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}}},{"extensions":[".js",".json",".html"]});
require("./client/template.main.js");
require("./client/components/header.js");
require("./client/components/link_create.js");
require("./client/components/link_list.js");
require("./client/main.js");