import { useState } from "react";

const YearZero = () => {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen((prev) => {
      return !prev
    })
  }

  return (
    <div onClick={() => { handleClick() } } className="cursor-pointer my-[5vh] flex flex-col text-black bg-white opacity-90 p-[25px] border-l-2 border-b-2 border-dashed rounded-bl-2xl border-[#8a0000]">
      <h1 className="my-[5vh] text-4xl font-['Kanit'] font-bold text-[#8a0000]">
        Year 0
      </h1>
      { open &&
        <>
          <p className="text-[13px]  font-['Courier_Prime'] font-thin mb-[35px]">
            Embarking on my academic journey at De Montfort University in
            Leicester felt like stepping into a world of endless possibilities.
            From the very beginning, during the foundational year of computing,
            I found myself immersed in a whirlwind of learning and discovery
            that would shape my trajectory in ways I never imagined.
          </p>
          <p className="text-[13px]  font-['Courier_Prime'] font-thin mb-[35px]">
            One of the most enriching aspects of my time at university was the
            connections I formed with my peers. Surrounded by individuals
            passionate about technology, innovation and games, I found myself
            immersed in a community that fostered collaboration and growth.
            Together, we embarked on a journey of exploration, pushing the
            boundaries of our knowledge and skills.
          </p>
          <p className="text-[13px]  font-['Courier_Prime'] font-thin mb-[35px]">
            In the realm of programming, Python emerged as a pivotal challenge
            and opportunity. From grappling with its fundamental syntax to
            conquering complex coding challenges, every encounter with Python
            was a lesson in perseverance and problem-solving. Alongside fellow
            enthusiasts, I navigated the intricacies of this versatile language,
            pushing the boundaries of our knowledge and skill set. Our
            collaborative efforts in the library were more than just learning
            sessions; they were shared triumphs and moments of insight that
            solidified our understanding and passion for coding.
          </p>
          <p className="text-[13px] font-['Courier_Prime'] font-thin mb-[35px]">
            But my academic pursuits extended far beyond the realm of
            programming alone. Venturing into the world of databases, I was
            fascinated by the intricacies of data organization and management.
            Constructing my first relational database using MariaDB was a
            milestone moment, marking the beginning of a journey into the depths
            of data science and analysis.
          </p>
          <p className="text-[13px] font-['Courier_Prime'] font-thin mb-[35px]">
            In parallel, I explored the realm of digital creativity through 3D
            modeling and animation using Autodesk Maya. The ability to bring my
            imagination to life on the digital canvas was both empowering and
            exhilarating, fueling my passion for visual storytelling and design.
          </p>
          <p className="text-[13px] font-['Courier_Prime'] font-thin mb-[35px]">
            Yet, perhaps the most daunting challenge of all was writing
            literature reviews. As someone who thrived on practical learning
            experiences, the prospect of diving into academic texts felt
            overwhelming at times. However, I soon came to appreciate the
            importance of literature reviews in contextualizing my practical
            experiences within the broader academic discourse.
          </p>
        </>
      }
    </div>
  );
};

export default YearZero;
