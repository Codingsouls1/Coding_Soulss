export const createAllEvents = (data) => {
  const url = `${process.env.REACT_APP_API}/event`;
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
      return data.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const getAllEvents = () => {
  const url = `${process.env.REACT_APP_API}/event`;
  return fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      secret_key:process.env.REACT_APP_SECRET_KEY,
      "Content-Type": "application/json",
    },
  })
    .then((data) => {
      return data.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const editAllEvents = (eventId, alldata) => {
  const url = `${process.env.REACT_APP_API}/event/${eventId}`;
  return fetch(url, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      secret_key:process.env.REACT_APP_SECRET_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(alldata),
  })
    .then((data) => {

      return data.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const deleteAllEvents = (eventId) => {
  const url = `${process.env.REACT_APP_API}/event/${eventId}`;
  return fetch(url, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      secret_key:process.env.REACT_APP_SECRET_KEY,
      "Content-Type": "application/json",
    },
  })
    .then((data) => {
    
      return data.json();
    })
    .catch((error) => {
      throw error;
    });
};
