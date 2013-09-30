/**
 * ns | namespace
 *
 * a namespace implementation for nodejs and your browser
 *
 * @author		Martin Lantzsch <martin@linux-doku.de>
 * @link 		http://github.com/LinuxDoku/namespace
 * @package		ns
 * @licence 	MIT
 */
(function() {
	"use strict";
	/**
	 * namespace
	 * - assign object/function/var to namespace hirachy
	 * - get object/function/var from namespace hirachy
	 *
	 * @param {string} namespace - the namespace
	 * @param {*} object - object you want to insert in the given namespace
	 * @returns {*} object you have assigned
	 */
	var namespace = (function(namespace, object) {
		// pick the global var for the current environment
		var variable = typeof module === 'undefined' ? window : global;
		var parts = namespace.split('.');
		var obj;

		if(typeof object === 'object') {
			obj = {};
			for(var field in object) {
				obj[field] = object[field];
			}
		} else {
			obj = object;
		}

		for(var index in parts) {
			var part = parts[index];
			if(obj === undefined) {
				variable = variable[part];
			} else {
				if(index < parts.length - 1) {
					variable = variable[part] = variable[part] || {};
				} else {
					// merge pre existing object with the new one
					if(variable[part] !== undefined) {
						for(var field in variable[part]) {
							if(!obj.hasOwnProperty(field)) {
								obj[field] = variable[part][field];
							}
						}
					}
					variable = variable[part] = obj;
				}
			}
		}

		return variable;
	});

	// on nodejs platform export as module
	if(typeof module !== 'undefined')
		module.exports = namespace;
	// on browser environment add to window
	else
		window.namespace = namespace;
})();