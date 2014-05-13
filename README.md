``````````
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
 * <!-- Load it into HTML like any darn thing -->
 * <script src="scripts/jquery.js"></script>
 * <script src="scripts/eventAggregator.jquery.js"></script>
 * <script src="scripts/main.js"></script>
 *
 * Meanwhile, back at the ranch: 
 *
 * $.on('meowmix', function (evt, other, args) { 
 *	// Do cat stuff
 * })
 *
 * $.trigger('meowmix', 'cat', 'things') ==> $()
 *    // Side Effect!!! Causes cat things to happen
 *
 */
``````````
