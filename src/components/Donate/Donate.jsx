import { useNavigate } from "react-router-dom";

function Donate({ item }) {

    const { id, pic, price, title, category, category_bg, card_bg, txt_color } = item;

    const navigate = useNavigate();

    const btnClickHandler = () => {
        navigate(`/donation/${id}`)
    }

    return (
        <div
            style={{backgroundColor: card_bg, borderRadius: '12px', overflow: 'hidden'}}
            className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-5">
            <div>
                <img src={pic} alt="" className="rounded-lg"/>
            </div>
            <div className="flex flex-col items-center md:items-start mb-5 md:mb-0">
                <p className="">
                    <small
                        style={{
                            backgroundColor: category_bg,
                            color: txt_color,
                            padding: '3px 6px',
                            borderRadius: '6px'
                        }}
                    >
                        {category}
                    </small>
                </p>
                <p className="text-xl my-2"><strong>{title}</strong></p>
                <p style={{ color: txt_color, fontWeight: 600 }}>${price}</p>
                <button
                    onClick={btnClickHandler}
                    className="py-2 px-5 font-semibold rounded-lg mt-2"
                    style={{ backgroundColor: txt_color, color: 'white' }}
                >
                    View Details
                </button>
            </div>
        </div>
    )
}

export default Donate