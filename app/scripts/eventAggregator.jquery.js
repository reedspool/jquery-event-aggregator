/*
 * Top Level jQuery Event Aggregator
 *
 * Author: Reed Spool
 *
 * Version: v0.0.0
 *
 * Use with: jQuery v1.11.1
 *
 * License: Beer license
 * That is, if you ever meet me, buy me a drink. Otherwise
 * keep my name on the code so people know I did something.
 *
 * Adapted from: http://stackoverflow.com/a/3279875/1037165
 * 
 * Description:
 * Adds two methods to $ top namespace:
 * $.on, $.trigger
 *
 * Together these make a near-global event aggregator
 * for easy, early decoupling.
 *
 * Example Useage:
 *
 * $.on('meowmix', function (evt, other, args) { 
 *	// Do cat stuff
 * })
 *
 * $.trigger('meowmix', 'cat', 'things') ==> $()
 *    // Side Effect!!! Causes cat things to happen
 *
 */
+function ($) {

	function impotent(fn) {
		// Do a thing, then return an empty jQuery object for chainz
		return function (a,r,g,s) {
			fn.apply(this, arguments);
			return $empty;
		}
	}

	var stand_in = {},
		$stan = $(stand_in),
		$empty = $(),
		trigger = $stan.trigger.bind($stan),
		on = $stan.on.bind($stan);

	// Blank them! Now they return an empty jQuery selection
	// instead of Stan, our stand-in.
	// Comment-out for dev mode.
	trigger = impotent(trigger);
	on = impotent(on);

	// Finally, modifying the Mothership!
	$.trigger = trigger;
	$.on = on;
}(jQuery);