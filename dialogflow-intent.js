/**
 * TODO(developer): Uncomment these variables before running the sample.
 */

const projectId = 'digital-assistant-414818my-project';
const location = 'europe-west2';
const agentId = '813fbcf2-3a3e-4c8d-a5a6-76578569c09b';
const query = 'Hello';
const languageCode = 'en'

// Imports the Google Cloud Some API library
const {SessionsClient} = require('@google-cloud/dialogflow-cx');
const grpc = require('@grpc/grpc-js');

/**
 * Example for regional endpoint:
 *   const location = 'us-central1'
 *   const client = new SessionsClient({apiEndpoint: 'us-central1-dialogflow.googleapis.com'})
 */
const client = new SessionsClient({
    credentials: {
        client_email: 'saurabhshcsuk@gmail.com',
        private_key: 'ya29.a0AfB_byBM-2OL8rzltmVBOV7zmMB4hnQlGJDYQdCxpOiqXFfnUSnoaPMEy1leT2ncHMB5EZrce0u9LqIeLWxo30j3RWinBCD36qQ4bjxn0GTTz6aZaa-9neW55lqm1cTcXhcPJTvZrebjfQF5aZlmDtl0PcRkC1J7fWvxLdlpSpta5LUCEmyu1ZLjUwC-4dx8HpbMkTOtciKRJvjOWrlSe5NnmOOW-62tmz63xX6sGiem070AFfxf2bCmQhX6ANCMMStVjwrWwBbaQC1FrAccI07XdebyYVnOW4mnq_zMN00I5R6IyGFGE-3IwNdXIYIxJeg9uaBj875_TgnvOyZqD4rYFSsnpZT-3rrAsa9e5PaQvOtrrfVC85bH2Q-S5hWWnJnyRJQT61A0aIMzWW-HRJg-HUDZ4ogaCgYKAVoSARMSFQHGX2MiJ8fDuxWqKJ9heRl8czbZrQ0422',
      },
});

async function detectIntentText() {
  const sessionId = Math.random().toString(36).substring(7);
  const sessionPath = client.projectLocationAgentSessionPath(
    projectId,
    location,
    agentId,
    sessionId
  );
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: query,
      },
      languageCode,
    },
  };
  const [response] = await client.detectIntent(request);
  for (const message of response.queryResult.responseMessages) {
    if (message.text) {
      console.log(`Agent Response: ${message.text.text}`);
    }
  }
  if (response.queryResult.match.intent) {
    console.log(
      `Matched Intent: ${response.queryResult.match.intent.displayName}`
    );
  }
  console.log(
    `Current Page: ${response.queryResult.currentPage.displayName}`
  );
}

module.exports = { detectIntentText };
