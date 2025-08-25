const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set proper MIME types
app.use((req, res, next) => {
  if (req.path.endsWith('.js')) {
    res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
  } else if (req.path.endsWith('.css')) {
    res.setHeader('Content-Type', 'text/css; charset=utf-8');
  }
  next();
});

// Serve static files from dist directory with proper headers
app.use(express.static(path.join(__dirname, 'dist')));

// Catch-all handler: send back React's index.html file for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Southern Buck Lawn website running at http://0.0.0.0:${port}`);
});