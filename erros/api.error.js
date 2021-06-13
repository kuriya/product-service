/*
 * @Author: Dilshan Niroda
 * @Date: 2021-06-13 15:33:13
 * @Last Modified by:   Dilshan Niroda
 * @Last Modified time: 2021-06-13 15:33:13
 */
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
