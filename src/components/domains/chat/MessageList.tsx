'use client';

type Props = {
  messages: string[];
};

const MessageList = ({ messages }: Props) => {
  // render message list
  return (
    <div>
      {messages.map((message, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={`message_${index}`}>
          <div>
            <div>
              <strong>Username</strong>
            </div>
            <div>{message}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { MessageList };
