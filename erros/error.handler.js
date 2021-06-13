/**
 * Application Error handling logic goes to here
 */
const APIError = require("./api.error")

const error = (err, req, res, next) => {
	if (err instanceof APIError) {
		return res.status(err.code || 500).json(err)
	}

	const apiErr = new APIError.internal("Internal Server Error")
	return res.status(apiErr.code).json(apiErr)
}

const routeError = (req, res, next) => {
	next(APIError.resourceNotFound("Resource Not Found"))
}

const errors = {
	errorHandler: error,
	routeError: routeError
}

module.exports = errors
