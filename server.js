var express = require('express')
var app = express()

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

app.get('/:time', function (req, res) {
    var unixPatt = /^[0-9]+$/;
    
    var result = {
        "unix": null,
        "natural": null
    };
    
    if (unixPatt.test(req.params.time)) {
        var d = new Date(parseInt(req.params.time));
        result.unix = d.getTime();
        result.natural = months[d.getMonth()] + " " + d.getUTCDate() + ", " + d.getUTCFullYear();
    }
    else {
        var d = new Date(req.params.time);
       
        result.unix = d.getTime();
        
        if (d.getTime()) {
            result.natural = months[d.getMonth()] + " " + d.getUTCDate() + ", " + d.getUTCFullYear();
        }
    }
    
    res.send(JSON.stringify(result));
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
