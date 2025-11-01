type GetUsersFilters = {
  limit: number;
  page: number;
};

//From bobbyhill_backend:
export const BASE_URL = "http://localhost:5000/api";
// export const  getMovies= async (filters?: GetUsersFilters) => {

//This is the better approach where the try and catch is not here and can be handled by whatever componenet
// calls getMovies();
export const getMovies = async () => {
  // Do something cool with the filters
  const response = await fetch(`${BASE_URL}/rq-test`);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch users: ${response.status} ${response.statusText}`
    );
  }
  const data = await response.json();
  return data;
};

export const postMovies = async () => {
  // Do something cool with the filters

  try {
    const response = await fetch(`${BASE_URL}/rq-test-post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: "React Hooks POST Request Example" }),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch users: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching users:", err);
    throw err;
  }
};

export const patchMovies = async () => {
  // Do something cool with the filters

  try {
    const response = await fetch(`${BASE_URL}/rq-test-post`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: "React Hooks POST Request Example" }),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch users: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching users:", err);
    throw err;
  }
};
