import { useEffect, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";

interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: number;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState<string>("");
  const [sender, setSender] = useState<string>("");

  const socket = io("http://localhost:3001");

  const fetchMessages = async () => {
    try {
      const response = await axios.get("http://localhost:3001/messages");
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  useEffect(() => {
    fetchMessages();

    socket.on("message", (newMessage: Message) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  const clearInput = () => {
    setText("");
  };

  const sendMessage = async () => {
    try {
      await axios.post("http://localhost:3001/messages", { text, sender });
      clearInput();
      fetchMessages();
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Simple Chat</h1>
      <div className="w-full max-w-md p-4 bg-white rounded shadow-md">
        {messages.map((msg, index) => (
          <div key={index} className="border-b border-gray-200 py-2">
            <strong className="block text-gray-700">{msg.sender}:</strong>
            <span className="block text-gray-600">{msg.text}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 w-full max-w-md">
        <input
          type="text"
          value={sender}
          onChange={(e) => setSender(e.target.value)}
          placeholder="Your Name"
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Message"
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <button
          onClick={sendMessage}
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
