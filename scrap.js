/**
 * Created by piyush on 14/8/16.
 */
const osmosis = require('osmosis');

let questions = [];

module.exports = {
    quesAns : function() {
        return new Promise((resolve, reject) => {
            osmosis
                .get('http://www.indiabix.com/general-knowledge/questions-and-answers')
                .find('div ul:only-child a')
                // .find('ul:only-child li:nth-child(4) a')
                // .set('topic')
                .follow('@href')
                .find('div > table')
                .set({
                    'question': '.bix-td-qtxt',
                    'option1': 'tr tr:nth-child(1) td:last-child',
                    'option2': 'tr tr:nth-child(2) td:last-child',
                    'option3': 'tr tr:nth-child(3) td:last-child',
                    'option4': 'tr tr:nth-child(4) td:last-child',
                    'answer': '.jq-hdnakqb'
                })
                .data(function (obj) {
                    questions.push(obj);
                })

                .done(function () {
                    resolve(questions);
               console.log('l')
                })

            // .log(console.log)
             .error(reject)
            // .debug(console.log)

                //return questions;
        });
    }
};