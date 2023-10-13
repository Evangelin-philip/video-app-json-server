// importing json-server using ES-5
const jsonServer=require('json-server')

// creating json server using json-server
const mediaPlayerServer=jsonServer.create()

// setup path/route for db.json file
const router=jsonServer.router('db.json')

// creating a middleware
const middleware =jsonServer.defaults() 

// setting port otherthan default 3000 port
const port=4000 || process.env.port

// usinging Middleware and router
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

// server listens to request from front end
mediaPlayerServer.listen(port,()=>{
    console.log(`media player server started at port ${port} !!!!!!!!!!
    waiting for request from front end`);
})