const express = require("express")
const app = express()
const cors = require("cors")
const router = require('./routes')
const fs = require('fs')
const { writeFile } = require('fs')

app.use(express.json());
app.use(cors());
require('dotenv').config()

// CORS Middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, authtoken, contentType, Content-Type, Accept, Authorization"
    );
    if (req.method == "OPTIONS") res.end();
    else next();
  });
 

  app.use(router);


  app.get('/createfolder', async function(req, res){
    var dir = './collections';
  
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
        if(!fs.existsSync(dir+'/101')){
           fs.mkdirSync(dir+'/101');
          if(!fs.existsSync(dir+'/101/woocommerce')){
            fs.mkdirSync(dir+'/101/woocommerce');
          }
        }
    }

    let path = dir+'/101/woocommerce/configure.json'

    writeFile(path, 'Hello Node.js', 'utf8', ()=>{
      console.log('Success')
    });

    return res.status(200).json({response : "Success"})  
})
  
  /**
 * 404 Route
 */
 app.use((req, res, next) => {
    res.status(404).json({
      Status: 404,
      Message: "Not Found",
    });
});

module.exports = app;
