import Message from "../entities/Message";
import MessageRepository from "../interface_adapters/MessageRepository";

class GetMessages {
  private messageRepository: MessageRepository;

  constructor(messageRepository: MessageRepository) {
    this.messageRepository = messageRepository;
  }

  execute(): Message[] {
    return this.messageRepository.findAll();
  }
}

export default GetMessages;
