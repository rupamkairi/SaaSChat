export type CreateMessageDTO = {
  text: string;
  user_id: number;
  chat_id: number;
};

export type FindMessageDTO = {
  user_id: number;
  chat_id: number;
};
