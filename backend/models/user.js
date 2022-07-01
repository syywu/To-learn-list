import { query } from "../db/index.js";

/*
{"given_name":"Samantha",
"family_name":"Wu",
"nickname":"samanthayywu",
"name":"Samantha Wu",
"picture":"https://lh3.googleusercontent.com/a-/AOh14GhHZ_QorN7X6NmRHQlufdiFlETK-qjK9HsNbYUflQ=s96-c",
"locale":"en",
"updated_at":"2022-06-28T14:54:26.135Z",
"email":"samanthayywu@gmail.com",
"email_verified":true,
"sub":"google-oauth2|113819939380756721762"}
*/

// when login/register- insert into user table: name, email, sub?

// get user
export async function getUser() {
  const res = await query(`SELECT * from list`);
  return res.rows[0];
}

export async function postSubject(subject) {
  const res = await query(`INSERT INTO list (subject) VALUES ($1)`, [subject]);
  return res.rows;
}

export async function deleteSubject(id) {
  const res = await query(`DELETE FROM list WHERE id = $1`, [id]);
  return res.rows;
}
