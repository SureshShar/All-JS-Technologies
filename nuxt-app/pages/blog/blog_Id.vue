<template>
  <WrappersPaddingYWrapper>
    <WrappersSectionWrapper>
      <div class="flex flex-col justify-center items-center">
        <div
          class="w-2/3 flex flex-col justify-center items-center md:justify-start md:items-start mt-5"
        >
          <h3 class="text-blue-500 font-medium my-2">2024-02-20 17:43:22</h3>

          <GenericH2Title
            title="Know 10 most common hiring biases at the workplace and how to avoid them?"
            titleClass="text-center md:text-start text-blue-midnight mb-5"
          />
        </div>

        <img
          src="/images/blog/jobLanding.webp"
          alt="job landing page image"
          class="w-full"
        />

        <div
          class="w-2/3 flex flex-col justify-center items-center md:justify-start md:items-start mt-5"
        >
          <GenericParagraph
            sparagraphText="It’s critical to comprehend how bias impacts us at work, particularly when it comes to recruiting choices. Learn what prejudice is, what sorts of bias there are, the dangers of bias in the workplace and throughout the recruiting process, and how to deal with bias in your company."
            paragraphClass="text-center md:text-start py-2"
          />
          <GenericH2Title
            :title="title1"
            titleClass="text-center md:text-start text-blue-midnight mb-5"
          />
          <GenericParagraph
            :paragraphText="paragraph1"
            paragraphClass="text-center md:text-start py-2"
          />
          <h4 class="text-center md:text-start text-blue-midnight font-bold">
            Bias, both conscious and unconscious
          </h4>
          <GenericParagraph
            :paragraphText="paragraph2"
            paragraphClass="text-center md:text-start py-2"
          />

          <GenericH2Title
            :title="title2"
            titleClass="text-center md:text-start text-blue-midnight mb-3 md:mt-5"
          />
          <GenericParagraph
            :paragraphText="paragraph3"
            paragraphClass="text-center md:text-start py-2"
          />
          <h4 class="text-center md:text-start text-blue-midnight font-bold">
            Confirmation bias
          </h4>
          <GenericParagraph
            :paragraphText="paragraph4"
            paragraphClass="text-center md:text-start py-2"
          />
          <h4 class="text-center md:text-start text-blue-midnight font-bold">
            Affinity bias
          </h4>
          <GenericParagraph
            :paragraphText="paragraph5"
            paragraphClass="text-center md:text-start py-2"
          />

          <h4 class="text-center md:text-start text-blue-midnight font-bold">
            Similarity bias (Ingroup bias):
          </h4>
          <GenericParagraph
            :paragraphText="paragraph6"
            paragraphClass="text-center md:text-start py-2"
          />

          <h4 class="text-center md:text-start text-blue-midnight font-bold">
            Projection bias:
          </h4>
          <GenericParagraph
            :paragraphText="paragraph7"
            paragraphClass="text-center md:text-start py-2"
          />

          <h4 class="text-center md:text-start text-blue-midnight font-bold">
            The halo effect:
          </h4>
          <GenericParagraph
            paragraphText="occurs when you believe that because someone is good at A, they will also be good at B, C, and D. However, you must determine if they possess the necessary abilities and not pass or fail an applicant solely on a single characteristic."
            paragraphClass="text-center md:text-start py-2"
          />

          <h4 class="text-center md:text-start text-blue-midnight font-bold">
            The pitchfork effect:
          </h4>
          <GenericParagraph
            paragraphText="It is the polar opposite of the halo effect. You see or hear something terrible and conclude that all of the candidate’s other characteristics are unfavourable. For example, suppose an applicant answers the first two questions incorrectly during an interview. In that case, you could assume they’ll answer all of the questions incorrectly and conclude they’re unqualified for the position."
            paragraphClass="text-center md:text-start py-2"
          />

          <h4 class="text-center md:text-start text-blue-midnight font-bold">
            The status quo bias: 
          </h4>
          <GenericParagraph
            paragraphText="occurs when you like things the way they are and want them to stay that way. There are two sides to this coin: a) You are just searching for previous experience to discover a suitable candidate, which means you are missing out on someone who is just starting in the area yet may be ideal. This implies that you continue to focus on individuals in the area while dismissing new potential. If you’re filling a job formerly held by someone you admire, you could strive to acquire a carbon replica of them in the next hiring, which adds internal blinders to your search for the best applicant."
            paragraphClass="text-center md:text-start py-2"
          />

          <h4 class="text-center md:text-start text-blue-midnight font-bold">
            Nonverbal bias/Effective Heuristic:
          </h4>
          <GenericParagraph
            paragraphText="When you estimate a candidate’s capacity to accomplish the job based on a superficial attribute like tattoos or bodyweight, you’re using the nonverbal bias/effective heuristic. However, just because a feature is one-dimensional doesn’t mean you can’t undertake a comprehensive study to discover whether they’re eligible. (It’s also risky from a legal standpoint, so be cautious.) If you believe that CEOs should be tall, you will dismiss anyone less than your presumed cut-off height."
            paragraphClass="text-center md:text-start py-2"
          />

          <h4 class="text-center md:text-start text-blue-midnight font-bold">
            Expectation Anchor: 
          </h4>
          <GenericParagraph
            paragraphText="You don’t consider any of the later prospects even though you’re still interviewing if you’re persuaded that an earlier candidate was the best for the position."
            paragraphClass="text-center md:text-start py-2"
          />

          <h4 class="text-center md:text-start text-blue-midnight font-bold">
            Effect of contrast:
          </h4>
          <GenericParagraph
            paragraphText="When you see a lot of resumes or interviews in succession, the contrast effect occurs, and you begin to compare them to prior applicants, even though you should only be comparing individual talents and experiences to the job ad."
            paragraphClass="text-center md:text-start py-2"
          />

          <img
            src="/images/blog/jobLanding2.webp"
            alt="job landing page image"
            class="my-3"
          />

          <GenericH2Title
            :title="title3"
            titleClass="text-center md:text-start text-blue-midnight mt-5"
          />
          <GenericParagraph
            :paragraphText="paragraph8"
            paragraphClass="text-center md:text-start py-2"
          />

          <h4 class="text-center md:text-start text-blue-midnight font-bold">
            Employee turnover:
          </h4>
          <GenericParagraph
            :paragraphText="paragraph9"
            paragraphClass="text-center md:text-start py-2"
          />

          <h4 class="text-center md:text-start text-blue-midnight font-bold">
            Issues of law:
          </h4>
          <GenericParagraph
            :paragraphText="paragraph10"
            paragraphClass="text-center md:text-start py-2"
          />

          <h4 class="text-center md:text-start text-blue-midnight font-bold">
            Homogeny:
          </h4>
          <GenericParagraph
            :paragraphText="paragraph11"
            paragraphClass="text-center md:text-start py-2"
          />
          <GenericParagraph
            paragraphText="Bias is an inescapable element of everyday life, both personal and professional. You can reduce or eliminate the impact of prejudice on your recruiting and management procedures with basic training and awareness"
            paragraphClass="text-center md:text-start py-2"
          />
        </div>
      </div>
    </WrappersSectionWrapper>
  </WrappersPaddingYWrapper>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "custom",
});

