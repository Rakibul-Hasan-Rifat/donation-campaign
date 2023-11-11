function Card({ singleData }) {

  const { title, category, pic, card_bg, category_bg, txt_color } = singleData;

  const clickHandler = (receivedData) => {

    const localData = JSON.parse(localStorage.getItem('donatedItems'))
    const newDonatedItems = localData ? [...localData, receivedData] : [receivedData]
    localStorage.setItem('donatedItems', JSON.stringify(newDonatedItems))
    console.log(newDonatedItems.length, JSON.parse(localStorage.getItem('donatedItems')).length)
  };

  return (
    <div
      onClick={() => clickHandler(singleData)}
      style={{ backgroundColor: card_bg }}
      className='rounded-xl overflow-hidden cursor-pointer'
    >
      <img src={`${pic}`} alt="" className="w-full max-h-44" />
      <p className="my-3 ml-3">
        <small
          style={{
            backgroundColor: category_bg,
            color: txt_color,
            padding: '3px 6px',
            borderRadius: '6px'
          }}
        >{category}</small>
      </p>
      <p
        className="mb-5 ml-3"
        style={{ color: txt_color }}>
        <strong>{title}</strong>
      </p>
    </div>
  )
}

export default Card