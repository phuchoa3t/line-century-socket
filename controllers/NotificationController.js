const constant = require('./../libraries/constants');
var notification = (request, response, next) => {
    console.log(request.body)
    response.io.emit(constant.CHANGE_PRICE, request.body);
    response.json({ "status": "Ok" })
}
module.exports = {
    notification
}