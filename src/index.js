const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', route);
/*
mongoose.connect("mongodb+srv://diksha:diksha@cluster0.juhgc.mongodb.net/diksha-db?retryWrites=true&w=majority",
{useNewUrlParser: true}
)

.then(() => console.log('MongoDb is connected'))
  .catch((err) => console.log(err));

  */
app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
