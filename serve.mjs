import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = 3000;

// Set proper MIME types for JavaScript modules
app.use((req, res, next) => {
  if (req.path.endsWith('.js')) {
    res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
  } else if (req.path.endsWith('.css')) {
    res.setHeader('Content-Type', 'text/css; charset=utf-8');
  }
  next();
});

// Serve static files from dist directory
app.use(express.static(join(__dirname, 'dist')));

// Handle React Router - send back React's index.html file
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Southern Buck Lawn website running at http://0.0.0.0:${port}`);
  console.log(`📁 Serving files from: ${join(__dirname, 'dist')}`);
});