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
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
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
              			"arid": "arid",
              			"burne": "burne",
              			"fname": "fname",
              			"leveld": "leveld",
              			"mrkd": "mrkd",
              			"protype": "protype"
              			"raze": "raze",
              			"shft": "shft",
              			"truly": "truly",
              			"wauker": "wauker",
              			"wichevr": "wichevr",
              			"xtrak": "xtrak"
              		}
              	@end-include
              */var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var arid = require("arid");
var burne = require("burne");
var fname = require("fname");
var leveld = require("leveld");
var mrkd = require("mrkd");
var protype = require("protype");
var raze = require("raze");
var shft = require("shft");
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

	if (typeof child != "function") {
		throw new Error("invalid child");
	}

	var tree = wauker(child);

	if (arguments.length > 1) {
		parent = leveld(shft(arguments)).
		filter(function (parent) {return protype(parent, FUNCTION, STRING);}).
		map(function (parent) {
			if (typeof parent == "function") {
				return parent;

			} else {
				return xtrak(tree, parent).pop();
			}
		}).
		filter(truly);

	} else {
		parent = shft(tree);
	}

	/*
   	@note:
   		If there are no given parent then it will get the inheritance
   			tree of the child and construct the initializer using that inheritance tree.
   
   		This is to ensure that we are using symbiosis properly.
   	@end-note
   */
	if (arid(parent)) {
		parent = shft(tree);
	}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN5bWJpb3RlLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiYXJpZCIsInJlcXVpcmUiLCJidXJuZSIsImZuYW1lIiwibGV2ZWxkIiwibXJrZCIsInByb3R5cGUiLCJyYXplIiwic2hmdCIsInRydWx5Iiwid2F1a2VyIiwid2ljaGV2ciIsInh0cmFrIiwiU1lNQklPU0lTIiwiQkxVRVBSSU5UIiwiSU5JVElBTElaRSIsInN5bWJpb3RlIiwiY2hpbGQiLCJwYXJlbnQiLCJFcnJvciIsInRyZWUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJmaWx0ZXIiLCJGVU5DVElPTiIsIlNUUklORyIsIm1hcCIsInBvcCIsImluaXRpYWxpemVyIiwiY29uY2F0IiwiYmx1ZXByaW50IiwiaW5pdGlhbGl6ZSIsInByb3RvdHlwZSIsImNvbnN0cnVjdG9yIiwicmV2ZXJzZSIsInBhcmFtZXRlciIsInJlZHVjZSIsInJlc3VsdCIsImFwcGx5IiwiZXJyb3IiLCJzdGFjayIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUVBLElBQU1BLE9BQU9DLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUMsUUFBUUQsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRSxRQUFRRixRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1HLFNBQVNILFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUksT0FBT0osUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNSyxVQUFVTCxRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNTSxPQUFPTixRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1PLE9BQU9QLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTVEsUUFBUVIsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNUyxTQUFTVCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1VLFVBQVVWLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1XLFFBQVFYLFFBQVMsT0FBVCxDQUFkOztBQUVBLElBQU1ZLFlBQVksc0JBQVEsV0FBUixDQUFsQjtBQUNBLElBQU1DLFlBQVksc0JBQVEsV0FBUixDQUFsQjtBQUNBLElBQU1DLGFBQWEsbUJBQVksWUFBWixDQUFuQjs7QUFFQSxJQUFNQyxXQUFXLFNBQVNBLFFBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCQyxNQUExQixFQUFrQztBQUNsRDs7Ozs7Ozs7Ozs7Ozs7QUFjQSxLQUFJLE9BQU9ELEtBQVAsSUFBZ0IsVUFBcEIsRUFBZ0M7QUFDL0IsUUFBTSxJQUFJRSxLQUFKLENBQVcsZUFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSUMsT0FBT1YsT0FBUU8sS0FBUixDQUFYOztBQUVBLEtBQUlJLFVBQVVDLE1BQVYsR0FBbUIsQ0FBdkIsRUFBMEI7QUFDekJKLFdBQVNkLE9BQVFJLEtBQU1hLFNBQU4sQ0FBUjtBQUNQRSxRQURPLENBQ0MsVUFBRUwsTUFBRixVQUFjWixRQUFTWSxNQUFULEVBQWlCTSxRQUFqQixFQUEyQkMsTUFBM0IsQ0FBZCxFQUREO0FBRVBDLEtBRk8sQ0FFRixVQUFFUixNQUFGLEVBQWM7QUFDbkIsT0FBSSxPQUFPQSxNQUFQLElBQWlCLFVBQXJCLEVBQWlDO0FBQ2hDLFdBQU9BLE1BQVA7O0FBRUEsSUFIRCxNQUdLO0FBQ0osV0FBT04sTUFBT1EsSUFBUCxFQUFhRixNQUFiLEVBQXNCUyxHQUF0QixFQUFQO0FBQ0E7QUFDRCxHQVRPO0FBVVBKLFFBVk8sQ0FVQ2QsS0FWRCxDQUFUOztBQVlBLEVBYkQsTUFhSztBQUNKUyxXQUFTVixLQUFNWSxJQUFOLENBQVQ7QUFDQTs7QUFFRDs7Ozs7Ozs7QUFRQSxLQUFJcEIsS0FBTWtCLE1BQU4sQ0FBSixFQUFvQjtBQUNuQkEsV0FBU1YsS0FBTVksSUFBTixDQUFUO0FBQ0E7O0FBRUQ7Ozs7O0FBS0EsS0FBSVEsY0FBYyxDQUFFWCxLQUFGLEVBQVVZLE1BQVYsQ0FBa0JYLE1BQWxCO0FBQ2hCUSxJQURnQixDQUNYLFVBQUVJLFNBQUYsRUFBaUI7QUFDdEIsTUFBSUMsYUFBYXBCLFFBQVNtQixVQUFXZixVQUFYLENBQVQ7QUFDaEJlLFlBQVVFLFNBQVYsQ0FBb0JELFVBREo7QUFFaEJELFlBQVVFLFNBQVYsQ0FBb0JDLFdBRkosQ0FBakI7O0FBSUEsTUFBSSxDQUFDNUIsS0FBTVEsU0FBTixFQUFpQmtCLFVBQWpCLEVBQTZCLElBQTdCLENBQUwsRUFBMEM7QUFDekM7QUFDQUQsYUFBV2YsVUFBWCxJQUEwQmdCLFVBQTFCOztBQUVBO0FBQ0FBLGNBQVlqQixTQUFaLElBQTBCWCxNQUFPMkIsU0FBUCxDQUExQjs7QUFFQSxVQUFPQyxVQUFQO0FBQ0E7QUFDRCxFQWZnQjtBQWdCaEJSLE9BaEJnQixDQWdCUmQsS0FoQlE7QUFpQmhCeUIsUUFqQmdCLEVBQWxCOztBQW1CQWpCLE9BQU1lLFNBQU4sQ0FBZ0JELFVBQWhCLEdBQTZCLFNBQVNBLFVBQVQsR0FBc0I7QUFDbEQsTUFBSUksWUFBWTVCLEtBQU1jLFNBQU4sQ0FBaEI7O0FBRUEsU0FBT08sWUFBWVEsTUFBWixDQUFvQixVQUFFQyxNQUFGLEVBQVVOLFVBQVYsRUFBMEI7QUFDcEQsT0FBRztBQUNGLFdBQU9BLFdBQVdPLEtBQVgsUUFBd0JILFNBQXhCLENBQVA7O0FBRUEsSUFIRCxDQUdDLE9BQU9JLEtBQVAsRUFBYztBQUNkLFVBQU0sSUFBSXBCLEtBQUoseUJBQWtDWSxXQUFZakIsU0FBWixDQUFsQyxVQUFnRXlCLE1BQU1DLEtBQXRFLENBQU47QUFDQTtBQUNELEdBUE0sRUFPSixJQVBJLENBQVA7QUFRQSxFQVhEOztBQWFBdEMsT0FBT1csU0FBUCxFQUFrQkksTUFBTWUsU0FBTixDQUFnQkQsVUFBbEM7O0FBRUEsUUFBT2QsS0FBUDtBQUNBLENBMUZEOztBQTRGQXdCLE9BQU9DLE9BQVAsR0FBaUIxQixRQUFqQiIsImZpbGUiOiJzeW1iaW90ZS5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAbW9kdWxlLWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC1tb2R1bGUtbGljZW5zZVxyXG5cclxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcInN5bWJpb3RlXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcInN5bWJpb3RlL3N5bWJpb3RlLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcInN5bWJpb3RlLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwic3ltYmlvdGVcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvc3ltYmlvdGUuZ2l0XCIsXHJcblx0XHRcdFwidGVzdFwiOiBcInN5bWJpb3RlLXRlc3QuanNcIixcclxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxyXG5cdFx0fVxyXG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0QXR0YWNoIGNoaWxkIGluaXRpYWxpemF0aW9uIHRvIHBhcmVudCBpbml0aWFsaXphdGlvbi5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImFyaWRcIjogXCJhcmlkXCIsXHJcblx0XHRcdFwiYnVybmVcIjogXCJidXJuZVwiLFxyXG5cdFx0XHRcImZuYW1lXCI6IFwiZm5hbWVcIixcclxuXHRcdFx0XCJsZXZlbGRcIjogXCJsZXZlbGRcIixcclxuXHRcdFx0XCJtcmtkXCI6IFwibXJrZFwiLFxyXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCJcclxuXHRcdFx0XCJyYXplXCI6IFwicmF6ZVwiLFxyXG5cdFx0XHRcInNoZnRcIjogXCJzaGZ0XCIsXHJcblx0XHRcdFwidHJ1bHlcIjogXCJ0cnVseVwiLFxyXG5cdFx0XHRcIndhdWtlclwiOiBcIndhdWtlclwiLFxyXG5cdFx0XHRcIndpY2hldnJcIjogXCJ3aWNoZXZyXCIsXHJcblx0XHRcdFwieHRyYWtcIjogXCJ4dHJha1wiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBhcmlkID0gcmVxdWlyZSggXCJhcmlkXCIgKTtcclxuY29uc3QgYnVybmUgPSByZXF1aXJlKCBcImJ1cm5lXCIgKTtcclxuY29uc3QgZm5hbWUgPSByZXF1aXJlKCBcImZuYW1lXCIgKTtcclxuY29uc3QgbGV2ZWxkID0gcmVxdWlyZSggXCJsZXZlbGRcIiApO1xyXG5jb25zdCBtcmtkID0gcmVxdWlyZSggXCJtcmtkXCIgKTtcclxuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XHJcbmNvbnN0IHJhemUgPSByZXF1aXJlKCBcInJhemVcIiApO1xyXG5jb25zdCBzaGZ0ID0gcmVxdWlyZSggXCJzaGZ0XCIgKTtcclxuY29uc3QgdHJ1bHkgPSByZXF1aXJlKCBcInRydWx5XCIgKTtcclxuY29uc3Qgd2F1a2VyID0gcmVxdWlyZSggXCJ3YXVrZXJcIiApO1xyXG5jb25zdCB3aWNoZXZyID0gcmVxdWlyZSggXCJ3aWNoZXZyXCIgKTtcclxuY29uc3QgeHRyYWsgPSByZXF1aXJlKCBcInh0cmFrXCIgKTtcclxuXHJcbmNvbnN0IFNZTUJJT1NJUyA9IFN5bWJvbCggXCJzeW1iaW9zaXNcIiApO1xyXG5jb25zdCBCTFVFUFJJTlQgPSBTeW1ib2woIFwiYmx1ZXByaW50XCIgKTtcclxuY29uc3QgSU5JVElBTElaRSA9IFN5bWJvbC5mb3IoIFwiaW5pdGlhbGl6ZVwiICk7XHJcblxyXG5jb25zdCBzeW1iaW90ZSA9IGZ1bmN0aW9uIHN5bWJpb3RlKCBjaGlsZCwgcGFyZW50ICl7XHJcblx0Lyo7XHJcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJjaGlsZDpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCIsXHJcblx0XHRcdFx0XCJwYXJlbnQ6cmVxdWlyZWRcIjogW1xyXG5cdFx0XHRcdFx0XCJmdW5jdGlvblwiLFxyXG5cdFx0XHRcdFx0XCJzdHJpbmdcIixcclxuXHRcdFx0XHRcdEFycmF5LFxyXG5cdFx0XHRcdFx0XCIuLi5cIlxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fVxyXG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cclxuXHQqL1xyXG5cclxuXHRpZiggdHlwZW9mIGNoaWxkICE9IFwiZnVuY3Rpb25cIiApe1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgY2hpbGRcIiApO1xyXG5cdH1cclxuXHJcblx0bGV0IHRyZWUgPSB3YXVrZXIoIGNoaWxkICk7XHJcblxyXG5cdGlmKCBhcmd1bWVudHMubGVuZ3RoID4gMSApe1xyXG5cdFx0cGFyZW50ID0gbGV2ZWxkKCBzaGZ0KCBhcmd1bWVudHMgKSApXHJcblx0XHRcdC5maWx0ZXIoICggcGFyZW50ICkgPT4gcHJvdHlwZSggcGFyZW50LCBGVU5DVElPTiwgU1RSSU5HICkgKVxyXG5cdFx0XHQubWFwKCAoIHBhcmVudCApID0+IHtcclxuXHRcdFx0XHRpZiggdHlwZW9mIHBhcmVudCA9PSBcImZ1bmN0aW9uXCIgKXtcclxuXHRcdFx0XHRcdHJldHVybiBwYXJlbnQ7XHJcblxyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0cmV0dXJuIHh0cmFrKCB0cmVlLCBwYXJlbnQgKS5wb3AoICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IClcclxuXHRcdFx0LmZpbHRlciggdHJ1bHkgKTtcclxuXHJcblx0fWVsc2V7XHJcblx0XHRwYXJlbnQgPSBzaGZ0KCB0cmVlICk7XHJcblx0fVxyXG5cclxuXHQvKlxyXG5cdFx0QG5vdGU6XHJcblx0XHRcdElmIHRoZXJlIGFyZSBubyBnaXZlbiBwYXJlbnQgdGhlbiBpdCB3aWxsIGdldCB0aGUgaW5oZXJpdGFuY2VcclxuXHRcdFx0XHR0cmVlIG9mIHRoZSBjaGlsZCBhbmQgY29uc3RydWN0IHRoZSBpbml0aWFsaXplciB1c2luZyB0aGF0IGluaGVyaXRhbmNlIHRyZWUuXHJcblxyXG5cdFx0XHRUaGlzIGlzIHRvIGVuc3VyZSB0aGF0IHdlIGFyZSB1c2luZyBzeW1iaW9zaXMgcHJvcGVybHkuXHJcblx0XHRAZW5kLW5vdGVcclxuXHQqL1xyXG5cdGlmKCBhcmlkKCBwYXJlbnQgKSApe1xyXG5cdFx0cGFyZW50ID0gc2hmdCggdHJlZSApO1xyXG5cdH1cclxuXHJcblx0Lyo7XHJcblx0XHRAbm90ZTpcclxuXHRcdFx0VGhpcyB3aWxsIGNvbGxlY3QgYWxsIG5vbi1zeW1iaW9zaXMgaW5pdGlhbGl6ZSBtZXRob2QuXHJcblx0XHRAZW5kLW5vdGVcclxuXHQqL1xyXG5cdGxldCBpbml0aWFsaXplciA9IFsgY2hpbGQgXS5jb25jYXQoIHBhcmVudCApXHJcblx0XHQubWFwKCAoIGJsdWVwcmludCApID0+IHtcclxuXHRcdFx0bGV0IGluaXRpYWxpemUgPSB3aWNoZXZyKCBibHVlcHJpbnRbIElOSVRJQUxJWkUgXSxcclxuXHRcdFx0XHRibHVlcHJpbnQucHJvdG90eXBlLmluaXRpYWxpemUsXHJcblx0XHRcdFx0Ymx1ZXByaW50LnByb3RvdHlwZS5jb25zdHJ1Y3RvciApO1xyXG5cclxuXHRcdFx0aWYoICFtcmtkKCBTWU1CSU9TSVMsIGluaXRpYWxpemUsIHRydWUgKSApe1xyXG5cdFx0XHRcdC8vOiBAbm90ZTogQ2FjaGUgdGhlIGluaXRpYWxpemUgbWV0aG9kLlxyXG5cdFx0XHRcdGJsdWVwcmludFsgSU5JVElBTElaRSBdID0gaW5pdGlhbGl6ZTtcclxuXHJcblx0XHRcdFx0Ly86IEBub3RlOiBNYXJrIHRoZSBpbml0aWFsaXplIG1ldGhvZCB3aGF0IGNsYXNzIGl0IGJlbG9uZ3MuXHJcblx0XHRcdFx0aW5pdGlhbGl6ZVsgQkxVRVBSSU5UIF0gPSBmbmFtZSggYmx1ZXByaW50ICk7XHJcblxyXG5cdFx0XHRcdHJldHVybiBpbml0aWFsaXplO1xyXG5cdFx0XHR9XHJcblx0XHR9IClcclxuXHRcdC5maWx0ZXIoIHRydWx5IClcclxuXHRcdC5yZXZlcnNlKCApO1xyXG5cclxuXHRjaGlsZC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIGluaXRpYWxpemUoICl7XHJcblx0XHRsZXQgcGFyYW1ldGVyID0gcmF6ZSggYXJndW1lbnRzICk7XHJcblxyXG5cdFx0cmV0dXJuIGluaXRpYWxpemVyLnJlZHVjZSggKCByZXN1bHQsIGluaXRpYWxpemUgKSA9PiB7XHJcblx0XHRcdHRyeXtcclxuXHRcdFx0XHRyZXR1cm4gaW5pdGlhbGl6ZS5hcHBseSggdGhpcywgcGFyYW1ldGVyICk7XHJcblxyXG5cdFx0XHR9Y2F0Y2goIGVycm9yICl7XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgZmFpbGVkIGluaXRpYWxpemUsICR7IGluaXRpYWxpemVbIEJMVUVQUklOVCBdIH0sICR7IGVycm9yLnN0YWNrIH1gIClcclxuXHRcdFx0fVxyXG5cdFx0fSwgdGhpcyApO1xyXG5cdH07XHJcblxyXG5cdGJ1cm5lKCBTWU1CSU9TSVMsIGNoaWxkLnByb3RvdHlwZS5pbml0aWFsaXplICk7XHJcblxyXG5cdHJldHVybiBjaGlsZDtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gc3ltYmlvdGU7XHJcbiJdfQ==
//# sourceMappingURL=symbiote.support.js.map
