export const adminLogin = (data) => {
  const url = `${process.env.REACT_APP_API}/login`;
  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      secret_key:process.env.REACT_APP_SECRET_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((data) => {
      console.log("data", data);
      return data.json();
    })
    .catch((error) => {
      throw error;
    });
};
