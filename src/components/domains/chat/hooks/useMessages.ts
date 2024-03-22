// hook useMessages that automatically fetches messages from the server ever 10 seconds

import { useEffect, useState } from 'react';

export const useMessages = () => {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch(`/api/chat`);
      const data = await response.json();
      setMessages(data);
    };

    fetchMessages();
    const interval = setInterval(fetchMessages, 10000);

    return () => clearInterval(interval);
  }, []);

  return {
    messages,
  };
};
