'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isFunction = require( 'validate.io-function' );

// CANBERRA DISTANCE //

/**
* FUNCTION: canberra( x, y[, accessor])
*		Computes the Canberra distance between two arrays.
*
* @param {Number[]|Array} x - input array
* @param {Number[]|Array} y - input array
* @param {Function} [accessor] - accessor function for accessing array values
* @returns {Number|Null} Canberra distance
*/
function canberra( x, y, clbk ) {

	var d, i, v, len, num, denom, xVal, yVal;

	if ( !isArray( x ) ) {
			throw new TypeError( 'canberra-distance()::invalid input argument. First argument must be an array. Value: `' + x + '`.' );
		}
		if ( !isArray( y ) ) {
			throw new TypeError( 'canberra-distance()::invalid input argument. Second argument must be an array. Value: `' + y + '`.' );
		}
		if ( arguments.length > 2 ) {
			if ( !isFunction( clbk ) ) {
				throw new TypeError( 'canberra-distance()::invalid input argument. Accessor must be a function. Value: `' + clbk + '`.' );
			}
		}
		len = x.length;
		if ( len !== y.length ) {
			throw new Error( 'canberra-distance()::invalid input argument. Input arrays must have the same length.' );
		}
		if ( !len ) {
			return null;
		}

	d = 0;
	if ( clbk ) {
		for ( i = 0; i < len; i++ ) {
			xVal = clbk( x[i], i, 0 );
			yVal = clbk( y[i], i, 1 );
			v = xVal - yVal;
			num = ( v < 0 ) ? -v : v;
			denom = ( ( xVal < 0 ) ? -xVal : xVal ) + ( ( yVal < 0 ) ? -yVal : yVal );
			d += num / denom;
		}
	} else {
		for ( i = 0; i < len; i++ ) {
			v = x[ i ] - y[ i ];
			num = ( v < 0 ) ? -v : v;
			denom = ( ( x[ i ] < 0 ) ? -x[ i ] : x[ i ] ) + ( ( y[ i ] < 0 ) ? -y[ i ] : y[ i ] );
			d += num / denom;
		}
	}
	return d;
} // end FUNCTION canberra()


// EXPORTS //

module.exports = canberra;
