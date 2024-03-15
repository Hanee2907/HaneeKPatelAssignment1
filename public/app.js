"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);
  function App() {
    _classCallCheck(this, App);
    return _callSuper(this, App, arguments);
  }
  _createClass(App, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EmployeeDirectory, null));
    }
  }]);
  return App;
}(React.Component);
var EmployeeSearch = /*#__PURE__*/function (_React$Component2) {
  _inherits(EmployeeSearch, _React$Component2);
  function EmployeeSearch(props) {
    var _this;
    _classCallCheck(this, EmployeeSearch);
    _this = _callSuper(this, EmployeeSearch, [props]);
    _defineProperty(_assertThisInitialized(_this), "handleInputChange", function (e) {
      var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
      var parsedValue = value;
      if (name === 'Age') {
        parsedValue = isNaN(value) ? '' : parseInt(value, 10);
      }
      _this.setState(function (prevState) {
        return {
          newEmployee: _objectSpread(_objectSpread({}, prevState.newEmployee), {}, _defineProperty({}, name, parsedValue))
        };
      });
    });
    _defineProperty(_assertThisInitialized(_this), "handleSearch", function () {
      var onSearch = _this.props.onSearch;
      var searchParams = _this.state.searchParams;
      onSearch(searchParams);
    });
    _this.state = {
      searchParams: {
        Age: "",
        Department: "",
        jobTitle: ""
      }
    };
    return _this;
  }
  _createClass(EmployeeSearch, [{
    key: "render",
    value: function render() {
      var searchParams = this.state.searchParams;
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Search Employees"), /*#__PURE__*/React.createElement("label", null, "Age:", /*#__PURE__*/React.createElement("input", {
        type: "number",
        name: "Age",
        value: searchParams.Age,
        onChange: this.handleInputChange
      })), /*#__PURE__*/React.createElement("label", null, "Department:", /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "Department",
        value: searchParams.Department,
        onChange: this.handleInputChange
      })), /*#__PURE__*/React.createElement("label", null, "Job Title:", /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "jobTitle",
        value: searchParams.jobTitle,
        onChange: this.handleInputChange
      })), /*#__PURE__*/React.createElement("button", {
        onClick: this.handleSearch
      }, "Search"));
    }
  }]);
  return EmployeeSearch;
}(React.Component);
var EmployeeCreate = /*#__PURE__*/function (_React$Component3) {
  _inherits(EmployeeCreate, _React$Component3);
  function EmployeeCreate(props) {
    var _this2;
    _classCallCheck(this, EmployeeCreate);
    _this2 = _callSuper(this, EmployeeCreate, [props]);
    _defineProperty(_assertThisInitialized(_this2), "handleInputChange", function (e) {
      var _e$target2 = e.target,
        name = _e$target2.name,
        value = _e$target2.value;
      var parsedValue = value;
      if (name === 'Age') {
        parsedValue = parseInt(value, 10) || ''; // Ensure it's a valid integer or an empty string
      }
      _this2.setState(function (prevState) {
        return {
          newEmployee: _objectSpread(_objectSpread({}, prevState.newEmployee), {}, _defineProperty({}, name, parsedValue))
        };
      });
    });
    _defineProperty(_assertThisInitialized(_this2), "handleCreate", function () {
      var onAdd = _this2.props.onAdd;
      var newEmployee = _this2.state.newEmployee;

      // Validate input before adding
      var errors = _this2.validate(newEmployee);
      if (Object.keys(errors).length === 0) {
        onAdd(newEmployee);
        _this2.setState({
          newEmployee: {
            FirstName: '',
            LastName: '',
            Age: '',
            DateOfJoining: '',
            Title: '',
            Department: '',
            EmployeeType: 'Full Time'
          },
          errors: {}
        });
      } else {
        _this2.setState({
          errors: errors
        });
      }
    });
    _defineProperty(_assertThisInitialized(_this2), "validate", function (employee) {
      var errors = {};
      if (!employee.FirstName.trim()) {
        errors.FirstName = 'First Name is required';
      }
      if (!employee.LastName.trim()) {
        errors.LastName = 'Last Name is required';
      }
      if (!employee.Age) {
        errors.Age = 'Age is required';
      } else if (isNaN(employee.Age) || employee.Age < 18) {
        errors.Age = 'Age must be a valid number and greater than 18';
      }

      // You can add more validations for other fields if necessary

      return errors;
    });
    _this2.state = {
      newEmployee: {
        FirstName: '',
        LastName: '',
        Age: '',
        DateOfJoining: '',
        Title: '',
        Department: '',
        EmployeeType: 'Full Time'
      },
      errors: {} // For storing validation errors
    };
    return _this2;
  }
  _createClass(EmployeeCreate, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
        newEmployee = _this$state.newEmployee,
        errors = _this$state.errors;
      return /*#__PURE__*/React.createElement("div", {
        style: {
          margin: '20px'
        }
      }, /*#__PURE__*/React.createElement("h2", null, "Create New Employee"), /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("label", null, "First Name:", /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "FirstName",
        value: newEmployee.FirstName,
        onChange: this.handleInputChange
      }), errors.FirstName && /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'red'
        }
      }, errors.FirstName)), /*#__PURE__*/React.createElement("label", null, "Last Name:", /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "LastName",
        value: newEmployee.LastName,
        onChange: this.handleInputChange
      }), errors.LastName && /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'red'
        }
      }, errors.LastName)), /*#__PURE__*/React.createElement("label", null, "Age:", /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "Age",
        value: newEmployee.Age,
        onChange: this.handleInputChange
      }), errors.Age && /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'red'
        }
      }, errors.Age)), /*#__PURE__*/React.createElement("label", null, "Date of Joining:", /*#__PURE__*/React.createElement("input", {
        type: "date",
        name: "DateOfJoining",
        value: newEmployee.DateOfJoining,
        onChange: this.handleInputChange
      })), /*#__PURE__*/React.createElement("label", null, "Title:", /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "Title",
        value: newEmployee.Title,
        onChange: this.handleInputChange
      })), /*#__PURE__*/React.createElement("label", null, "Department:", /*#__PURE__*/React.createElement("select", {
        name: "Department",
        value: newEmployee.Department,
        onChange: this.handleInputChange
      }, /*#__PURE__*/React.createElement("option", {
        value: ""
      }, "Select Department"), /*#__PURE__*/React.createElement("option", {
        value: "HR"
      }, "HR"), /*#__PURE__*/React.createElement("option", {
        value: "Finance"
      }, "Finance"), /*#__PURE__*/React.createElement("option", {
        value: "IT"
      }, "IT"))), /*#__PURE__*/React.createElement("label", null, "Employee Type:", /*#__PURE__*/React.createElement("select", {
        name: "EmployeeType",
        value: newEmployee.EmployeeType,
        onChange: this.handleInputChange
      }, /*#__PURE__*/React.createElement("option", {
        value: "Full Time"
      }, "Full Time"), /*#__PURE__*/React.createElement("option", {
        value: "Part Time"
      }, "Part Time"), /*#__PURE__*/React.createElement("option", {
        value: "Contract"
      }, "Contract"))), /*#__PURE__*/React.createElement("button", {
        type: "button",
        onClick: this.handleCreate
      }, "Create")));
    }
  }]);
  return EmployeeCreate;
}(React.Component);
var EmployeeDirectory = /*#__PURE__*/function (_React$Component4) {
  _inherits(EmployeeDirectory, _React$Component4);
  function EmployeeDirectory(props) {
    var _this3;
    _classCallCheck(this, EmployeeDirectory);
    _this3 = _callSuper(this, EmployeeDirectory, [props]);
    _defineProperty(_assertThisInitialized(_this3), "fetchEmployees", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response, result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch("http://localhost:4000/graphql", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                query: "\n            query {\n              getEmployees {\n                id\n                FirstName\n                LastName\n                Age\n                DateOfJoining\n                Title\n                Department  \n                EmployeeType\n                CurrentStatus\n              }\n            }\n          "
              })
            });
          case 3:
            response = _context.sent;
            if (response.ok) {
              _context.next = 6;
              break;
            }
            throw new Error("Error: ".concat(response.statusText));
          case 6:
            _context.next = 8;
            return response.json();
          case 8:
            result = _context.sent;
            console.log(result.data);
            _this3.setState({
              employees: result.data.getEmployees
            });
            _context.next = 16;
            break;
          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            console.error("Error fetching employees:", _context.t0);
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 13]]);
    })));
    _defineProperty(_assertThisInitialized(_this3), "handleAddEmployee", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(newEmployee) {
        var response, result;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return fetch("http://localhost:4000/graphql", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  query: "\n            mutation createEmployee($employeeInput: EmployeeInput!) {\n              createEmployee(employeeInput: $employeeInput) {\n                id\n                FirstName\n                LastName\n                Age\n                DateOfJoining\n                Title\n                Department  \n                EmployeeType\n                CurrentStatus\n              }\n            }\n          ",
                  variables: {
                    employeeInput: newEmployee
                  }
                })
              });
            case 3:
              response = _context2.sent;
              if (response.ok) {
                _context2.next = 7;
                break;
              }
              throw new Error("Error adding employee");
            case 7:
              _context2.next = 9;
              return response.json();
            case 9:
              result = _context2.sent;
              _this3.setState({
                employees: [].concat(_toConsumableArray(_this3.state.employees), [newEmployee])
              });
              _context2.next = 16;
              break;
            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](0);
              console.error("Error adding employee:", _context2.t0);
            case 16:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 13]]);
      }));
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    _this3.state = {
      employees: []
    };
    return _this3;
  }
  _createClass(EmployeeDirectory, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchEmployees();
    }
  }, {
    key: "render",
    value: function render() {
      var employees = this.state.employees;
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Employee Directory"), /*#__PURE__*/React.createElement(EmployeeSearch, null), /*#__PURE__*/React.createElement(EmployeeTable, {
        employees: employees
      }), /*#__PURE__*/React.createElement(EmployeeCreate, {
        onAdd: this.handleAddEmployee
      }));
    }
  }]);
  return EmployeeDirectory;
}(React.Component);
var EmployeeTable = /*#__PURE__*/function (_React$Component5) {
  _inherits(EmployeeTable, _React$Component5);
  function EmployeeTable() {
    _classCallCheck(this, EmployeeTable);
    return _callSuper(this, EmployeeTable, arguments);
  }
  _createClass(EmployeeTable, [{
    key: "render",
    value: function render() {
      var employees = this.props.employees;
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Employee List"), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "First Name"), /*#__PURE__*/React.createElement("th", null, "Last Name"), /*#__PURE__*/React.createElement("th", null, "Age"), /*#__PURE__*/React.createElement("th", null, "Date of Joining"), /*#__PURE__*/React.createElement("th", null, "Title"), /*#__PURE__*/React.createElement("th", null, "Department"), /*#__PURE__*/React.createElement("th", null, "Employee Type"), /*#__PURE__*/React.createElement("th", null, "Current Status"), /*#__PURE__*/React.createElement("th", null, "Action"))), /*#__PURE__*/React.createElement("tbody", null, employees && employees.map(function (employee) {
        return /*#__PURE__*/React.createElement("tr", {
          key: employee.id
        }, /*#__PURE__*/React.createElement("td", null, employee.FirstName), /*#__PURE__*/React.createElement("td", null, employee.LastName), /*#__PURE__*/React.createElement("td", null, employee.Age), /*#__PURE__*/React.createElement("td", null, employee.DateOfJoining), /*#__PURE__*/React.createElement("td", null, employee.Title), /*#__PURE__*/React.createElement("td", null, employee.Department), /*#__PURE__*/React.createElement("td", null, employee.EmployeeType), /*#__PURE__*/React.createElement("td", null, 1), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("button", null, "Edit"), /*#__PURE__*/React.createElement("button", null, "Delete")));
      }))));
    }
  }]);
  return EmployeeTable;
}(React.Component);
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));