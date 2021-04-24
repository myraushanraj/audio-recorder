const express = require('express');
const multer = require('multer');
const upload = multer();
const fs = require('fs');

var app = express();
app.use(express.static(__dirname));
const path = require('path');


app.post('/upload', upload.single('file'), (req, res) => {
    console.log('Files: ', req.file);


    let uploadLocation = "my-audio/"+req.file.originalname+new Date().getTime()+".mp3";
    fs.writeFileSync(uploadLocation, Buffer.from(new Uint8Array(req.file.buffer)),(err)=>{
        res.status(200).send('ok');
    }); 
    res.status(200).send('ok');
   
});

app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname+'/html/index.html'));
  });

app.listen(process.env.PORT || 8081);