function Banner() {
  return (
    <section className="flex gap-5 flex-col items-center justify-center my-10">
      <h1 className="font-extrabold text-3xl md:text-4xl text-center">I Grow By Helping People In Need</h1>
      <div className="border w-10/12 md:w-8/12 lg:w-5/12 text-sm sm:text-xl rounded-lg mt-10">
        <input
          type="text"
          placeholder="search here ......"
          className="w-9/12 rounded-lg py-3 px-5"
        />
        <button
          className="w-3/12 bg-[#FF444A] border-[#FF444A] text-white rounded-r-lg py-3 px-5"
        >
          Search
        </button>
      </div>
    </section>
  )
}

export default Banner