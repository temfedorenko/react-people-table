const API_URL = "https://mate-academy.github.io/react_people-table/api/people.json";

function wait(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export async function getPeople() {
  return await wait(500)
    .then(() => fetch(API_URL))
    .then((response) => response.json());
}
