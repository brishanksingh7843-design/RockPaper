import express from 'express';
import cors from 'cors';
const app=express();
const PORT=process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
import OpenAI from 'openai';
const apike='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';
 const client=new OpenAI({
    apiKey:apike,
    baseURL:'https://api.groq.com/openai/v1',
  }
  );
  //get and post are two different things
//get gets the meassage and post gives the message.


app.post('/ok', async (request,response)=>{

 let usermessage=request.body.message;

//  console.log('client said: '+usermessage);//it's here

 const responses=await client.responses.create({
  model:'openai/gpt-oss-20b',
  input:usermessage
 });
//  console.log(responses.output_text);
 response.send(responses.output_text);
 console.log('done');



});

app.listen(PORT,()=>{
  console.log('server started'+PORT);
});

// npm install openai
//npm install express
//npm install cors
//npm init -y
//npm install nodemon