export async function SignUp(user) {
  const resp = await fetch(
    "https://academyofdigitalindustriesbackend.onrender.com/api/v1/auth/register",
    {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-type": "Application/json" },
    },
  );
  if (resp.ok) {
    return resp.json();
  }
  throw new Error("Error happened");
}

export async function SignIn(user) {
  const resp = await fetch(
    "https://academyofdigitalindustriesbackend.onrender.com/api/v1/auth/login",
    {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-type": "Application/json" },
    },
  );
  if (resp.ok) {
    return resp.json();
  }
  throw new Error("Error happened");
}
