export const addStudents = (data) => {
  const url = `${process.env.REACT_APP_API}/student`;
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
      console.log("data");
      return data.json();
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

export const allStudents = () => {
  const url = `${process.env.REACT_APP_API}/student`;
  return fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      secret_key:process.env.REACT_APP_SECRET_KEY,
      "Content-Type": "application/json",
    },
  })
    .then((data) => {
      console.log("data", data);
      return data.json();
    })
    .catch((error) => {
      throw error;
    });
};
