const express = require('express');
const { networkInterfaces } = require('os');
const app = express();
const port = 8000;
const nets = networkInterfaces();
app.use(`/api/v1/ip`, (_req, res, next) => {
  try {
    const results = {};
    for (const name of Object.keys(nets)) {
      for (const net of nets[name]) {
        // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
        if (net.family === 'IPv4' && !net.internal) {
          if (!results[name]) {
            results[name] = [];
          }
          results[name].push(net.address);
        }
      }
    }
    res.status(200).json({data: results});
  } catch(err) {
    next(err);
  }
})

app.use((err, _req, res, _next) => {
  console.log(err.message);
  res.status(500).json({message: "server error"});
})

app.listen(port, () => {
  console.log(`App is listening at port ${port}`);
})