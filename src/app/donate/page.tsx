import { BasicComponent } from "../about/components/textboard";


export default function Donate() {
  return (
    <main className="my-16">
        <div>
            <BasicComponent title={"Donate"} cta={"Make Donation"} isIcon={true} paragraph={"Recruitment for the current academic session starts Tuesday, 7th of January 2025. The application form is open until Saturday, 18th of January 2025."} secondParagraph="No prior experience is required." highlightedText={["Tuesday, 7th of January 2025.", "Saturday, 18th of January 2025."]} highlightedTextColor="#800000" />
            <BasicComponent title={"Dues & Fees"} cta={"Pay Member's Fee"} isIcon={true} paragraph={"Recruitment for the current academic session starts Tuesday, 7th of January 2025. The application form is open until Saturday, 18th of January 2025."} secondParagraph="No prior experience is required." highlightedText={["Tuesday, 7th of January 2025.", "Saturday, 18th of January 2025."]} highlightedTextColor="#800000" />
            <BasicComponent title={"Sponsor"} cta={"Contact Us"} isIcon={true} paragraph={"Recruitment for the current academic session starts Tuesday, 7th of January 2025. The application form is open until Saturday, 18th of January 2025."} secondParagraph="No prior experience is required." highlightedText={["Tuesday, 7th of January 2025.", "Saturday, 18th of January 2025."]} highlightedTextColor="#800000" />
        </div>
    </main>
  );
}