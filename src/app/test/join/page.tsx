import { BasicComponent } from "../about/components/textboard";


export default function Join() {
  return (
    <main className="my-16">
        <div>
            <BasicComponent title={"Application Open!"} cta={"Go To Application Form"} isIcon={true} paragraph={"Recruitment for the current academic session starts Tuesday, 7th of January 2025. The application form is open until Saturday, 18th of January 2025."} secondParagraph="No prior experience is required." highlightedText={["Tuesday, 7th of January 2025.", "Saturday, 18th of January 2025."]} highlightedTextColor="#800000" />
        </div>
    </main>
  );
}