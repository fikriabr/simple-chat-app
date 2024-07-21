import Message from "../entities/Message";

class MessageRepository {
  private messages: Message[];

  constructor() {
    this.messages = [];
  }

  save(message: Message): Message {
    this.messages.push(message);
    return message;
  }

  findAll(): Message[] {
    return this.messages;
  }
}

export default MessageRepository;
