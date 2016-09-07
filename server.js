/**
 * Created by arpit on 17/8/16.
 */

const questionPromise = require('./scrap').quesAns();
const express = require('express');
const app = express();

app.use('/', express.static(__dirname + '/public_html'));

app.get('/getdata' , function(req , res){
    console.log('data requested');
    questionPromise.then( function (data) {
        console.log(data);
        res.send(data);
        console.log('data sent');
});
})

app.listen(8000 , function () {
    console.log('Server is runing on port http://localhost:8000');
})