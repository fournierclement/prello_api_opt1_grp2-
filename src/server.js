const app = require('./app');

/**
 * Start server
 */
console.log(app.get('port'))
app.listen(app.get('port'), function () { 
    console.log('Express server listening on port: ' + app.get('port'));
});
//localhost:8080/api/cards/
