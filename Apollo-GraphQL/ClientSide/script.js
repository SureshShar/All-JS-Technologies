console.log("Script just run");

async function fetchGraphQl() {
  const response = await fetch("http://localhost:9000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: "query { greeting, name, date, description }",
    }),
  });

  const { data } = await response.json();
  console.log(data);

  return data;
}

fetchGraphQl().then((data) => {
  document.getElementById("name").textContent = data.name;
  document.getElementById("date").textContent = data.date;
  document.getElementById("greeting").textContent = data.greeting;
  document.getElementById("description").textContent = data.description;
});
