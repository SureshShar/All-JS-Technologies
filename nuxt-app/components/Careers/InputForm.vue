<template>
  <div class="sectionWrapper relative flex justify-center items-center">
    <WrappersBannerAbsoluteWrapper>
      <form class="mx-2 p-7 bg-white border border-gray-100 shadow-md mt-12" @submit.prevent="submitData">
        <div class="grid gap-6 mb-6 grid-cols-1 md:grid-cols-4">
          <div>
            <GenericFormInput
              v-model="name"
              label="Full Name*"
              type="text"
              placeholder="your name"
            />
            <!-- Display error message for Full Name input field if submitted and invalid -->
            <span v-if="submitted && (!isValidName || name.trim() === '')" class="text-red-500 text-xs mt-2">Full Name is required</span>
          </div>
          
          <div>
            <GenericFormInput
              v-model="phone"
              label="Phone*"
              type="tel"
              placeholder="phone"
            />
            <!-- Display error message for Phone input field if submitted and invalid -->
            <span v-if="submitted && (!isValidPhone || phone.trim() === '')" class="text-red-500 text-xs">Phone is required and must be 10 digits</span>
          </div>

          <div>
            <GenericFormInput
              v-model="email"
              label="Contact Email*"
              type="email"
              placeholder="email"
            />
            <!-- Display error message for Email input field if submitted and invalid -->
            <span v-if="submitted && (!isValidEmail || email.trim() === '')" class="text-red-500 text-xs">Valid email address is required</span>
          </div>
          
          <div>
            <GenericFormInput
              v-model="role"
              label="Desired Role*"
              type="text"
              placeholder="Desired Role"
            />
            <!-- Display error message for Desired Role input field if submitted and invalid -->
            <span v-if="submitted && (!isValidRole || role.trim() === '')" class="text-red-500 text-xs">Desired Role is required</span>
          </div>
        </div>
        <div class="grid gap-6 mb-6 grid-cols-1 md:grid-cols-2">
          <div>
            <GenericFormInput
              v-model="message"
              label="Tell us a bit about you"
              type="text"
              placeholder="Message..."
            />
            <!-- Display error message for Tell us a bit about you input field if submitted and invalid -->
            <span v-if="submitted && (!isValidMessage || message.trim() === '')" class="text-red-500 text-xs">Message is required</span>
          </div>
          <div class="flex md:justify-end md:items-center">
            <div>
              <button
                class="text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                :class="disableSubmitButton ? 'bg-gray-600' : ''"
                type="submit"
              >
                Submit
              </button>
              <br/>
              <!-- Display success message if form submitted successfully -->
              <span v-if="isFormSubmittedSuccessfully" class="text-green-500 mt-4 text-xs ml-2">Form submitted successfully!</span>
            </div>
          </div>
        </div>
      </form>


    </WrappersBannerAbsoluteWrapper>
  </div>
</template>
<script setup>
import { FORM_DATA_SUBMIT_API } from "~/helpers/constants";

const name = ref("");
const phone = ref("");
const email = ref("");
const role = ref("");
const message = ref("");

let submitted = ref(false); // Track form submission status
let isFormSubmittedSuccessfully = ref(false); // Track form submission success

// Define computed properties to validate form inputs
const isValidName = computed(() => /^[A-Za-z\s]+$/.test(name.value));
// Modify isValidPhone computed property to check if phone is not empty and consists of exactly 10 digits
const isValidPhone = computed(() => {
  const phoneRegex = /^\d{10}$/;
  return phone.value.trim() !== '' && phoneRegex.test(phone.value.trim());
});
const isValidEmail = computed(() => /\S+@\S+\.\S+/.test(email.value));
const isValidRole = computed(() => /^[A-Za-z\s]+$/.test(role.value));
const isValidMessage = computed(() => /^[A-Za-z\s]+$/.test(message.value));

/**
 * Set form data to local storage.
 */
function setData() {
  localStorage.setItem(
    "careerForm",
    JSON.stringify({
      name: name.value,
      phone: phone.value,
      email: email.value,
      role: role.value,
      message: message.value,
    })
  );
}

/**
 * Reset form data.
 */
function resetData() {
  name.value = "";
  phone.value = "";
  email.value = "";
  role.value = "";
  message.value = "";
}

/**
 * Get form data from local storage.
 */
function getData() {
  let careerForm = null;
  const careerFormLocalStorageData = localStorage.getItem("careerForm");

  if (careerFormLocalStorageData) {
    careerForm = JSON.parse(careerFormLocalStorageData);
    name.value = careerForm.name;
    phone.value = careerForm.phone;
    email.value = careerForm.email;
    role.value = careerForm.role;
    message.value = careerForm.message;
  } else {
    resetData();
  }
}

/**
 * Submit form data.
 *
 * @param {Event} event - The submit event.
 */
function submitData(event) {
  event.preventDefault();

  // Mark the form as submitted
  submitted.value = true;

  // Check if all inputs are valid before submitting
  if (!isValidName.value || !isValidPhone.value || !isValidEmail.value || !isValidRole.value || !isValidMessage.value) {
    return; // Don't submit if the inputs are invalid
  }

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      formName: "Career form",
      name: name.value,
      phone: phone.value,
      email: email.value,
      role: role.value,
      message: message.value,
    }),
  };

  fetch(FORM_DATA_SUBMIT_API, requestOptions)
    .then(() => {
      // Display success message and reset form data upon successful form submission
      isFormSubmittedSuccessfully.value = true;
      setTimeout(() => {
        isFormSubmittedSuccessfully.value = false;
        resetData();
        submitted.value = false; // Reset the submitted flag
      }, 3000); // Reset success message after 3 seconds
    })
    .catch((error) => {
      alert(
        "Sorry, there was an error processing your request. Please refresh the page and try again."
      );
      console.log(
        "Sorry, there was an error processing your request. Please refresh the page and try again.",
        error
      );
    });
}

// Call resetData function when the component is mounted to ensure fields are cleared upon refresh
onMounted(() => {
  getData();
  window.addEventListener("beforeunload", () => setData());
  resetData(); // Clear form fields upon component mount
});

onUnmounted(() => {
  setData();
});
</script>