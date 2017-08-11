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
*/

const arid = require( "arid" );
const burne = require( "burne" );
const fname = require( "fname" );
const leveld = require( "leveld" );
const mrkd = require( "mrkd" );
const protype = require( "protype" );
const raze = require( "raze" );
const shft = require( "shft" );
const truly = require( "truly" );
const wauker = require( "wauker" );
const wichevr = require( "wichevr" );
const xtrak = require( "xtrak" );

const SYMBIOSIS = Symbol( "symbiosis" );
const BLUEPRINT = Symbol( "blueprint" );
const INITIALIZE = Symbol.for( "initialize" );

const symbiote = function symbiote( child, parent ){
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

	if( typeof child != "function" ){
		throw new Error( "invalid child" );
	}

	let tree = wauker( child );

	if( arguments.length > 1 ){
		parent = leveld( shft( arguments ) )
			.filter( ( parent ) => protype( parent, FUNCTION, STRING ) )
			.map( ( parent ) => {
				if( typeof parent == "function" ){
					return parent;

				}else{
					return xtrak( tree, parent ).pop( );
				}
			} )
			.filter( truly );

	}else{
		parent = shft( tree );
	}

	/*
		@note:
			If there are no given parent then it will get the inheritance
				tree of the child and construct the initializer using that inheritance tree.

			This is to ensure that we are using symbiosis properly.
		@end-note
	*/
	if( arid( parent ) ){
		parent = shft( tree );
	}

	/*;
		@note:
			This will collect all non-symbiosis initialize method.
		@end-note
	*/
	let initializer = [ child ].concat( parent )
		.map( ( blueprint ) => {
			let initialize = wichevr( blueprint[ INITIALIZE ],
				blueprint.prototype.initialize,
				blueprint.prototype.constructor );

			if( !mrkd( SYMBIOSIS, initialize, true ) ){
				//: @note: Cache the initialize method.
				blueprint[ INITIALIZE ] = initialize;

				//: @note: Mark the initialize method what class it belongs.
				initialize[ BLUEPRINT ] = fname( blueprint );

				return initialize;
			}
		} )
		.filter( truly )
		.reverse( );

	child.prototype.initialize = function initialize( ){
		let parameter = raze( arguments );

		return initializer.reduce( ( result, initialize ) => {
			try{
				return initialize.apply( this, parameter );

			}catch( error ){
				throw new Error( `failed initialize, ${ initialize[ BLUEPRINT ] }, ${ error.stack }` )
			}
		}, this );
	};

	burne( SYMBIOSIS, child.prototype.initialize );

	return child;
};

module.exports = symbiote;
