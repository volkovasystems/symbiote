"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "symbiote",
              			"path": "symbiote/symbiote.js",
              			"file": "symbiote.js",
              			"module": "symbiote",
              			"author": "Richeve S. Bebedor",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
              			],
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/symbiote.git",
              			"test": "symbiote-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              
              		Attach child initialization to parent initialization.
              
              	@end-module-documentation
              
              	@include:
              		{
              			"burne": "burne",
              			"budge": "budge",
              			"fname": "fname",
              			"leveld": "leveld",
              			"mrkd": "mrkd",
              			"protype": "protype"
              			"raze": "raze",
              			"truly": "truly",
              			"wauker": "wauker",
              			"wichevr": "wichevr",
              			"xtrak": "xtrak"
              		}
              	@end-include
              */var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var burne = require("burne");
var budge = require("budge");
var fname = require("fname");
var leveld = require("leveld");
var mrkd = require("mrkd");
var protype = require("protype");
var raze = require("raze");
var truly = require("truly");
var wauker = require("wauker");
var wichevr = require("wichevr");
var xtrak = require("xtrak");

var SYMBIOSIS = (0, _symbol2.default)("symbiosis");
var BLUEPRINT = (0, _symbol2.default)("blueprint");
var INITIALIZE = (0, _for2.default)("initialize");

var symbiote = function symbiote(child, parent) {
	/*;
                                                 	@meta-configuration:
                                                 		{
                                                 			"child:required": "function",
                                                 			"parent:required": [
                                                 				"function",
                                                 				"string",
                                                 				Array,
                                                 				"..."
                                                 			]
                                                 		}
                                                 	@end-meta-configuration
                                                 */

	if (!protype(child, FUNCTION)) {
		throw new Error("invalid child");
	}

	var tree = wauker(child);

	parent = leveld(budge(arguments)).
	filter(function (parent) {return protype(parent, FUNCTION, STRING);}).
	map(function (parent) {
		if (protype(parent, FUNCTION)) {
			return parent;

		} else {
			return xtrak(tree, parent).pop();
		}
	}).
	filter(truly);

	/*;
                	@note:
                		This will collect all non-symbiosis initialize method.
                	@end-note
                */
	var initializer = [child].concat(parent).
	map(function (blueprint) {
		var initialize = wichevr(blueprint[INITIALIZE],
		blueprint.prototype.initialize,
		blueprint.prototype.constructor);

		if (!mrkd(SYMBIOSIS, initialize, true)) {
			//: @note: Cache the initialize method.
			blueprint[INITIALIZE] = initialize;

			//: @note: Mark the initialize method what class it belongs.
			initialize[BLUEPRINT] = fname(blueprint);

			return initialize;
		}
	}).
	filter(truly).
	reverse();

	child.prototype.initialize = function initialize() {var _this = this;
		var parameter = raze(arguments);

		return initializer.reduce(function (result, initialize) {
			try {
				return initialize.apply(_this, parameter);

			} catch (error) {
				throw new Error("failed initialize, " + initialize[BLUEPRINT] + ", " + error.stack);
			}
		}, this);
	};

	burne(SYMBIOSIS, child.prototype.initialize);

	return child;
};

module.exports = symbiote;

//# sourceMappingURL=symbiote.support.js.map