// Function Used to store timeStamp in local storage
export function storeTimeStamp(expiresIn) {
  const currentTime = new Date().getTime();
  const expirationTime = currentTime + expiresIn * 1000; // Convert expiresIn to milliseconds

  localStorage.setItem("timeStamp", expirationTime);
}

// Validator to check for timeStamp validation
export function isTimeStampValid() {
  const expirationTime = localStorage.getItem("timeStamp");

  // 1. Is timeStamp exist in store
  if (!expirationTime) return false; // No timeStamp or expiration time found

  // 2. If exist then check for validation
  const currentTime = new Date().getTime();
  if (currentTime > expirationTime) return false; // Token has expired

  return true; // Token is still valid
}

// Check if the timeStamp is valid
if (isTimeStampValid()) {
  console.log("timeStamp is valid.");
} else {
  storeTimeStamp(3600);
  console.log("timeStamp has expired.");
}
