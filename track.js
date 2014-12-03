function onSuccessLog(obj) {
    $('#senders.list').append('<li>' + JSON.stringify(obj.stats.today.sent + 'arr[0].address') + ' emails  </li>');
    $('#senders.list').append('<li>' + JSON.stringify(obj.stats.last_7_days.opens+'arr[0].sent') + ' total sent </li>');
}

function onErrorLog(obj) {
    $('#response').text(JSON.stringify(obj));
}

// create a new instance of the Mandrill class with your API key
var m = new mandrill.Mandrill('K7ghcVbetPl4peqgNPcIpA');

// get the results for users.info, and only show the total emails
// and total opens for the last 7 days.

m.users.info(function(res) {
        onSuccessLog(res);
    }, function(err) {
        onErrorLog(err);
    }
);


// get the results for users.info, and only show the total emails
// and total opens for the last 7 days.

