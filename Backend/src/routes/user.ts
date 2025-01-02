import { Hono } from "hono";
import { Prisma, PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'

const userRouter = new Hono<{
    Bindings:{
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables:{
        userId:string,
    }
}>();



userRouter.post("/signup", async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try{
    const body = await c.req.json();
    
     const User= await prisma.user.create({
        data:{
            email: body.email,
            name: body.name,
            password:body.password
        }
     })
     const payload= await {id: User.id};
     const token= await sign(payload, c.env.JWT_SECRET)
 
     return c.json({
         message:"User created sucessfully",
         token: token
     })
    }catch(err){ // result checking weather db entry was sucessful or not
        return c.json({
            message:"Error while signing up"
        })
    }

});


userRouter.post("/signin", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
const body= await c.req.json();
const foundUser= await prisma.user.findUnique({
    where:{
        email: body.email,
        password:body.password
    }
})
if (!foundUser) {
    c.status(403);
    return c.json({ error: "user not found" });
}
const payload= await {id: foundUser.id};
     const token= await sign(payload, c.env.JWT_SECRET)
 
     return c.json({
         message:"Signed-In sucessfully",
         token: token
     })
});








export default userRouter;
