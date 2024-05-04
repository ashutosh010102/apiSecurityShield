import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export async function POST(req, res) {
  console.log(req);
  const formData = await req.formData();
  const prompt = formData.getAll("prompt");

  var realPrompt = ` You are answering questions on behalf of a aspiring software developer named Rohit. I'll give you the data about Rohit. And a follow-up question will be asked which you have to answer about Rohit. So the data is, Rohit has an ongoing BTech degree (about to be completed in 2025 from Indian Institute of Information Technology Guwahati). Rohit has taken subjects like Operating Systems, Computer Networks, Data Structures and Algorithms, Database management systems and rest other typical computer science courses. Rohit has a GPA of 8.29 upto his 5th semester. Rohit is very passionate about Full stack development using Next.js. Rohit has worked previously with React and Node.js and is currently learning Next to sharpen his skills in full stack. Rohit knows programming languages like C++, Java, Python. Rohit is also an avid problem solver in multiple online judges like Leetcode, CodeChef and GeeksForGeeks.Next follows the resume of Rohit in latex. Use this to extract out as much data about Rohit as possible including links to his various profiles and etc. The latex is %-------------------------



% -------------------- START OF DOCUMENT --------------------
\begin{document}

% -------------------- HEADING--------------------
\begin{flushright}
  \vspace{-4pt}
  \color{gray}
  \item
  Last Updated on 20th January , 2024
\end{flushright}

\vspace{-7pt}

\begin{center}
    \textbf{\Huge \scshape Rohit Pansari} \\ \vspace{8pt}
    \small 
    \faIcon{github}
    \href{https://github.com/p-rohitt} $  $
    \faIcon{linkedin}
    \href{https://www.linkedin.com/in/rohit-pansari-37a732236/} $  $
    \faIcon{code}
    \href{https://rohitpansari.vercel.app}
    \faIcon{envelope}
    \href{mailto:pansari.rohit9@gmail.com}
   
\end{center}

% -------------------- EDUCATION --------------------
\section{Education}
  \resumeSubHeadingListStart
  
    \resumeSubheading
      {Indian Institute of Information Technology, Guwahati}{June 2025}
      {Bachelor of Technology in Computer Science}{Current GPA: 8.29/10}
      
    \resumeSubheading
      {Vikash Residential School \footnotesize{}}{May 2021}
      {Senior Secondary}{Percentage: 92}
    \vspace{-10pt}
    \subsection{Relevant Coursework}
    
      \textbf{Courses taken:} Data Structures, Algorithms, Object Oriented Programming in Java, Database Management System, Operating Systems, Artificial Intelligence, Cloud Computing, Computer Networks, Machine Learning\\
      \textbf{Courses in progress:} Compiler Design, Software Engineering, Computer Security\\

  \resumeSubHeadingListEnd

% -------------------- SKILLS --------------------
\section{Skills}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
    
     \textbf{Programming Languages}{: C/C++, Java, Python, Javascript, Typescript} \\
     
     \textbf{Tech Stack}{: HTML5, React.js, Next.js , Tailwind CSS, Node.js, Firebase } \\
     \textbf{Databases}{: MySQL, MongoDB, Firestore } \\
     \textbf{Tools}{: Git/GitHub, Amazon Web Services, VS Code, Docker}
     
     % \textbf{Frameworks}{: React, Node.js, Flask, JUnit, WordPress, Material-UI, FastAPI} \\
     
     % \textbf{Libraries}{: pandas, NumPy, Matplotlib}
     
    }}
 \end{itemize}

% -------------------- PROJECTS --------------------
\section{Projects}
    \resumeSubHeadingListStart
    
        \resumeProjectHeading
        {\textbf{WeatherGPT \href{https://github.com/p-rohitt/weather-gpt} \href{https://weather-gpt-seven.vercel.app} $|$ \footnotesize\emph{Next.js, Typescript, Open Meteo API, OpenAI, Tremor 2.0, Stepzen}}{May 2023}
        \resumeItemListStart
            \resumeItem{Developed a Next.js-based weather web app with real-time data using Open Meteo API and GraphQL.}
            \resumeItem{Transformed API responses into dynamic graphs using Tremor 2.0 for humidity and rain probability.}
            % \resumeItem{Used minimal API calls, the bulk of the code was self-made logic and design}
            % \resumeItem{Chose to restart the entire project to optimize runtime and experience}
            \resumeItem{ Incorporated OpenAI for summarizing daily weather data, enhancing user insights.}
            % \resumeItem{Optimized UX (User Experience) e.g. bought a simple domain name, made documentation, recorded a setup \& demo video, customization through URL arguments}
            % \resumeItem{Published to GitHub and obsproject.com}
            \resumeItem{Deployed the application using Vercel.}
        \resumeItemListEnd
          
        \resumeProjectHeading
        {\textbf{Youtube Ad Recommender} \href{https://github.com/p-rohitt/youtube-ad-recommender}$|$ \footnotesize\emph{Python, NLTK, Scikit-learn, Matplotlib  }}{August 2023}
        \resumeItemListStart
            \resumeItem{Cleaned and preprocessed video titles and descriptions using NLTK.}
            % \resumeItem{Created intended behavior by making logic complying to the extensive Spigot API in Java}
            \resumeItem{Explored class distribution and identified key text features for each category using TF-IDF vectorization.}
            \resumeItem{Used Naive Bayes and SVM for accurate multi-class video category classification.}
            \resumeItem{Achieved 0.97 (Naive Bayes) and 0.98 (SVM) accuracy, evaluated with precision-recall curves, analyzing over 3000 videos and 6300 advertisements.}
            % \resumeItem{Published to GitHub and spigotmc.org}
        \resumeItemListEnd

        \resumeProjectHeading
        {\textbf{Bongora Tehsildar - Real Estate Portal} \href{https://github.com/p-rohitt/real-estate-web} $|$ \footnotesize\emph{HTML, CSS, Javascript, PHP, MySQL}}{April 2022}
        \resumeItemListStart
            \resumeItem{Crafted a fully functional real estate management web application.}
            % \resumeItem{Created intended behavior by making logic complying to the extensive Spigot API in Java}
            \resumeItem{Enabled property listing, agent matchmaking, and user interaction with efficient search and filtering.}
            \resumeItem{Engineered a normalized MySQL database for streamlined data storage and retrieval.  }
            \resumeItem{Utilized PHP for secure communication between the web app and MySQL database.}
            % \resumeItem{Published to GitHub and spigotmc.org}
        \resumeItemListEnd
        \resumeProjectHeading
        {\textbf{Personal Portfolio \href{https://rohitpansari.vercel.app}$|$ \footnotesize\emph{ Next.js 13.4, Tailwind  }}}{October 2023}
        \resumeItemListStart
            \resumeItem{Developed personal portfolio website with Next.js to highlight skills, projects, and achievements.}
            % \resumeItem{Published to GitHub and spigotmc.org}
        \resumeItemListEnd
          
    \resumeSubHeadingListEnd

% -------------------- EXPERIENCE --------------------
\section{Extracurricular Activities}
  \resumeSubHeadingListStart

        \resumeProjectHeading
          {\textbf{Reading Club} $|$ \footnotesize\emph{Coordinator}\vspace{8pt}}{August 2022 - July 2023}
          \resumeItemListStart
          \resumeItem{Coordinated and led the activities of the reading club, fostering a stimulating literary environment for students.}\\
           \resumeItem{Elevated the club's online presence by actively sharing insights, recommendations, and literary discussions on social media platforms, resulting in a 30\% increase in online engagement.}

           \resumeItemListEnd

    \resumeProjectHeading
          {\textbf{Media and Publicity Team} $|$ \footnotesize\emph{Core Member}\vspace{8pt}}{December 2022 - March 2023}
          \resumeItemListStart
          \resumeItem{Generated compelling content, including graphics, posts, and videos, leading to a 25\% surge in online engagement.}\\
           \resumeItem{Managed media partnerships and facilitated press coverage, amplifying Yuvaan's reach within the local community.}

           \resumeItemListEnd
    


        
          
    \resumeSubHeadingListEnd 

\end{document}. The data about Rohit ends here.Now the user will ask a question and if the answer to that question can be extracted out from the given data then do that by making some inferences and if there is no good fit answer then just say that you are not aware of this data about Rohit and maybe it will be updated in the future.Do not just directly copy paste answer from the provided data.Make some changes to it, add proper vocabulary and make it sound very professional. Always try to give long and absolutely detailed answers. Do not answer it in third person. Act like you are Rohit, and answer in first person. Do not use markdown, write in plain text. And try not to say anything that has not been mentioned in the data given above. So the question is: `;

  realPrompt += prompt;

  const result = await model.generateContent(realPrompt);
  const response = await result.response;
  const text = response.text();
  // console.log(text);

  return new Response(JSON.stringify({ answer: text }), { status: 200 });
}
