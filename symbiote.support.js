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
              			"harden": "harden",
              			"protype": "protype"
              			"raze": "raze",
              			"stringe": "stringe"
              		}
              	@end-include
              */

var harden = require("harden");
var protype = require("protype");
var raze = require("raze");
var stringe = require("stringe");

harden("SYMBIOSIS", "symbiosis");

var symbiote = function symbiote(child, parent) {
	/*;
                                                 	@meta-configuration:
                                                 		{
                                                 			"child:required": "function",
                                                 			"parent:required": "function"
                                                 		}
                                                 	@end-meta-configuration
                                                 */

	if (!protype(child, FUNCTION)) {
		throw new Error("child is not a function");
	}

	if (child && child.prototype && child.prototype.initialize.SYMBIOSIS == SYMBIOSIS) {
		return child;
	}

	var parentType = protype(parent);
	if (!parentType.FUNCTION && !protype(child.prototype.parent, FUNCTION)) {
		throw new Error("parent is not a function");
	}

	if (!parentType.FUNCTION && protype(child.prototype.parent, FUNCTION)) {
		parent = child.prototype.parent;
	}

	var childInitialize = child.prototype.initialize;
	var parentInitialize = parent && parent.prototype && parent.prototype.initialize;

	if (!protype(childInitialize, FUNCTION)) {
		throw new Error("child initialize is not a function");
	}

	if (!protype(parentInitialize, FUNCTION)) {
		throw new Error("parent initialize is not a function");
	}

	child.prototype.initialize = function initialize() {
		try {
			parentInitialize.apply(this, raze(arguments));

			//: This will prevent recursive calls.
			if (stringe(child.prototype.initialize) != stringe(childInitialize)) {
				childInitialize.apply(this, raze(arguments));
			}

			return this;

		} catch (error) {
			throw new Error("failed executing mutual initialize, " + error.stack);
		}
	};

	harden("SYMBIOSIS", SYMBIOSIS, child.prototype.initialize);

	return child;
};

module.exports = symbiote;

//# sourceMappingURL=symbiote.support.js.map