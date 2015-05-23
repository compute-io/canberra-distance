canberra-distance
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

>  Computes the [Canberra distance](http://en.wikipedia.org/wiki/Canberra_distance) between two arrays.

The [Canberra distance](http://en.wikipedia.org/wiki/Canberra_distance) defines a distance between two points in a vector space.

<div class="equation" align="center" data-raw-text="d(\mathbf{x}, \mathbf{y}) = \sum_{i=0}^{n-1} \frac{|x_i-y_i|}{|x_i|+|y_i|}" data-equation="eq:canberra_similarity">
	<img src="https://cdn.rawgit.com/compute-io/canberra-distance/4c2edc96655033992dfb9605f8a81a11db21bcf3/docs/img/eqn.svg" alt="Canberra distance formula">
	<br>
</div>

## Installation

``` bash
$ npm install compute-canberra-distance
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var canberra = require( 'compute-canberra-distance' );
```

#### canberra( x, y[, accessor] )

Computes the [Canberra distance](http://en.wikipedia.org/wiki/Canberra_distance) between two `arrays`.

``` javascript
var x = [ 2, 4, 5, 3, 8, 2 ],
	y = [ 3, 1, 5, -3, 7, 2 ];

var d = canberra( x, y );
// returns ~1.87
```

For object `arrays`, provide an accessor `function` for accessing `numeric` values.

``` javascript
var x = [
	{'x':2},
	{'x':4},
	{'x':5}
];

var y = [
	[1,3],
	[2,1],
	[3,5]
];

function getValue( d, i, j ) {
	if ( j === 0 ) {
		return d.x;
	}
	return d[ 1 ];
}

var dist = canberra( x, y, getValue );
// returns ~0.8
```

The accessor `function` is provided three arguments:

-	__d__: current datum.
-	__i__: current datum index.
-	__j__: array index; e.g., array `x` has index `0`, and array `y` has index `1`.

If provided empty `arrays`, the function returns `null`.

## Examples

``` javascript
var distance = require( 'compute-canberra-distance' );

var x = new Array( 100 ),
	y = new Array( 100 ),
	d;

for ( var i = 0; i < x.length; i++ ) {
	x[ i ] = Math.round( Math.random()*100 );
	y[ i ] = Math.round( Math.random()*100 );
}
d = distance( x, y );

console.log( d );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The Compute.io Authors.


[npm-image]: http://img.shields.io/npm/v/compute-canberra-distance.svg
[npm-url]: https://npmjs.org/package/compute-canberra-distance

[travis-image]: http://img.shields.io/travis/compute-io/canberra-distance/master.svg
[travis-url]: https://travis-ci.org/compute-io/canberra-distance

[coveralls-image]: https://img.shields.io/coveralls/compute-io/canberra-distance/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/canberra-distance?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/canberra-distance.svg
[dependencies-url]: https://david-dm.org/compute-io/canberra-distance

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/canberra-distance.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/canberra-distance

[github-issues-image]: http://img.shields.io/github/issues/compute-io/canberra-distance.svg
[github-issues-url]: https://github.com/compute-io/canberra-distance/issues
