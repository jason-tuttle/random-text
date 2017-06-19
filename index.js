const express = require('express');
const app = express();

const loremIpsum = require('lorem-ipsum')
    , output = loremIpsum({
      count: 3,
      units: 'paragraphs',
      format: 'html'
    });

app.get('/lorem', function(req, res) {
  res.send(output);
});

app.listen(3000, function() {
  console.log("Successfully started express application!");
});
