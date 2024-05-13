<template>
  <div class="sectionWrapper paddingY">
    <div
      class="w-full md:m-5 p-7 bg-white md:border border-gray-100 rounded-md md:shadow-md"
    >
      <form>
        <div class="grid gap-3 md:gap-6 mb-6 grid-cols-1 md:grid-cols-4">
          <GenericFormInput
            v-for="formInput in formInputs"
            :key="formInput.label"
            v-model="formInputsValues[formInput.identifier]"
            :label="formInput.label"
            :type="formInput.type"
            :placeholder="formInput.placeholder"
          />
        </div>
        <div class="grid gap-3 md:gap-6 mb-6 grid-cols-1 md:grid-cols-2">
          <GenericSelectInput
            label="Select Solutions"
            :options="options"
            v-model="selectedSolution"
          />
          <!-- message input section -->
          <GenericFormInput
            v-model="message"
            :label="messageFormInputKeys.label"
            :type="messageFormInputKeys.type"
            :placeholder="messageFormInputKeys.placeholder"
          />
        </div>

        <!-- Checkbox start here -->
        <h3 class="text-base font-medium text-blue-midnight mb-4">
          Categories
        </h3>
        <div class="grid gap-2 mb-6 grid-cols-1 md:grid-cols-4">
          <GenericCheckbox
            v-for="(checkbox, index) in checkBoxInputs"
            :key="index"
            v-model="checkBoxModalValue[checkbox.identifier]"
            :label="checkbox.label"
          />
        </div>
        <div class="flex md:justify-start md:items-center mt-3">
          <button
            class="text-white font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center"
            :class="
              disableSubmitButton
                ? 'bg-gray-600'
                : 'bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
            "
            @click="submitData"
            :disabled="disableSubmitButton"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { FORM_DATA_SUBMIT_API } from "~/helpers/constants";

const inputValueMap = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  companyName: "",
  jobTitle: "",
  countryName: "",
  stateName: "",
};
const checkBoxValueMap = {
  technologyEngineering: false,
  healthcare: false,
  medicalDevices: false,
  pharma_LifeScience: false,
  manufacturing: false,
  bankingFinance: false,
  ERP: false,
  insurance: false,
  telecom: false,
};

const formInputsValues = ref({ ...inputValueMap });
const message = ref("");
const selectedSolution = ref("Direct Hire Solutions");
const checkBoxModalValue = ref({ ...checkBoxValueMap });

const formInputs = [
  {
    identifier: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "Julia",
  },
  {
    identifier: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "William",
  },
  {
    identifier: "email",
    label: "Email",
    type: "email",
    placeholder: "Ju@ght.example",
  },
  { identifier: "phone", label: "Phone", type: "tel", placeholder: "000" },
  {
    identifier: "companyName",
    label: "Your Company",
    type: "text",
    placeholder: "Write here",
  },
  {
    identifier: "jobTitle",
    label: "Job Title",
    type: "text",
    placeholder: "Title",
  },
  {
    identifier: "countryName",
    label: "Country Name",
    type: "text",
    placeholder: "Write here",
  },
  {
    identifier: "stateName",
    label: "State",
    type: "text",
    placeholder: "Write here",
  },
];
const messageFormInputKeys = {
  label: "Message",
  type: "text",
  placeholder: "Write here",
};
const options = [
  "Direct Hire Solutions",
  "Temp/ Contingent Staffing Solutions",
  "Payroll Solutions",
  "SOW",
  "EOR",
  "RPO",
];
const checkBoxInputs = [
  { label: "Technology & Engineering", identifier: "technologyEngineering" },
  { label: "Healthcare", identifier: "healthcare" },
  { label: "Medical Devices", identifier: "medicalDevices" },
  { label: "Pharma/Life Science", identifier: "pharma_LifeScience" },
  { label: "Manufacturing", identifier: "manufacturing" },
  { label: "Banking & Finance", identifier: "bankingFinance" },
  { label: "ERP", identifier: "ERP" },
  { label: "Insurance", identifier: "insurance" },
  { label: "Telecom", identifier: "telecom" },
];

const disableSubmitButton = computed(
  () =>
    formInputsValues.value.firstName === "" ||
    formInputsValues.value.phone === "" ||
    formInputsValues.value.email === "" ||
    formInputsValues.value.companyName === "" ||
    formInputsValues.value.jobTitle === "" ||
    formInputsValues.value.countryName === "" ||
    formInputsValues.value.stateName === ""
);

/**
 * Set form data to local storage.
 */
function setData() {
  localStorage.setItem(
    "contactUsForm",
    JSON.stringify({
      formInputsValues: { ...formInputsValues.value },
      message: message.value,
      selectedSolution: selectedSolution.value,
      selectedCategories: { ...checkBoxModalValue.value },
    })
  );
}

/**
 * Reset form data.
 */
function resetData() {
  formInputsValues.value = { ...inputValueMap };
  message.value = "";
  selectedSolution.value = "Direct Hire Solutions";
  checkBoxModalValue.value = { ...checkBoxValueMap };
}

/**
 * Get form data from local storage.
 */
function getData() {
  let contactUsFormData = null;
  const careerFormLocalStorageData = localStorage.getItem("contactUsForm");

  if (careerFormLocalStorageData) {
    contactUsFormData = JSON.parse(careerFormLocalStorageData);

    formInputsValues.value = contactUsFormData.formInputsValues;
    message.value = contactUsFormData.message;
    selectedSolution.value = contactUsFormData.selectedSolution;
    checkBoxModalValue.value = contactUsFormData.selectedCategories;
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

  if (!disableSubmitButton) {
    alert("Can't submit form. Please fill in all the required inputs.");
    return;
  }

  const selectedCategories = Object.entries({
    ...checkBoxModalValue.value,
  }).reduce((acc, [key, value]) => {
    if (value === true) {
      acc.push(key);
    }
    return acc;
  }, []);

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      formName: "Contact us Form",
      ...formInputsValues.value,
      message: message.value,
      selectedSolution: selectedSolution.value,
      selectedCategories,
    }),
  };

  fetch(FORM_DATA_SUBMIT_API, requestOptions)
    .then(() => {
      alert("Success! Your data has been submitted.");
      resetData();
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

onMounted(() => {
  getData();
  window.addEventListener("beforeunload", () => setData());
});

onUnmounted(() => {
  setData();
});
</script>
