const express = require('express');
const app = express();

require('./system').init(app);

app.listen(process.env.app.port, () => {
  console.log(`App run on port ${process.env.app.port}`);
});
