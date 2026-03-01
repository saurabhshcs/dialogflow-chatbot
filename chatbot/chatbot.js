const dialogflow  = require('dialogflow');
const config = require('./config/devkey');

const projectId = 'digital-assistant-414818';
const sessionId = 'testig-session';

const credentials = {
    client_email: 'test-df-server@digital-assistant-414818.iam.gserviceaccount.com',
    private_key: '-----BEGIN PRIVATE KEY-----\nMIIEv****\n'
}

const sessionClient = new dialogflow.SessionsClient({projectId, credentials});

// console.log('SessionClient estabilished: ', sessionClient);

const textQuery = async(userText, userId) => {
    // console.log('***Inside textQueryMethod: ')
    const sessionPath = sessionClient.sessionPath(projectId, sessionId+userId);
    console.log('Session Path: ', sessionPath);
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text:userText,
                languageCode: config.dialogflowSessionLang
            }
        },
    }
    try{
        console.log('***Request :', request);
        const response = await sessionClient.detectIntent(request);
        console.log('***Response: ', response[0]);
        return response[0].queryResult;
    }catch(error){
        console.log('Error: ', error);
    }
};
module.exports = {
    textQuery
};
