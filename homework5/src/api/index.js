/* eslint-disable prettier/prettier */
export async function fetchUsers() {
  const url = `https://randomuser.me/documentation#howto`;
  const res = await fetch(url);
  if (res.ok) {
    const data = await res.json();
    return data;
  }
  throw new Error("users fetch error");
}
