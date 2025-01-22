// import LagosDebate from "./components/edition";
// import { BasicComponent } from "./components/textboard";
// import Coach from "./components/textimage";


// export default function Home() {
//   return (
//     <main>
//       <BasicComponent
//         title="Application Open!" cta={""} isIcon={false} paragraph={""} />

//       {/* Coach Component */}
//       <Coach
//         title="Our Coach"
//         description="Expert in debating and public speaking with years of experience."
//         imageSrc="https://via.placeholder.com/150"
//       />

//       {/* Lagos Debate Open Component */}
//       <LagosDebate
//         title="Lagos Debate Open"
//         editions={["2023", "2021", "2018"]}
//         logoSrc="https://via.placeholder.com/200"
//         registerLink="https://example.com/register"
//       />
//     </main>
//   );
// }

import { BasicComponent } from "./components/textboard";
import ExecutiveGrid from "./components/executive";
import image from '@/../public/gal1.svg'
import coachImage from '@/../public/gal1.svg'
import Coach from "./components/textimage";

const executives = [
  { id: 1, name: 'John Doe', role: 'CEO', image: image.src },
  { id: 2, name: 'Jane Smith', role: 'CFO', image: image.src },
  { id: 3, name: 'Alice Johnson', role: 'COO', image: image.src },
  { id: 4, name: 'Bob Brown', role: 'CTO', image: image.src },
  { id: 5, name: 'Charlie Davis', role: 'CMO', image: image.src },
  { id: 6, name: 'Eve Miller', role: 'VP Sales', image: image.src },
  { id: 7, name: 'Frank Wilson', role: 'VP HR', image: image.src },
  // { id: 8, name: 'Frank Wilson', role: 'VP HR', image: image.src },
];


export default function Donate() {
  return (
    <main className="my-16">
        <div>
            <BasicComponent title={"Our Society"} cta={"Join TWS"} isIcon={false} paragraph={"The Word-Smiths society thrives on the power of ideas, dialogue, and respectful challenge. We’re a community of curious thinkers who value diverse perspectives and believe in the art of well-rounded debate. Here, everyone’s voice is valued, and every argument adds depth to our understanding. It’s a space where critical thinking meets mutual respect, fostering a culture of open-minded discussion and growth. Whether exploring age-old questions or tackling contemporary issues, our society is about engaging thoughtfully and learning from each other."} highlightedText={["Tuesday, 7th of January 2025.", "Saturday, 18th of January 2025."]} highlightedTextColor="#800000" />
            <Coach name="Dr. Ntekim-Rex" title={"Our Coach"} description={"The Word-Smiths society thrives on the power of ideas, dialogue, and respectful challenge. We’re a community of curious thinkers who value diverse perspectives and believe in the art of well-rounded debate. Here, everyone’s voice is valued, and every argument adds depth to our understanding. It’s a space where critical thinking meets mutual respect, fostering a culture of open-minded discussion and growth. Whether exploring age-old questions or tackling contemporary issues, our society is about engaging thoughtfully and learning from each other."} imageSrc={coachImage.src} />
            <ExecutiveGrid executives={executives} />
            <BasicComponent title={"Main Campus Location"} cta={"Navigate with Google Maps"} isIcon={false} paragraph={"Room B307, Department of English, Faculty of Arts, University of Lagos, Yaba."} highlightedText={["Tuesday, 7th of January 2025.", "Saturday, 18th of January 2025."]} highlightedTextColor="#800000" />

        </div>
    </main>
  );
}