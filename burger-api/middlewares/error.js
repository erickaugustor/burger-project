module.exports = function (err, req, res, next) {
	// req.log.error(err.message, err);
	res.status(500).send('Internal Server Error');
	next();
};