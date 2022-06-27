import { query } from "../index.js";

async function deleteTable() {
  const res = await query(`DROP TABLE IF EXISTS list`);
  console.log(res);
}
deleteTable();
