/**
 * Computer protocol command that does nothing
 */
var noop = (function () { /* no operations*/ });

/**
 * This function halts the execution of a function by a specific duration
 * @param  {number} ms Time in milliseconds
 */
module.exports = function (ms) {
	// validate parameter and typecast ms to number so that loop checking does not burden CPU
	if (isNaN(ms) || ms < 0) { return; }
	ms = Number(ms);

	// do setimeout for the specified interval
	setTimeout(noop, ms);
};
