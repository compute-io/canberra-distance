'use strict';

var canberra = require( './../lib' );

var x = new Array( 100 ),
	y = new Array( 100 ),
	d;

for ( var i = 0; i < x.length; i++ ) {
	x[ i ] = Math.round( Math.random()*100 );
	y[ i ] = Math.round( Math.random()*100 );
}
d = canberra( x, y );

console.log( d );
