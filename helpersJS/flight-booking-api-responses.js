// This function behaive like a api call it return whatever reponse after 2 second
export function dummyApi(response) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(response)
    }, 2000)
  })
}

// Usage example:
dummyApi("Hello World").then((res) => {
  console.log(res); // Outputs: Hello World
});


// https://api.example.com/user/78/customer   APi POST call

export const payload1 = {}

export const apiResponse1 = { }


