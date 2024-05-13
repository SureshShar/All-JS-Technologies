<template>
  <WrappersPaddingYWrapper>
    <WrappersSectionWrapper>
      <div
        class="w-full md:m-5 p-7 md:bg-white md:border border-gray-100 rounded-md md:shadow-md"
      >
        <form>
          <div class="grid gap-6 mb-6 grid-cols-1 md:grid-cols-2">
            <GenericFormInput
              v-for="formInput in formInputs"
              :key="formInput.label"
              :label="formInput.label"
              :type="formInput.type"
              :placeholder="formInput.placeholder"
            />
          </div>
          <div>
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Tell us a bit about you *</label
            >
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Let us know"
            ></textarea>
          </div>

          <p class="font-normal text-base text-blue-midnight w-full my-3">
            By submitting this form you agree to our terms and conditions and
            our Privacy Policy which explains how we may collect, use and
            disclose your personal information including to third parties.
          </p>

          <div class="flex md:justify-start md:items-center mt-3">
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </div>
        </form>
        <!-- class="w-full flex flex-col md:flex-row justify-between p-7 bg-white border border-gray-100 shadow-md" -->
      </div>
    </WrappersSectionWrapper>
  </WrappersPaddingYWrapper>
</template>

<script setup>
const formInputs = [
  {
    label: "Full name *",
    type: "text",
    placeholder: "Julia William",
  },
  {
    label: "Contact email *",
    type: "email",
    placeholder: "Ju@ght.example",
  },
  {
    label: "Subject *",
    type: "text",
    placeholder: "UI Designer",
  },
  {
    label: "Resume *",
    type: "text",
    placeholder: "Choose file",
  },
];
</script>
