export type CreateMessageDTO = {
  text: string;
  user_id: number;
  chat_id: number;
};

export type FindMessagesDTO = {
  user_id: number;
  chat_id: number;
};

// FindMessage (Single) is not a use case
