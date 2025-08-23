import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { homePage } from './pages/home'
import { servicesPage } from './pages/services'
import { portfolioPage } from './pages/portfolio'
import { contactPage } from './pages/contact'
import { walkerPage } from './pages/locations/walker'
import { denhamSpringsPage } from './pages/locations/denham-springs'
import { portVincentPage } from './pages/locations/port-vincent'
import { livingstonPage } from './pages/locations/livingston'

const app = new Hono()

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))
app.use('/favicon.ico', serveStatic({ root: './public' }))

// Routes
app.get('/', (c) => homePage(c))
app.get('/services', (c) => servicesPage(c))
app.get('/portfolio', (c) => portfolioPage(c))
app.get('/contact', (c) => contactPage(c))

// Location-specific pages for SEO
app.get('/lawn-care-walker-la', (c) => walkerPage(c))
app.get('/lawn-care-denham-springs-la', (c) => denhamSpringsPage(c))
app.get('/lawn-care-port-vincent-la', (c) => portVincentPage(c))
app.get('/lawn-care-livingston-la', (c) => livingstonPage(c))

// API endpoints
app.post('/api/contact', async (c) => {
  const body = await c.req.json()
  // Here you would normally handle the contact form submission
  // For now, we'll just return success
  return c.json({ success: true, message: 'Thank you for your inquiry. We will contact you soon!' })
})

export default app