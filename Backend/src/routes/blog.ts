import { Hono } from "hono";
import { Prisma, PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'

const postRouter = new Hono<{
    Bindings:{
        DATABASE_URL: string,
        JWT_SECRET: string,
    },
    Variables:{
        userId:string,
    }
}>();

postRouter.use('/*', async (c, next) => { // top level middleware which run before all the routes api/vi/blog

    const jwt = c.req.header('Authorization');
    if (!jwt) {
        c.status(401);
        return c.json({ error: "unauthorized" });
    }
    const token = jwt.split(' ')[1]; // token is in form of "bearer jwtToken"
    const payload = await verify(token, c.env.JWT_SECRET);
    if (!payload) {
        c.status(401);
        return c.json({ error: "unauthorized" });
    }
    c.set('userId', payload.id as string);

    await next();
  })
postRouter.post("/check", (c)=>{
  return c.text("hi")
})
  postRouter.post("/", async (c) => {
    
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
   try{
    const userId= c.get("userId")
    const body = await c.req.json();
    const post= await prisma.post.create({
        data:{
        title:body.title,
        content:body.content,
        authorId: userId,
        published:true
  }})

  return c.json({
    messgae:"Post Published Sucessfully",
    id:post.id
  })
}catch(err){
     c.status(403);
     return c.json({
        message:"Invalid"
    })
  }

});
postRouter.get("/me/bulk", async(c) => { //to get all the blogs for a specific user
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
   try{
    const userId= c.get("userId")
    const post= await prisma.post.findMany({
        where: {
            authorId: userId,
          },
  })

  return c.json({
    post
  })
}catch(err){
     c.status(403);
     return c.json({
        message:"Error while fetching"
    })
  }
    
});
postRouter.get("/bulk", async(c) => { //to get all the blogs ffor all user for landing page
  const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
 try{
  const post= await prisma.post.findMany({})

return c.json({
  post
})
}catch(err){
   c.status(403);
   return c.json({
      message:"Error while fetching"
  })
}
  
});
postRouter.get("/:id", async (c) => { // to get all the post for a specific id
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
   try{
    const userId= c.get("userId")
    const body = await c.req.json();
    const post= await prisma.post.findUnique({
        where: {
            id: c.req.param("id")
          },
  })

  return c.json({
    content: post?.content,
    title: post?.title,
    published:post?.published,
    autherId: post?.authorId
  })
}catch(err){
     c.status(403);
     return c.json({
        message:"Error while fetching"
    })
  }
});

postRouter.put("/", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
   try{
    const userId= c.get("userId")
    const body = await c.req.json();
    const post= await prisma.post.update({
        where: {
            id: body.id,
          },
          data: {
            content: body.content,
            title: body.title
          },
  })

  return c.json({
    messgae:"Post Updated Sucessfully"
  })
}catch(err){
     c.status(403);
     return c.json({
        message:"Invalid"
    })
  }
});
 export default postRouter;