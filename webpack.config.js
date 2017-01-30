"use strict";

const webpack = require( "webpack" );
const ResolverPlugin = webpack.ResolverPlugin;
const DirectoryDescriptionFilePlugin = ResolverPlugin.DirectoryDescriptionFilePlugin;
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
	"entry": "./symbiote.support.js",
	"resolve": {
		"modulesDirectories": [ "bower_components", "node_modules" ]
	},
	"module": {
		"preLoaders": [
			{
				"test": /\.support\.js$/,
				"loader": "source-map-loader"
			}
		]
	},
	"output": {
		"library": "symbiote",
		"libraryTarget": "umd",
		"filename": "symbiote.deploy.js"
	},
	"plugins": [
		new ResolverPlugin( new DirectoryDescriptionFilePlugin( "bower.json", [ "support" ] ) ),
		new ResolverPlugin( new DirectoryDescriptionFilePlugin( ".bower.json", [ "main" ] ) ),
		new UglifyJsPlugin( {
			"compress": { "warnings": false },
			"comments": false,
			"sourceMap": true,
			"mangle": false
		} )
	],
	"devtool": "#inline-source-map"
};
