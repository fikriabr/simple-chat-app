interface MessageProp {
  id?: string;
  text: string;
  sender: string;
  timestamp: number;
}
class Message {
  id: string;
  text: string;
  sender: string;
  timestamp: number;

  constructor({ id, text, sender, timestamp }: MessageProp) {
    this.id = id || Math.random().toString(36).substring(7); // Generate a simple random ID
    this.text = text;
    this.sender = sender;
    this.timestamp = timestamp;
  }
}

export default Message;
