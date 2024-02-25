const express = require('express');
const bodyParser = require('body-parser');
// const axios = require('axios');
const cors = require('cors');
const PORT = process.env.PORT || 4000;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World..')
});
app.listen(PORT);
// const corsOption = {
//     origin: 'http://localhost:6300'
// }
// app.options('*', cors(corsOption))

// Enable CORS
// app.use(cors(corsOption));
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());
// require('./route/diaglowflowRoute')(app);
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
  




// app.post('/dialogflow', async (req, res) => {
//     console.log('__access-control-allow-origin:', req.headers['access-control-allow-origin']); // Log request body
//     console.log('___content-type:', req.headers['content-type']); // Log base URL
//   try {
//     const response = await axios.post('https://europe-west2-dialogflow.googleapis.com/v3/projects/digital-assistant-414818/locations/europe-west2/agents/813fbcf2-3a3e-4c8d-a5a6-76578569c09b/sessions/test-session-123:detectIntent', req.body, {
        
//       headers: {
//         Authorization: "req.headers.authorization",
//         'Content-Type': 'application/json',
//         'x-user-google-project': 'digital-assistant-414818'
//       }
//     });
//     const responseData = {
//         request: req.body, // Include the request body in the response
//         requestHeaders: req.headers,
//         dialogflowResponse: response.data // Include the Dialogflow API response
//       };
//     res.send(response.data);
//   } catch (error) {
//     console.error('____Error calling Dialogflow API:', error.message);
//     res.status(403).send('Request failed with status code');
//   }
// });

