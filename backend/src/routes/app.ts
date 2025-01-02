import { Hono } from 'hono'
import userRouter from './user'
import postRouter from './blog'


const app = new Hono()


app.route('/api/vi/user', userRouter)
app.route('/api/vi/blog', postRouter)


export default app