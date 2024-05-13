<template>
  <div class="md:py-8">
    <WrappersSectionWrapper>
      <div class="flex flex-col items-center justify-center">
        <div class="flex flex-col md:flex-row text-center md:text-start">
          <GenericContentBlock
            v-for="cardData in cardsData"
            :key="cardData.name"
            :title="cardData.name"
            :imageSrc="cardData.imageSrc"
            :bottomParagraphText="cardData.bottomParagraphText"
          />
        </div>
      </div>
    </WrappersSectionWrapper>
  </div>
</template>

<script setup>
const cardsData = [
  {
    name: "Digital Transformation",
    imageSrc: "/images/servicesPage/technologySolutions/digital.webp",
    bottomParagraphText:
      "It’s no secret that digital transformation requires change. Companies evaluate everything they do, from internal systems to customer interactions, to stay ahead of the curve. When changing demographic needs and opportunities arise, we assist our clients in adopting new technology architectures and virtual business models in meeting those needs. We guide our clients through this transformation; we follow a three-pronged strategy and deliver the most valuable outcomes.",
  },
  {
    name: "Infra Solutions",
    imageSrc: "/images/servicesPage/technologySolutions/infra.webp",
    bottomParagraphText:
      "Infrastructure is a system or organization’s foundation or framework. It consists of physical and virtual resources that support data flow, storage, processing, analysis, and analysis. We have the project management skills to implement the best IT solution into your environment. Assisting you with implementing your solution is our number one priority, and we have a wide range of products available for any client’s requirements. Many successful projects have allowed us to achieve a high level of customer satisfaction, which we are very proud of.",
  },
  {
    name: "Cyber Security Development",
    imageSrc: "/images/servicesPage/technologySolutions/cyber.webp",
    bottomParagraphText:
      "Apps and networks can be better protected with the help of cybersecurity services. From IT security consulting to pen testing and enhancing cybersecurity, Science Soft provides end-to-end information security services that help clients reduce risks and minimize the consequences of cyberattacks. As part of our cybersecurity services, we provide a decrease in the number of security flaws in web, mobile, and desktop applications and our clients’ networks. Our well-trained experts consistently monitor their adherence to applicable regulations and standards (PCI DSS, GDPR, HIPAA).",
  },
];
</script>
