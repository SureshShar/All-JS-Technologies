<template>
  <div class="paddingY sectionWrapper">
    <div
      class="flex flex-col justify-center items-center w-full md:w-4/5 mx-auto"
    >
      <p class="paragraph text-center">
        These Website Standard Terms and Conditions written on this webpage
        shall manage your use of our website, Vir Consultants accessible at
        virconsultants.com.
      </p>
      <p class="paragraph text-center">
        These Terms will be applied fully and affect to your use of this
        Website. By using this Website, you agreed to accept all terms and
        conditions written in here. You must not use this Website if you
        disagree with any of these Website Standard Terms and Conditions
      </p>
      <p class="paragraph text-center">
        Minors or people below 18 years old are not allowed to use this Website.
      </p>
    </div>

    <div
      class="flex flex-col justify-center items-center md:justify-start md:items-start"
    >
      <h2 class="h2Heading py-8 text-start">Intellectual Property Rights</h2>

      <p class="paragraph text-center md:text-start">
        Other than the content you own, under these Terms, Vir Consultants
        and/or its licensors own all the intellectual property rights and
        materials contained in this Website.
      </p>
      <p class="paragraph text-center md:text-start">
        You are granted limited license only for purposes of viewing the
        material contained on this Website.
      </p>

      <h4 class="h4Heading text-center md:text-start py-3">Restrictions</h4>
      <p class="paragraph text-center md:text-start">
        You are specifically restricted from all of the following:
      </p>

    <GenericListRenderer :itemsList="itemList" imgSrc="/icons/circleCheckIcon.svg" class="py-3"/>

      <p class="paragraph text-center md:text-start">
        Certain areas of this Website are restricted from being access by you
        and Vir Consultants may further restrict access by you to any areas of
        this Website, at any time, in absolute discretion. Any user ID and
        password you may have for this Website are confidential and you must
        maintain confidentiality as well.
      </p>

      <GenericTermAndConditionBlock
        title="Your Content"
        paragraph1="In these Website Standard Terms and Conditions, “Your Content” shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant Vir Consultants a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media."
        paragraph2="Your Content must be your own and must not be invading any third-party’s rights. Vir Consultants reserves the right to remove any of Your Content from this Website at any time without notice."
      />
      <GenericTermAndConditionBlock
        title="Your Privacy"
        paragraph1="Please read Privacy Policy."
      />
      <GenericTermAndConditionBlock
        title="No warranties"
        paragraph1="This Website is provided “as is,” with all faults, and Vir Consultants express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you."
      />
      <GenericTermAndConditionBlock
        title="Limitation of liability"
        paragraph1="In no event shall Vir Consultants, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract.  Vir Consultants, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website."
      />
      <GenericTermAndConditionBlock
        title="Indemnification"
        paragraph1="You hereby indemnify to the fullest extent Vir Consultants from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms."
      />
      <GenericTermAndConditionBlock
        title="Severability"
        paragraph1="If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein."
      />
      <GenericTermAndConditionBlock
        title="Variation of Terms"
        paragraph1="Vir Consultants is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis."
      />
      <GenericTermAndConditionBlock
        title="Assignment"
        paragraph1="The Vir Consultants is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms."
      />
      <GenericTermAndConditionBlock
        title="Entire Agreement"
        paragraph1="These Terms constitute the entire agreement between Vir Consultants and you in relation to your use of this Website, and supersede all prior agreements and understandings."
      />
      <GenericTermAndConditionBlock
        title="Governing Law & Jurisdiction"
        paragraph1="These Terms will be governed by and interpreted in accordance with the laws of the State of in, and you submit to the non-exclusive jurisdiction of the state and federal courts located in in for the resolution of any disputes."
      />
    </div>
  </div>
</template>

<script setup>
const itemList = [
    "Publishing any Website material in any other media;",
    "Selling, sublicensing and/or otherwise commercializing any Website material;",
    "Publicly performing and/or showing any Website material;",
    "Using this Website in any way that is or may be damaging to this Website;",
    "Using this Website in any way that impacts user access to this Website;",
    "Using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;",
    "Engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;",
    "Using this Website to engage in any advertising or marketing.",
]
</script>
