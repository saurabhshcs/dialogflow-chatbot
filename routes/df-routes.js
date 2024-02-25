const chatbot = require('../chatbot/chatbot');

module.exports = app => {
    app.post('/text_query', async(req, res) =>{
        // console.log('****Function Called...');
        // console.log('Text Query', req);
        const {text, userId} = req.body;
        // console.log('***Input Text:', text);
        // console.log('***Input User ID:', userId);
        const resultQuery = await chatbot.textQuery(text, userId);

        // console.log('__Result Query: ', resultQuery);
        const responseObject = {
            intentName: resultQuery.intent.displayName,
            userQuery: resultQuery.queryText,
            fulfilmentText: resultQuery.fulfilmentText
        }
        res.send(responseObject);
    });

    app.post('event_query', (req, res)=> {
        console.log('Event Query');
        res.send('Event Query');
    });
}