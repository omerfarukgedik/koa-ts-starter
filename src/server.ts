import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import logger from "koa-logger";
import healthCheck from "./routes/healthCheck";
import { port } from "./config";
const app = new Koa();

app.use(bodyParser());
app.use(
    cors({
        origin: "*"
    })
);
app.use(logger());
app.use(healthCheck.routes());

const server = app
    .listen(port, async () => {
        console.log(`Server listening on port: ${port}`);
    })
    .on("error", err => {
        console.error(err);
    });

export default server;
