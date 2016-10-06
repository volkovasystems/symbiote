"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2016 Richeve Siodina Bebedor
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
			"repository": "https://github.com/volkovasystems/symbiote.git",
			"test": "symbiote-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:

	@end-module-documentation

	@include:
		{
			"harden": "harden",
			"raze": "raze"
		}
	@end-include
*/

if( typeof window == "undefined" ){
	var harden = require( "harden" );
	var raze = require( "raze" );
}

if( typeof window != "undefined" &&
	!( "harden" in window ) )
{
	throw new Error( "harden is not defined" );
}

if( typeof window != "undefined" &&
	!( "raze" in window ) )
{
	throw new Error( "raze is not defined" );
}

harden( "SYMBIOSIS", "symbiosis" );

var symbiote = function symbiote( child, parent ){
	/*;
		@meta-configuration:
			{
				"child:required": "function",
				"parent:required": "function"
			}
		@end-meta-configuration
	*/

	if( child.prototype.initialize.SYMBIOSIS == SYMBIOSIS ){
		return child;
	}

	if( typeof child != "function" ){
		throw new Error( "child is not a function" );
	}

	if( typeof parent != "function" &&
 		typeof child.prototype.parent != "function" )
	{
		throw new Error( "parent is not a function" );
	}

	if( typeof parent != "function" &&
		typeof child.prototype.parent == "function" )
	{
		parent = child.prototype.parent;
	}

	var childInitialize = child.prototype.initialize;
	var parentInitialize = parent.prototype.initialize;

	if( typeof childInitialize != "function" ){
		throw new Error( "child initialize is not a function" );
	}

	if( typeof parentInitialize != "function" ){
		throw new Error( "parent initialize is not a function" );
	}

	child.prototype.initialize = function initialize( ){
		try{
			parentInitialize.apply( this, raze( arguments ) );

			//: This will prevent recursive calls.
			if( child.prototype.initialize.toString( ) != childInitialize.toString( ) ){
				childInitialize.apply( this, raze( arguments ) );
			}

			return this;

		}catch( error ){
			throw new Error( "failed executing mutual initialize, " + error.stack );
		}
	};

	harden( "SYMBIOSIS", SYMBIOSIS, child.prototype.initialize );

	return child;
};

if( typeof module != "undefined" ){
	module.exports = symbiote;
}
