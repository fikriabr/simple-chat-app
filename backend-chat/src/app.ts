import MessageRepository from "./interface_adapters/MessageRepository";
import SendMessage from "./usecases/SendMessage";
import ExpressServer from "./framework_drivers/ExpressServer";
import GetMessages from "./usecases/GetMessage";

const messageRepository = new MessageRepository();
const sendMessage = new SendMessage(messageRepository);
const getMessages = new GetMessages(messageRepository);

const service = new ExpressServer(sendMessage, getMessages);

export default service;
