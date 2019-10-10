const express = require('express');
const app = express();
const system = require('./system/index');

app.listen(process.env.app.port, () => {
  console.log(`App run on port ${process.env.app.port}`);
});
