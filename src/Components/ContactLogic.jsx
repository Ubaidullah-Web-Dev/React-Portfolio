// ContactLogic.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const ContactContext = createContext();

export function ContactProvider({ children }) {
    const [messages, setMessages] = useState([]);

    // Load from localStorage
    useEffect(() => {
        const saved = localStorage.getItem("contactMessages");
        if (saved) setMessages(JSON.parse(saved));
    }, []);

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem("contactMessages", JSON.stringify(messages));
    }, [messages]);

    // Add message
    const addMessage = (msg) => {
        const newMessage = {
            id: Date.now(),
            ...msg,
        };

        setMessages((prev) => [...prev, newMessage]);
        toast.success("Message Added!");
    };

    // Delete
    const deleteMessage = (id) => {
        setMessages((prev) => prev.filter((m) => m.id !== id));
        toast.error("Message Deleted!");
    };

    return (
        <ContactContext.Provider value={{ messages, addMessage, deleteMessage }}>
            {children}
        </ContactContext.Provider>
    );
}

// Hook for consuming (inside Contact.jsx)
export function useContactLogic() {
    return useContext(ContactContext);
}
