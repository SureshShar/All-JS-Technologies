<template>
  <div class="paddingY sectionWrapper">
    <div class="flex flex-col justify-center items-center w-full md:w-4/5 mx-auto">
      <p class="paragraph text-center">
        Thank you for your inquiry. As a consultancy company, protecting the
        privacy and confidentiality of our clients and their information is of
        utmost importance to us.
      </p>
      <p class="paragraph text-center">
        Here is an example of a privacy policy for a consultancy company that
        you can use as a starting point:
      </p>
    </div>

    <div
      class="flex flex-col justify-center items-center md:justify-start md:items-start"
    >
      <h2 class="h2Heading py-8 text-start">Privacy Policy</h2>

      <GenericPrivacyPolicyListSection
        title="Information we collect"
        paragraph=" We may collect personal information from clients and potential clients
          when they contact us for services or sign up for our newsletter. The
          personal information we collect may include name, email address, phone
          number, and other information relevant to the services we provide."
      />
      <GenericPrivacyPolicyListSection
        title="How we use your information"
        paragraph="We use the information we collect to provide consultancy services to our clients, communicate with them about their projects, and improve our services. We may also use the information to send periodic emails or newsletters, if the client has given their consent to receive them."
      />
      <GenericPrivacyPolicyListSection
        title="Information sharing"
        paragraph="We do not sell or rent any personal information to third parties. We may share information with trusted partners who assist us in providing services to our clients. We may also share information if required by law, or to protect our rights, property, or safety."
      />
      <GenericPrivacyPolicyListSection
        title="Data security"
        paragraph="We take data security seriously and have implemented reasonable measures to protect against unauthorized access, alteration, disclosure, or destruction of personal information."
      />
      <GenericPrivacyPolicyListSection
        title="Your choices"
        paragraph="Clients and potential clients have the right to opt-out of receiving promotional emails or newsletters at any time. They may also request to access, update, or delete their personal information by contacting us directly."
      />
      <GenericPrivacyPolicyListSection
        title="Changes to this policy"
        paragraph="We reserve the right to modify or update this privacy policy at any time. Any changes will be posted on our website with the updated date. <br/> If you have any questions or concerns about this privacy policy, please contact us at <a href='mailto:Info@virconsultants.com' class='hover:underline'>Info@virconsultants.com</a>"
      />
    </div>
  </div>
</template>
