const API_URL = import.meta.env.VITE_API;
export default API_URL;

export async function post_request(url, obj) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Something went wrong");
  }
}

export async function get_request(url) {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-hasura-admin-secret": "c2t5dGVjaGRi",
    },
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return `Error fetching data: ${error.message}`;
  }
}

export async function put_request(url, obj) {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  };
  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Unable to complete request");
    }
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
}
