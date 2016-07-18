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
			"raze": "raze"
		}
	@end-include
*/

if( typeof window == "undefined" ){
	var raze = require( "raze" );
}

if( typeof window != "undefined" &&
	!( "raze" in window ) )
{
	throw new Error( "raze is not defined" );
}

var symbiote = function symbiote( child, parent ){
	/*;
		@meta-configuration:
			{
				"child:required": "function",
				"parent:required": "function"
			}
		@end-meta-configuration
	*/

	if( typeof child != "function" ){
		if( !symbiote.silent ){
			console.log( "fatal, child is not a function" );
		}

		throw new Error( "child is not a function" );
	}

	if( typeof parent != "function" &&
 		typeof child.prototype.parent != "function" )
	{
		if( !symbiote.silent ){
			console.log( "fatal, parent is not a function" );
		}

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
		if( !symbiote.silent ){
			console.log( "fatal, child initialize is not a function" );
		}

		throw new Error( "child initialize is not a function" );
	}

	if( typeof parentInitialize != "function" ){
		if( !symbiote.silent ){
			console.log( "fatal, parent initialize is not a function" );
		}

		throw new Error( "parent initialize is not a function" );
	}

	child.prototype.initialize = function initialize( ){
		try{
			parentInitialize.apply( this, raze( arguments ) );

			//: This will prevent recursive calls.
			if( child.prototype.initialize.toString( ) != childInitialize.toString( ) ){
				childInitialize.apply( this, raze( arguments ) );

			}else if( !symbiote.silent ){
				console.log( "warning, recursive calls to child initialize",
					"with symbiotic initialization",
					"child initialize is not called properly",
					child.name,
					parent.name );
			}

			return this;

		}catch( error ){
			if( !symbiote.silent ){
				console.log( "fatal, error in symbiotic initialization", error );
			}

			throw error;
		}
	};

	return child;
};

symbiote.silent = true;

symbiote.setSilent = function setSilent( silent ){
	symbiote.silent = silent;
};

if( typeof module != "undefined" ){
	module.exports = symbiote;
}
