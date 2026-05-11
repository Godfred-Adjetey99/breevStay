import ExCard from "./ExCard"
import Title from "./Title"

const Experience = () => {
  return (
    <section className="flex justify-center items-center w-full" id="reviews">
      <div className="">
        <Title title="Reviews" subtitle="" />
        <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-x-4 ">
          <ExCard />
          <ExCard />
          <ExCard />

        </div>

      </div>
    </section>
  )
}

export default Experience