// Create a function to log the response from the Mandrill API
function log(obj) {
    $('#response').text(JSON.stringify(obj));
}

// create a new instance of the Mandrill class with your API key
var m = new mandrill.Mandrill('K7ghcVbetPl4peqgNPcIpA');

// create a variable for the API call parameters
var params = {
    "message": {
        "from_email":"hello@world.com",
        "to":[{"email":"jacobwanner1@gmail.com"}],
        "subject": "Sending a text email from the Mandrill API",
        "text": "Hello world and jacob its working.  This is an additional test"
    }
};

function sendTheMail() {
// Send the email!

    m.messages.send(params, function(res) {
        log(res);
    }, function(err) {
        log(err);
    });
}