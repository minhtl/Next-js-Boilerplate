'use client';

import { useMessages } from './hooks/useMessages';
import { useSendMessage } from './hooks/useSendMessage';
import { MessageList } from './MessageList';
import { MessageSend } from './MessageSend';

const ChatWindow = () => {
  const { messages } = useMessages();
  const { handleSendMessage } = useSendMessage();

  return (
    <>
      <MessageList messages={messages} />
      <MessageSend onSend={handleSendMessage} />
    </>
  );
};

export default ChatWindow;
