/**
 * @module Pixi Util
 * @namespace PIXI.util
 */
(function(PIXI, undefined)
{

	/**
	 * Utils
	 * @class Utils
	 */
	var Utils = {};

	/**
	 * 특정 타입의 객체들만 가지고 온다.
	 * @method  getChildrenByType
	 * @static
	 * @param  {Object} parent 
	 * @param  {Class} type 
	 */
	Object.defineProperty(Utils, "getChildrenByType",
	{
		enumerable: false,
		value: function(parent, type)
		{
			let children = [];
			let child;
			let count = 0;
			
			for(var key in parent) {
				if (key === 'parent') {
					continue;
				}
				
				child = parent[key];
				if (child instanceof type) {
					children.push(child);
				}
			}
			
			return children;
		}
	});

	/**
	 * 자신의 포함하고 있는 모든 chilren에 blendMode 적용.
	 * @method  setBlendMode
	 * @static
	 * @param  {Object} parent
	 * @param  {Number} blendMode
	 */
	Object.defineProperty(Utils, "setBlendMode",
			{
		enumerable: false,
		value: function(parent, blendMode)
		{
			if (!parent) {
				return;
			}
			
			let _children = Utils.getChildrenByType(parent);
			if (!_children || _children.length == 0) {
				return;
			}
			
			for (let i = 0; i < _children.length; i++) {
				if (_children[i]) {
					_children[i].blendMode = blendMode;
					Utils.setBlendMode(_children[i], blendMode);
				}
			}
		}
	});

	// Assign to namespace
	PIXI.util.Utils = Utils;

}(PIXI));