/**
 * This function halts the execution of a function by a specific duration
 * @param  {number} ms Time in milliseconds
 */
module.exports = function (ms) {
	// validate parameter and typecast ms to number so that loop checking does not burden CPU
	if (isNaN(ms) || ms < 0) { return; }
	ms = Number(ms);

	// store the starting time and loop until current time is greater than start + sleep time
	var start = Date.now();
	while (Date.now() - start < ms);
};
