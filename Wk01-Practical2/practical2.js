const express = require('express')
const app = express();
const PORT = 3000

app.listen(PORT, () => { //node index.js to run the code
      console.log(`Express app listening on port ${PORT}, http://localhost:${PORT}/`)
    })

    
app.get('/',(req,res)=>{
    res.send('Hello World!')
});

app.post('/user',(req,res)=>{
    res.send('got a POST request')
});

app.put('/user',(req,res)=>{
    res.send('Got a PUT request at /user')
});

app.delete('/user',(req,res)=>{
    res.send('Got a DELETE request at /user')
});

app.use(express.static('public'));