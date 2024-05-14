import HyperExpress from 'hyper-express'
import dotenv from "dotenv"
import morgan from "morgan"
import bodyParser from 'body-parser'
import cors from "cors"

import userRouter from "./router/user.router.js"
import featureRouter from "./router/feature.route.js"

const app = new HyperExpress.Server()
const PORT = process.env.PORT || 5001

dotenv.config()
app.use(cors())

app.use(bodyParser.urlencoded({extended: true}))
app.use(morgan('dev'))

// app.get("/", { middlewares: [auth_middleware] }, async (_, r) => {
//     r.redirect('/users')
// })

app.use("/users", userRouter)
app.use('/features', featureRouter)

app.listen(PORT)
    .then((socket) => console.log(`Webserver started on http://localhost:${PORT}`))
    .catch((error) => console.log(`Failed to start webserver on http://localhost:${PORT}`));