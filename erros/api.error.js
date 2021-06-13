class APIError {
	constructor(code, message) {
		this.code = code
		this.message = message
	}

	static resourceNotFound(msg) {
		return new APIError(404, msg)
	}

	static internal(msg) {
		return new APIError(500, msg)
	}

	static badRequest(msg) {
		return new APIError(400, msg)
	}
}

module.exports = APIError
