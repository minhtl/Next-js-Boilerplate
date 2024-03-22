const messages: string[] = ['Hello, world!'];

export const POST = async (request: Request) => {
  const json = await request.json();
  messages.push(json.message);
  return new Response(null, { status: 200 });
};

export const GET = async (_request: Request) => {
  return new Response(JSON.stringify(messages), { status: 200 });
};
