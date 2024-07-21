// backend/src/frameworks_drivers/ExpressServer.ts
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import SendMessage from "../usecases/SendMessage";
import GetMessages from "../usecases/GetMessage";

class ExpressServer {
  private app: express.Application;
  private sendMessage: SendMessage;
  private getMessages: GetMessages;
  private server: http.Server;
  private io: Server;

  constructor(sendMessage: SendMessage, getMessages: GetMessages) {
    this.sendMessage = sendMessage;
    this.getMessages = getMessages;
    this.app = express();
    this.server = this.createServer();
    this.io = this.createSocketServer();

    this.setupMiddleware();
    this.setupRoutes();
    this.setupSocketIO();
  }

  private createSocketServer() {
    const socketServer = new Server(this.server, {
      cors: {
        origin: "http://localhost:3000", // frontend url
        methods: ["GET", "POST"],
      },
    });
    return socketServer;
  }

  private setupSocketIO() {
    this.io.on("connection", (socket) => {
      console.log("a user connected");
      socket.on("disconnect", () => {
        console.log("user disconnected");
      });
    });
  }

  private createServer() {
    return http.createServer(this.app);
  }

  private setupMiddleware() {
    this.app.use(bodyParser.json());
    this.app.use(cors());
  }

  private setupRoutes() {
    this.app.post("/messages", (req: Request, res: Response) => {
      const { text, sender } = req.body;
      const message = this.sendMessage.execute(text, sender);
      this.io.emit("message", message);
      res.status(201).json(message);
    });

    this.app.get("/messages", (req: Request, res: Response) => {
      const messages = this.getMessages.execute();
      res.json(messages);
    });
  }

  listen(port: number) {
    this.server.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  }
}

export default ExpressServer;
