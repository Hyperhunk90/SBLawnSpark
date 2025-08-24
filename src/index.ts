import { Hono } from 'hono';
import { serveStatic } from 'hono/cloudflare-workers';

const app = new Hono();

// Serve static files from public directory
app.use('/*', serveStatic({ root: './public' }));

// API endpoint for form submissions
app.post('/api/contact', async (c) => {
    try {
        const body = await c.req.json();
        
        // Log the form submission (in production, you'd send this to a database or email service)
        console.log('Contact form submission:', body);
        
        // Return success response
        return c.json({
            success: true,
            message: 'Your request has been received. We will contact you within 24 hours.',
            data: body
        });
    } catch (error) {
        return c.json({
            success: false,
            message: 'An error occurred. Please try again later.'
        }, 500);
    }
});

// Health check endpoint
app.get('/api/health', (c) => {
    return c.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        service: 'Southern Buck Lawn Care Website'
    });
});

// Fallback to index.html for client-side routing
app.get('*', serveStatic({ path: './public/index.html' }));

export default app;