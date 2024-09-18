export type CreateMessageDTO = {
  text: string;
  user_id: number;
  chat_id: number;
};

export type FindMessagesDTO = {
  message_id?: number;
  chat_id: number;
  team_id?: number;
  user_id?: number;
};

export type FindMessageDTO = {
  message_id: number;
  chat_id?: number;
  team_id?: number;
  user_id?: number;
};
