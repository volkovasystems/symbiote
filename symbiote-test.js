
const assert = require( "assert" );
const symbiote = require( "./symbiote.js" );

let cache = [ ];

class ClassC{
	initialize( ){
		cache.push( "classC" );

		( this.data = this.data || [ ] ).push( "C" );

		return "classC";
	}
}

class ClassB extends ClassC {
	constructor( ){ super( ); }
	initialize( ){
		cache.push( "classB" );

		( this.data = this.data || [ ] ).push( "B" )

		return "classB";
	}
}

class ClassA extends ClassB {
	constructor( ){ super( ); }
	initialize( ){
		cache.push( "classA" );

		( this.data = this.data || [ ] ).push( "A" )

		return "classA";
	}
}

let classA = symbiote( ClassA, ClassB, ClassC );

assert.equal( ( new classA( ) ).initialize( ), "classA", "should be equal" );

assert.deepEqual( cache, [ "classC", "classB", "classA" ], "should be deeply equal" );

let A = symbiote( ClassA );

assert.equal( ( new A( ) ).initialize( ), "classA", "should be equal" );

let a = new A( );
a.initialize( );
assert.deepEqual( a.data, [ "C", "B", "A" ], "should be equal" );

console.log( "ok" );
