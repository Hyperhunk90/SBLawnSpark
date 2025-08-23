const { Hono } = require('hono')
const { handle } = require('hono/netlify')

// Import your existing app
// For now, let's create a simple version
const app = new Hono()

app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Southern Buck Lawn | Professional Lawn Care & Landscaping in Walker, LA</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    </head>
    <body class="bg-gray-900 text-white">
        <div class="min-h-screen flex items-center justify-center">
            <div class="text-center">
                <h1 class="text-6xl font-bold text-green-400 mb-4">Southern Buck Lawn</h1>
                <p class="text-xl mb-8">Professional Lawn Care & Landscaping in Walker, LA</p>
                <a href="tel:225-369-4434" class="bg-green-400 text-gray-900 px-8 py-4 rounded-full text-xl font-bold hover:bg-green-300">
                    Call 225-369-4434
                </a>
            </div>
        </div>
    </body>
    </html>
  `)
})

module.exports.handler = handle(app)