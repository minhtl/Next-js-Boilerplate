// hook useSendMessage

export const useSendMessage = () => {
  const handleSendMessage = async (message: string) => {
    await fetch(`/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
      }),
    });
  };

  return {
    handleSendMessage,
  };
};
