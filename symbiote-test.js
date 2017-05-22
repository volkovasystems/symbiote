
const assert = require( "assert" );
const symbiote = require( "./symbiote.js" );

let cache = [ ];
class ClassA{
	initialize( ){
		cache.push( "classA" );
		return "classA";
	}
}

class ClassB{
	initialize( ){
		cache.push( "classB" );
		return "classB";
	}
}

class ClassC{
	initialize( ){
		cache.push( "classC" );
		return "classC";
	}
}

let classA = symbiote( ClassA, ClassB, ClassC );

assert.equal( ( new classA( ) ).initialize( ), "classA", "should be equal" );

assert.deepEqual( cache, [ "classC", "classB", "classA" ], "should be deeply equal" );

console.log( "ok" );
