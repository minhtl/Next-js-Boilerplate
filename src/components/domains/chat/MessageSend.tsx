'use client';

import { useState } from 'react';

type Props = {
  onSend: (message: string) => void;
};

const MessageSend = ({ onSend }: Props) => {
  // render textbox and send button
  const [message, setMessage] = useState('');
  const sendMessage = () => {
    onSend(message);
    setMessage('');
  };

  return (
    <form onSubmit={sendMessage}>
      <input
        type="text"
        value={message}
        onChange={(event: any) => setMessage(event.target.value)}
        width={200}
        className="mt-2 appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none focus:ring focus:ring-blue-300/50"
      />
      <button
        type="submit"
        className="rounded bg-blue-500 px-5 py-1 font-bold text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300/50"
      >
        Send
      </button>
    </form>
  );
};

export { MessageSend };
