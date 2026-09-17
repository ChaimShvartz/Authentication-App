import express from "express";
import cors from "cors";
import { pathNotFoundHandler } from "./middlewares/PathNotFound.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { logger } from "./middlewares/logger.js";

const { PORT } = process.env;
const server = express();

server.use(cors(), express.json(), logger);
server.get("/health", (_req, res) => {
    res.json({ success: true, message: "I'm alive!!!" });
});

server.use(pathNotFoundHandler, errorHandler);

server.listen(PORT, () => console.log(`http://localhost:${PORT}`));
