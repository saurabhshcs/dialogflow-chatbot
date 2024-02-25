const dialogflow  = require('dialogflow');
const config = require('./config/devkey');

const projectId = 'digital-assistant-414818';
const sessionId = 'testig-session';

const credentials = {
    client_email: 'test-df-server@digital-assistant-414818.iam.gserviceaccount.com',
    private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDSchwOV8bQz2DW\nrocDfD++Xt57ITXVrLBrcZu/G0/LSkGzjjc7nGQCQQ8oxcKjs8JvaDn5NoMphTF6\ne7yzewoaSTEnv5xIgiawywOFW73rtW3GzYNTm223N9r53I7KM/GWsa+aMHDl6fcr\n0OS3pUfo5qWOQSl3PTWE0IxBNRQqdqk2HC4Y4UwDAUvqSkZcz8AD7CRlGX0ApWwg\nP9jNvygiTQ+kSWFk5dTNs4Cg6a+ayWRMW5Xz/9ZzK9gML6dd0ZbBGAcrALMWM1qo\nJsWdRhqpsU68u/HGbOEuV5kKUTeMdVVp9XhN6/X7xEXBmowZXDS2GfYr+7sI9E75\nynn+HsfzAgMBAAECggEAO2Yd6SZ5ZYLDMJU+Yot1aoRYg6SSD2eYvBrq/Pv2f8jL\n1qRzjo3L5J78amO3VoFshgmDI4Zxawy/NHUsg/Rcm6LBDxkUQZsK1KfYrJGCf79L\n5usnADhEtYw8cH4Ch6w1qnUovXqiwyJQs7tYc0VhkKlZXVejHpbWPlCm5djXgkxM\nfoTM65nKCLwlB32NexDBOWsvsC30HlMiHSKX7q0aDE6rYI6Kvas40MjgtCZE47Uy\n7hYnYENGmXY1D60LB8Vja7HldtPa4nAj1qobYgB7qP3L81izFRCAxE75xgtENvWN\n+m/OfBFPYsoXSikFCK5baftyCaoefO9P6PRiyP88MQKBgQD6BvX00uajCKZtikHT\nqZHfcdUy8JZn5OJI+w6YM6N6YbVGFkh2DJ+5Pyv8htP0i2D/m7jcHHLQvLExRlfu\nHRt87m4KXi+dBYxxwoYNen9aFWJwtjSdTfIpw1VOTVI3E6VXc7J6Jwcnguo/1AiI\nk+HUZZsz3Coft3NUiWBfwsQh9wKBgQDXeRa7PzAj61nDx+5AJn4PX3WsBKPLZXQG\njKxTGfghGPYChzIdMPFnerAgsY6IoUXsr2cdEHL+EDPCV6cG738PJtENwc9fxO/I\nqvo7P4lPb6tF+IOkjFu/EuI2E2wUc+qiNRFL/HAClvITJ6niSJDSgw1b9+i+dKiT\nI33JHT1K5QKBgFppt/l/Zn2gPCayb1luIVzu2gzgqVMKlrWTa9SoH766pIWiuzNN\nH1kquepIi08MM9ha5H9cHjzTbzQFXvixN+Z2hf5jzs32WrIsiLNJD9Jwlzdw/BfC\nPwbRJwD4vvlBtnGoWesIP/MOyUypjShuaaSX1YbsX6M2gJMaVmpqkOhDAoGBAMEK\nUN0sfRqRDXijM8XxNlrbcPbNqVjd6Za8jN5ek7hDPpOBP9p7MKs+dXC04jdyFM05\nT63wQLVxGo3wLUm/YxvV8NDcY8cvDou+8jQGdiPerZkgTgArZz7F0jgUKm4gc4Mi\n+/4RiOApD3Mtw7tgu659johoj/GhXi2ETHrTYUgpAoGBAOlfrCs4gDrNscRyeEfr\nGm8hdHjLUuNioOE/lVDfUsgfb7grdT018Wbk3yUl9UQLdCHbpfNT2psaeRgbzHpV\nUBFk7kkxTqfolXMKDytqm1G0L5XqEALXzE3fTi1W5KR9qWsMpoc45fu2GiZwRqwl\nb+kNCiUuzXm0s8/SUWBEi8Yu\n-----END PRIVATE KEY-----\n'
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