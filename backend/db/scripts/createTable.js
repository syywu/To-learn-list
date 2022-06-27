import { query } from "../index.js";

async function createListTable() {
  const res = await query(`CREATE TABLE IF NOT EXISTS list(
    user_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    subject TEXT)`);
  console.log(res.command);
}
createListTable();
