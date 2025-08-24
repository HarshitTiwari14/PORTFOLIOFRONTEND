import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput
} from '@chatscope/chat-ui-kit-react';
import { useState, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';   // ✅ Import draggable
import portfolioData from './data.json';
import botIcon from '/public/bot.png'; // ✅ your bot icon

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const chatbotRef = useRef(null);

  // Automatically open chatbot on page load with greeting
  useEffect(() => {
    setIsOpen(true);
    setMessages([{ sender: 'bot', message: "👋 Hi, I’m Harshit’s assistant. How may I help you today?" }]);
  }, []);

  // Close chatbot when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatbotRef.current && !chatbotRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle chatbot manually
  const toggleChat = () => {
    setIsOpen(!isOpen);

    if (!isOpen && messages.length === 0) {
      setMessages([{ sender: 'bot', message: "👋 Hi, I’m Harshit’s assistant. How may I help you today?" }]);
    }
  };

  // Handle user sending a message
  const handleSend = (text) => {
    setMessages([...messages, { sender: 'user', message: text }]);

    let reply = "❓ Sorry, I didn’t understand. Try asking about my intro, skills, projects, experience, publications, or leadership.";
    const lower = text.toLowerCase();

    if (lower.includes("intro") || lower.includes("about") || lower.includes("yourself")) {
      reply = `🙋 ${portfolioData.intro}`;
    } 
    else if (lower.includes("skill")) {
      reply = `🛠 My skills include: ${portfolioData.skills.join(", ")}.`;
    } 
    else if (lower.includes("project")) {
      reply = `📂 Here are some of my projects:\n\n${portfolioData.projects.map(p => `- ${p.title}: ${p.description}`).join("\n")}`;
    } 
    else if (lower.includes("experience") || lower.includes("work") || lower.includes("intern")) {
      reply = `💼 My experience:\n\n${portfolioData.experience.map(exp => `${exp.role} at ${exp.company} (${exp.date})\n- ${exp.details.join("\n- ")}`).join("\n\n")}`;
    } 
    else if (lower.includes("publication") || lower.includes("paper")) {
      reply = `📖 My publications:\n\n${portfolioData.publications.map(pub => `- ${pub.title}, ${pub.event} (${pub.date})`).join("\n")}`;
    } 
    else if (lower.includes("leadership") || lower.includes("position") || lower.includes("role")) {
      reply = `👨‍💼 Leadership Roles:\n\n${portfolioData.leadership.map(role => `${role.role} (${role.date})\n- ${role.details.join("\n- ")}`).join("\n\n")}`;
    } 
    else if (lower.includes("name") || lower.includes("who are you")) {
      reply = `🤖 I’m ${portfolioData.name}, and this is my portfolio assistant.`;
    }

    setMessages(prev => [...prev, { sender: 'bot', message: reply }]);
  };

  return (
    <Draggable>
      <div ref={chatbotRef} style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1001 }}>
        {/* Floating button */}
        <button
          onClick={toggleChat}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          <img src={botIcon} alt="Chatbot" style={{ width: "60px", height: "60px" }} />
        </button>

        {/* Chat window */}
        {isOpen && (
          <div style={{
            marginTop: "10px",
            width: '420px',   // ⬆️ Slightly bigger width
            height: '580px',  // ⬆️ Slightly bigger height
            borderRadius: '15px',
            overflow: 'hidden',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
            background: 'white'
          }}>
            <MainContainer>
              <ChatContainer>
                <MessageList>
                  {messages.map((msg, idx) => (
                    <Message
                      key={idx}
                      model={{
                        message: msg.message,
                        sender: msg.sender,
                        direction: msg.sender === 'user' ? 'outgoing' : 'incoming'
                      }}
                    />
                  ))}
                </MessageList>
                <MessageInput placeholder="Ask me anything about Harshit..." onSend={handleSend} />
              </ChatContainer>
            </MainContainer>
          </div>
        )}
      </div>
    </Draggable>
  );
};

export default Chatbot;
