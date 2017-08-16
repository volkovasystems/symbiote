"use strict";var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var assert = require("assert");
var symbiote = require("./symbiote.js");

var cache = [];var

ClassC = function () {function ClassC() {(0, _classCallCheck3.default)(this, ClassC);}(0, _createClass3.default)(ClassC, [{ key: "initialize", value: function initialize()
		{
			cache.push("classC");

			(this.data = this.data || []).push("C");

			return "classC";
		} }]);return ClassC;}();var


ClassB = function (_ClassC) {(0, _inherits3.default)(ClassB, _ClassC);
	function ClassB() {(0, _classCallCheck3.default)(this, ClassB);return (0, _possibleConstructorReturn3.default)(this, (ClassB.__proto__ || (0, _getPrototypeOf2.default)(ClassB)).call(this));}(0, _createClass3.default)(ClassB, [{ key: "initialize", value: function initialize()
		{
			cache.push("classB");

			(this.data = this.data || []).push("B");

			return "classB";
		} }]);return ClassB;}(ClassC);var


ClassA = function (_ClassB) {(0, _inherits3.default)(ClassA, _ClassB);
	function ClassA() {(0, _classCallCheck3.default)(this, ClassA);return (0, _possibleConstructorReturn3.default)(this, (ClassA.__proto__ || (0, _getPrototypeOf2.default)(ClassA)).call(this));}(0, _createClass3.default)(ClassA, [{ key: "initialize", value: function initialize()
		{
			cache.push("classA");

			(this.data = this.data || []).push("A");

			return "classA";
		} }]);return ClassA;}(ClassB);


var classA = symbiote(ClassA, ClassB, ClassC);

assert.equal(new classA().initialize(), "classA", "should be equal to 'classA'");

assert.deepEqual(cache, ["classC", "classB", "classA"], "should be equal to [ 'classC', 'classB', 'classA' ]");

var A = symbiote(ClassA);

assert.equal(new A().initialize(), "classA", "should be equal to 'classA'");

var a = new A();
a.initialize();
assert.deepEqual(a.data, ["C", "B", "A"], "should be equal to [ 'C', 'B', 'A' ]");

