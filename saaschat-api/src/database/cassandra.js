import { Client as cassandraClient } from "cassandra-driver";

export const client = new cassandraClient({
  keyspace: "saaschat",
  contactPoints: ["h1"],
  localDataCenter: "datacenter1",
});

console.log(client.getState(), "Cassandra Loading");

export function fetchUsers() {
  client.connect();

  const query = "SELECT * FROM users";

  client
    .execute(query, [])
    .then((result) => console.log("User with", result.rows[0]));

  client.shutdown();
}
