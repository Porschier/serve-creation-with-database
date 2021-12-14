const { request, response } = require('express');
const express = require('express');
const app = express();
//importing mongoose

const mongoose = require ('mongoose');
// importing todoController
const todoContoller= require('./ controllers/todoController')
app.get('/',(request,response)=>{
    response.send('Hello this is a get method');
})
app.post('/',(request,response)=>{
    response.send('hello this is a post response')
})
app.put('/',(request,response)=>{
    response.send('hello this is a put response')
})
app.delete('/',(request,response)=>{
    response.send('hello this is a delete response')
})
app.post('/',(request,response)=>{
    response.send('hello this is a get respons')
})
app.get('/todos',(request,response)=>{
    response.send([{
        'title': 'Plan trip to Kumasi',
        'description': ' will be going to Kumasi this weekend',
        'time': 'Today',
        'isCompleted': 'false',
}])
}
)
app.get('/users',(request,response)=>{
    response.send([{
        'username':'Porschier',
        'password':'password',

    }])
}
)









app.listen(3300,()=>{
    console.log('My server is up and running on port 3300')
});
mongoose.connect('mongodb+srv://porschier:porschie2000@cluster0.d06nh.mongodb.net/todo_db?retryWrites=true&w=majority').then(function(){
    console.log("Database is connected");
}).catch(function(error){
    console.log("DataBase not connect", error.message)
})
