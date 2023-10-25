import axios from "axios";

const access_key = "wZIRQnw7XaGOcE9ERzlHhUMffk9g8Y44uSecXoVIkp4";
const secret_key = "XgPzOnzg3cGfleP0HVl73k5npwPzDQlcNRWEVGy6Zr0";

const fetchData = async (term: string) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID wZIRQnw7XaGOcE9ERzlHhUMffk9g8Y44uSecXoVIkp4",
    },
    params: {
      query: term,
      per_page: 20,
    },
  });

  return response.data.results;
};

// Public Authentication

// Most actions can be performed without requiring authentication from a specific user. For example, searching, fetching, or downloading a photo does not require a user to log in.

// To authenticate requests in this way, pass your application’s access key via the HTTP Authorization header:

// Authorization: Client-ID YOUR_ACCESS_KEY

// You can also pass this value using a client_id query parameter:

// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

// GET /search/photos

export { access_key, fetchData };
