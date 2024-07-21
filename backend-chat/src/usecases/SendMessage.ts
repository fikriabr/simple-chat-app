import Message from "../entities/Message";
import MessageRepository from "../interface_adapters/MessageRepository";

class SendMessage {
  private messageRepository: MessageRepository;

  constructor(messageRepository: MessageRepository) {
    this.messageRepository = messageRepository;
  }

  execute(text: string, sender: string) {
    const message = new Message({
      text: text,
      sender: sender,
      timestamp: Date.now(),
    });
    return this.messageRepository.save(message);
  }
}

export default SendMessage;
