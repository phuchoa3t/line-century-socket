
var logComponent = (data) => {
    console.log(Date().toString());
    console.log(data);
}

var logElement = (data) => {
    console.log('    ' + data);
}

module.exports = {
    logComponent,
    logElement
}