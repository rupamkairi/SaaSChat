import { Client, mapping } from "cassandra-driver";

export const client = new Client({
  keyspace: "saaschat",
  contactPoints: ["127.0.0.1"],
  localDataCenter: "datacenter1",
});

export const mapper = new mapping.Mapper(client, {
  models: { Messages: { tables: ["messages"], keyspace: "saaschat" } },
});

// try {
//   await client.connect();
//   console.log(`[cassandra] connected!`);
// } catch (error) {
//   console.log(`[cassandra] couldn't connect...`);
// }
