import Card from "../Card/Card"

function CardsContainer({myAllData}) {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-12 sm:px-24 py-12">
            {
                myAllData?.map(singleData => <Card key={singleData.id} singleData={singleData} />)
            }
        </section>
    )
}

export default CardsContainer