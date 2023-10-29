CREATE TABLE
  saaschat.messages (
    id UUID,
    content VARCHAR,
    receiver_id UUID,
    sender_id UUID,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    PRIMARY KEY (id)
  )

CREATE INDEX messages_receiver_id ON saaschat.messages (receiver_id);
CREATE INDEX messages_sender_id ON saaschat.messages (sender_id);

