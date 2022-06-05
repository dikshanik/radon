const endpoint = "https://www.functionup.org"
const batch = "radon"

const log = function() {

    console.log('I am inside the log function')


}

const message = function(){
    console.log("My english is not better")
}
module.exports.message = message
module.exports.endpoint = endpoint
module.exports.batch = batch
module.exports.log = log