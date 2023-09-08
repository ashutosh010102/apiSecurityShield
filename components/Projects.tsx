import React from "react";
import LeftProject from "./LeftProject";
import RightProject from "./RightProject";

const porj1_desc = `
Experience the future of weather forecasting with **GPT-Weather**,

a Next.js web application that blends advanced technologies for accurate predictions and user-friendly interaction.

### Features:

- **Data Fusion:** Integrate OpenMeteo API data into a GraphQL database using StepZen, optimizing data retrieval.
  
- **Dynamic Visualization:** Utilize Tremor 2.0 UI library to craft interactive graphs showcasing humidity, rain probability, and temperature trends.

- **Insightful Summaries:** Employ OpenAI's GPT to generate concise weather summaries, enhancing user understanding.

### Tech Stack:

Next.js | Tailwind | OpenMeteo API |

 GraphQL | StepZen | Tremor 2.0 | OpenAI 

`;

const proj2_desc = `

- A dataset of 5171 email samples underwent meticulous preprocessing, effectively handling punctuation and stopwords.

- Utilizing an LSTM-based architecture boasting 1.2 million parameters, the project achieved an exceptional 97.8% validation accuracy.

- Additionally, advanced strategies such as EarlyStopping and ReduceLROnPlateau were employed to maintain a balanced class distribution, further enhancing model convergence.

### Key Achievements:

- *97.8% validation accuracy.

- *Implementation of a 1.2 million parameter LSTM architecture.

- *Successful application of strategic convergence enhancement techniques.

`;
type Props = {};

function Projects({ }: Props) {
  return (
    <div className="min-h-screen flex flex-col  items-center mt-10 ">
      <h3 className=" uppercase tracking-[20px] md:tracking-[25px] text-slate-500 text-xl md:text-2xl font-semibold">
        Projects
      </h3>

      <div className="flex flex-col">
        <LeftProject
          img_url="proj1"
          title="GPT-Weather: Next.js Web App for Advanced Weather Forecasting"
          body={porj1_desc}
          link=""
        />
        <RightProject
          img_url="proj2"
          title="SpamSentry: TensorFlow Email Classification"
          body={proj2_desc}
          link= ""
        />
      </div>
    </div>
  );
}

export default Projects;
