import ldo from '@/../public/ldo.svg'
import { DebateEvent } from "./edition";


export default function Tournaments() {
  return (
    <main className="my-16">
      <div className='lg:mx-28'>
        <DebateEvent editions={['2018', '2020', '2021', '2022', '2023', '2024']} imageSrc={ldo.src} title={'Lagos Debate Open'} details='Lagos Debate Open “LDO” is our biennial open tournament, entertaining speakers all over Africa!' />
        <DebateEvent editions={['2018', '2020', '2021', '2022', '2023', '2024']} imageSrc={ldo.src} title={'UNILAG Debate Rumble'} details='Lagos Debate Open “LDO” is our biennial open tournament, entertaining speakers all over Africa!' />
        <DebateEvent editions={['2018', '2020', '2021', '2022', '2023', '2024']} imageSrc={ldo.src} title={'The Word-Smiths Pro-Am'} details='Lagos Debate Open “LDO” is our biennial open tournament, entertaining speakers all over Africa!' />
        <DebateEvent editions={['2018', '2020', '2021', '2022', '2023', '2024']} imageSrc={ldo.src} title={'UNILAG Debate Championship'} details='Lagos Debate Open “LDO” is our biennial open tournament, entertaining speakers all over Africa!' />
        <DebateEvent editions={['2018', '2020', '2021', '2022', '2023', '2024']} imageSrc={ldo.src} title={'Secondary School Debate Championship'} details='Lagos Debate Open “LDO” is our biennial open tournament, entertaining speakers all over Africa!' />
      </div>
    </main>
  );
}