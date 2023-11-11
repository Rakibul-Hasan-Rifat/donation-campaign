import { useEffect, useState } from "react"
import Donate from "../Donate/Donate";

function DonateContainer() {

    const [items, setItems] = useState([])
    const [itemsLength, setItemsLength] = useState(4)

    useEffect(() => {
        const dataFromLS = JSON.parse(localStorage.getItem('donatedItems'));
        setItems(dataFromLS)
    }, [])

    return (
        <>
            <section className={`
        px-10 md:px-20 ${items ? 'grid md:grid-cols-1 lg:grid-cols-2 gap-5 my-10' : 'flex items-center justify-center'}
        `}>
                {
                    items ?
                        items.length <= 4 ?
                            items.map(item => <Donate key={item.id} item={item} />)
                            :
                            items.slice(0, itemsLength).map(item => <Donate key={item.id} item={item} />)
                        :
                        <h1
                            className="text-center font-bold text-4xl mt-10"
                        >
                            Sorry, there is no specific donation!!!
                        </h1>
                }
            </section>
            {
                items?.length > 4 && itemsLength <= 4 &&
                <div className="flex items-center justify-center">
                    <button
                        onClick={() => setItemsLength(items.length)}
                        className="bg-[#FF444A] text-white font-semibold py-2 md:py-3 px-3 md:px-5 rounded"
                    >
                        See more
                    </button>
                </div>
            }
        </>
    )
}

export default DonateContainer