const paragraph1 =
  "When recruiting people, distributing responsibilities, or comparing individuals in other ways, bias in the workplace is the intentional or unintentional assumptions made. Bias is usually either conscious or unconscious, and both require awareness and training to overcome:";
const paragraph2 =
  "Conscious bias is a deliberate, well-informed, and premeditated decision to act in a particular way. You’re aware of your decisions and what’s motivating them when you have conscious bias. Unconscious bias, also known as implicit bias, is an unconsciously performed habit, action, or inaction. Unlike those who exhibit conscious bias, people who display unconscious prejudice are unaware that they are operating in a way that benefits certain people while excluding others. Unconscious bias is difficult to eliminate without adequate training since the individual expressing it often goes unnoticed.";
const paragraph3 =
  "The good news is that if you’re aware of your own hidden biases, you can use information and training to correct them. This implies you won’t always be impacted by them or at least to a reduced degree if you are. What are these biases, and how can they influence your hiring decisions? Some of the most common ones are listed below:";
const paragraph4 =
  "is a type of cognitive bias that occurs when people believe something. Confirmation bias refers to only paying attention to information that supports your opinions while ignoring everything else. It also implies that you do not dig for specifics or delve behind the surface since you trust your first view. If you see a well-dressed individual, a well-written résumé, or both, and you believe they are a good candidate, you will dismiss any unfavorable information. This usually implies that you generate an opinion, favorable or bad, based on a single piece of information (such as a résumé) and then treat everything else as either supporting that judgment or meaningless if it contradicts it.";
const paragraph5 =
  "occurs when you identify with a candidate based on a similar or pleasant quality. As a result, you act warmer toward them during the interview and speak more highly about them afterwards. This warmth was based on nothing more than a feeling, which is subjective and might be harmful to other prospects.";
const paragraph6 =
  "It refers to the desire to hire people similar to you (same group interests or hobbies, etc.). While this is a terrific method to meet new people, it isn’t a good way to hire the best people unless they apply for your position. You must keep in mind that most occupations require various skills, and you also desire diversity in the company.";
const paragraph7 =
  "It is when you feel that people share your aims, views, and values; therefore, you believe they’d be a good fit for the organisation you’re recruiting for. On the other hand, people have their objectives and ambitions that have nothing to do with you or yours, so presuming this will only lead to confusion and disappointment.";
const paragraph8 =
  "Workplace bias has a lot of harmful consequences. Consider the following consequences of enabling widespread prejudice in your workplace:";
const paragraph9 =
  "It is one of the most serious consequences of biased recruiting practices and management. You can wind up hiring someone who isn’t qualified for the job. Due to prejudice, you may overlook good candidates for assignments or promotions.";
const paragraph10 =
  " If an applicant or employee accuses you of bias, you might face lawsuits, penalties, or court proceedings under the federal Equal Employment Opportunity Act, which prohibits discrimination in the workplace.";
const paragraph11 =
  "Because numerous biases induce people to associate with others who appear or act like themselves, discriminatory recruiting practices often result in homogeneous organizations. In several marketplace sectors, diversity has been proved to increase company performance above industry medians.";
const title1 = "What is the definition of workplace bias?";
const title2 = "Are you a victim of these common prejudices?";
const title3 = "The danger of bias in the workplace and when hiring";
</script>
