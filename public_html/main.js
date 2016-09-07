/**
 * Created by arpit on 21/8/16.
 */

var dat,i=0,score=0,flag=true,user='';
var tally={total:0,correct:0,incorrect:0};
      console.log('helo');
document.getElementById('insert').innerHTML+=' ' +user

//$("#start").click(function () {
function start() {
//getElementsByClassName('main').style.display=true;
    user=document.getElementById('name').value;
    console.log(user);

    document.getElementById('main').style.display='block';
    document.getElementById('start').style.display='none';

     document.getElementById('result').innerHTML ='';

    $.get('/getdata', function (dat, status) {
        var qno =Math.round( Math.random() * (100));

        console.log(dat.question);
        document.getElementById('ques').innerHTML = '<li>' + dat[qno].question + '</li>';
        document.getElementById('A').innerHTML = '<li>' + dat[qno].option1 + '</li>';
        document.getElementById('B').innerHTML = '<li>' + dat[qno].option2 + '</li>';
        document.getElementById('C').innerHTML = '<li>' + dat[qno].option3 + '</li>';
        document.getElementById('D').innerHTML = '<li>' + dat[qno].option4 + '</li>';
        check = function (op) {
            if(flag==true) {
                console.log(op.id + "  " + dat[qno].answer);

                if (dat[qno].answer == op.id) {
                    document.getElementById('result').innerHTML = '<li> Correct answer ' + '</li>'
                    score += 10;
                    tally.correct++;
                }
                else {
                    document.getElementById('result').innerHTML = '<li> Wrong answer '+' </li>'
                    score -= 5;
                    tally.incorrect++;
                }

                tally.total = i + 1;
            }


            flag=false;
        }

        if(i==10)
        {    document.getElementById('main').style.display='none';

            console.log(tally);
            // window.alert(score);
            document.getElementById('final').innerHTML='<li><b> <h1 ><i><u>'+user+ '</u></i> Final Score is = '+score+'</h1></b></li><br>' +
                '<li><b> <h3>Total Question = '+ tally.total+'</b><li><b> <h3>Correct Question = '+tally.correct+'</b></li>' +
                '<li><b><h3> ' + 'Incorrect Question = '+tally.incorrect+'</b></li><br>';
            // location.href=index1.html;
            // window.open('index1.html');

        }
        //    start();
        //}
    })
}
function next() {
    flag=true
    i++;
    start();

}