console.log("ok");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwic3ltYmlvdGUiLCJjYWNoZSIsIkNsYXNzQyIsInB1c2giLCJkYXRhIiwiQ2xhc3NCIiwiQ2xhc3NBIiwiY2xhc3NBIiwiZXF1YWwiLCJpbml0aWFsaXplIiwiZGVlcEVxdWFsIiwiQSIsImEiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiO0FBQ0EsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNQyxXQUFXRCxRQUFTLGVBQVQsQ0FBakI7O0FBRUEsSUFBSUUsUUFBUSxFQUFaLEM7O0FBRU1DLE07QUFDUTtBQUNaRCxTQUFNRSxJQUFOLENBQVksUUFBWjs7QUFFQSxJQUFFLEtBQUtDLElBQUwsR0FBWSxLQUFLQSxJQUFMLElBQWEsRUFBM0IsRUFBaUNELElBQWpDLENBQXVDLEdBQXZDOztBQUVBLFVBQU8sUUFBUDtBQUNBLEc7OztBQUdJRSxNO0FBQ0wsbUJBQWMsMktBQWEsQztBQUNkO0FBQ1pKLFNBQU1FLElBQU4sQ0FBWSxRQUFaOztBQUVBLElBQUUsS0FBS0MsSUFBTCxHQUFZLEtBQUtBLElBQUwsSUFBYSxFQUEzQixFQUFpQ0QsSUFBakMsQ0FBdUMsR0FBdkM7O0FBRUEsVUFBTyxRQUFQO0FBQ0EsRyxxQkFSbUJELE07OztBQVdmSSxNO0FBQ0wsbUJBQWMsMktBQWEsQztBQUNkO0FBQ1pMLFNBQU1FLElBQU4sQ0FBWSxRQUFaOztBQUVBLElBQUUsS0FBS0MsSUFBTCxHQUFZLEtBQUtBLElBQUwsSUFBYSxFQUEzQixFQUFpQ0QsSUFBakMsQ0FBdUMsR0FBdkM7O0FBRUEsVUFBTyxRQUFQO0FBQ0EsRyxxQkFSbUJFLE07OztBQVdyQixJQUFJRSxTQUFTUCxTQUFVTSxNQUFWLEVBQWtCRCxNQUFsQixFQUEwQkgsTUFBMUIsQ0FBYjs7QUFFQUosT0FBT1UsS0FBUCxDQUFnQixJQUFJRCxNQUFKLEVBQUYsQ0FBa0JFLFVBQWxCLEVBQWQsRUFBK0MsUUFBL0MsRUFBeUQsNkJBQXpEOztBQUVBWCxPQUFPWSxTQUFQLENBQWtCVCxLQUFsQixFQUF5QixDQUFFLFFBQUYsRUFBWSxRQUFaLEVBQXNCLFFBQXRCLENBQXpCLEVBQTJELHFEQUEzRDs7QUFFQSxJQUFJVSxJQUFJWCxTQUFVTSxNQUFWLENBQVI7O0FBRUFSLE9BQU9VLEtBQVAsQ0FBZ0IsSUFBSUcsQ0FBSixFQUFGLENBQWFGLFVBQWIsRUFBZCxFQUEwQyxRQUExQyxFQUFvRCw2QkFBcEQ7O0FBRUEsSUFBSUcsSUFBSSxJQUFJRCxDQUFKLEVBQVI7QUFDQUMsRUFBRUgsVUFBRjtBQUNBWCxPQUFPWSxTQUFQLENBQWtCRSxFQUFFUixJQUFwQixFQUEwQixDQUFFLEdBQUYsRUFBTyxHQUFQLEVBQVksR0FBWixDQUExQixFQUE2QyxzQ0FBN0M7O0FBRUFTLFFBQVFDLEdBQVIsQ0FBYSxJQUFiIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcImFzc2VydFwiICk7XHJcbmNvbnN0IHN5bWJpb3RlID0gcmVxdWlyZSggXCIuL3N5bWJpb3RlLmpzXCIgKTtcclxuXHJcbmxldCBjYWNoZSA9IFsgXTtcclxuXHJcbmNsYXNzIENsYXNzQ3tcclxuXHRpbml0aWFsaXplKCApe1xyXG5cdFx0Y2FjaGUucHVzaCggXCJjbGFzc0NcIiApO1xyXG5cclxuXHRcdCggdGhpcy5kYXRhID0gdGhpcy5kYXRhIHx8IFsgXSApLnB1c2goIFwiQ1wiICk7XHJcblxyXG5cdFx0cmV0dXJuIFwiY2xhc3NDXCI7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBDbGFzc0IgZXh0ZW5kcyBDbGFzc0Mge1xyXG5cdGNvbnN0cnVjdG9yKCApeyBzdXBlciggKTsgfVxyXG5cdGluaXRpYWxpemUoICl7XHJcblx0XHRjYWNoZS5wdXNoKCBcImNsYXNzQlwiICk7XHJcblxyXG5cdFx0KCB0aGlzLmRhdGEgPSB0aGlzLmRhdGEgfHwgWyBdICkucHVzaCggXCJCXCIgKVxyXG5cclxuXHRcdHJldHVybiBcImNsYXNzQlwiO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgQ2xhc3NBIGV4dGVuZHMgQ2xhc3NCIHtcclxuXHRjb25zdHJ1Y3RvciggKXsgc3VwZXIoICk7IH1cclxuXHRpbml0aWFsaXplKCApe1xyXG5cdFx0Y2FjaGUucHVzaCggXCJjbGFzc0FcIiApO1xyXG5cclxuXHRcdCggdGhpcy5kYXRhID0gdGhpcy5kYXRhIHx8IFsgXSApLnB1c2goIFwiQVwiIClcclxuXHJcblx0XHRyZXR1cm4gXCJjbGFzc0FcIjtcclxuXHR9XHJcbn1cclxuXHJcbmxldCBjbGFzc0EgPSBzeW1iaW90ZSggQ2xhc3NBLCBDbGFzc0IsIENsYXNzQyApO1xyXG5cclxuYXNzZXJ0LmVxdWFsKCAoIG5ldyBjbGFzc0EoICkgKS5pbml0aWFsaXplKCApLCBcImNsYXNzQVwiLCBcInNob3VsZCBiZSBlcXVhbCB0byAnY2xhc3NBJ1wiICk7XHJcblxyXG5hc3NlcnQuZGVlcEVxdWFsKCBjYWNoZSwgWyBcImNsYXNzQ1wiLCBcImNsYXNzQlwiLCBcImNsYXNzQVwiIF0sIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgJ2NsYXNzQycsICdjbGFzc0InLCAnY2xhc3NBJyBdXCIgKTtcclxuXHJcbmxldCBBID0gc3ltYmlvdGUoIENsYXNzQSApO1xyXG5cclxuYXNzZXJ0LmVxdWFsKCAoIG5ldyBBKCApICkuaW5pdGlhbGl6ZSggKSwgXCJjbGFzc0FcIiwgXCJzaG91bGQgYmUgZXF1YWwgdG8gJ2NsYXNzQSdcIiApO1xyXG5cclxubGV0IGEgPSBuZXcgQSggKTtcclxuYS5pbml0aWFsaXplKCApO1xyXG5hc3NlcnQuZGVlcEVxdWFsKCBhLmRhdGEsIFsgXCJDXCIsIFwiQlwiLCBcIkFcIiBdLCBcInNob3VsZCBiZSBlcXVhbCB0byBbICdDJywgJ0InLCAnQScgXVwiICk7XHJcblxyXG5jb25zb2xlLmxvZyggXCJva1wiICk7XHJcbiJdfQ==
//# sourceMappingURL=test.support.js.map
