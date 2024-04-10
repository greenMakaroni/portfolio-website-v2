import Year from "./Year.jsx";
import { journey } from "./journey.js";

const Journey = () => {
  return (
    <section className="flex flex-col">
      <h1 className="py-[10px] ml-[20px]  mt-[75px] animate-elementIn opacity-0 text-4xl font-['Kanit'] bg-gradient-to-r from-[#8a0000] to-[#fc7474] inline-block text-transparent bg-clip-text font-bold">
        Journey Through Academia
      </h1>
      <h2 className="mb-[75px] animate-elementIn opacity-0 text-2xl font-['Kanit'] bg-gradient-to-r from-[#8a0000] to-[#fc7474] inline-block text-transparent bg-clip-text font-bold">
      A Tale of Growth and Exploration
      </h2>
      {journey.map((year, index) => {
        return <Year key={index} pars={year} index={index} />
      })}
    </section>
  )
}

export default Journey
