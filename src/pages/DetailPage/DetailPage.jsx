import { useLoaderData, useNavigate, useParams } from "react-router-dom"

function DetailPage() {

  const param = useParams()
  const allData = useLoaderData();
  const navigate = useNavigate()
  const specificData = allData.filter(singleData => singleData.id === param.id)

  const [{ pic, price, title, description }] = specificData
  console.log(pic)

  return (
    <section className="flex items-center justify-center my-8">
      <div className="w-11/12 md:w-2/3">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="rounded-3xl border border-yellow-400">
            <img src={pic} alt="" className="w-full" />
          </div>
          <div className="absolute bottom-0 bg-[#0a0a0a80] w-full p-3 md:p-5 text-center md:text-left">
            <button
              className="bg-[#FF444A] text-white font-semibold py-2 md:py-3 px-3 md:px-5 rounded"
            >
              Donate ${price}
            </button>
          </div>
        </div>
        <h4 className="font-bold text-3xl my-5 text-center md:text-left">{title}</h4>
        <p className="text-gray-500 text-justify">{description}</p>
        <div className="flex items-center justify-center mt-3">
          <button
            onClick={() => navigate('/donation')}
            className="border border-[#FF444A] text-[#FF444A] font-semibold py-3 px-5 rounded"
          >
            Go Back
          </button>
        </div>
      </div>
    </section>
  )
}

export default DetailPage