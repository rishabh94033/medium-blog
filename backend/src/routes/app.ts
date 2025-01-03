import { Hono } from 'hono'
import userRouter from './user'
import postRouter from './blog'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('/*', cors())
app.route('/api/vi/user', userRouter)
app.route('/api/vi/blog', postRouter)


export default app