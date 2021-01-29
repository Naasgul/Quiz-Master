export async function postUser(user: object) {
  const response = await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
}
