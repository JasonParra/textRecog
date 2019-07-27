const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');

var Tesseract = require('tesseract.js');

let image = "./assets/test.png"

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
      var image = fs.readFileSync(
        __dirname + '/assets/' + "test.png",
        {
          encoding: null
        }
      );
      Tesseract.recognize(image)
        .progress(function(p) {
          console.log('progress', p);
        })
        .then(function(result) {
          res.send(result.html);
        });
    });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
