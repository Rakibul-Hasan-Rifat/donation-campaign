import { useLoaderData } from "react-router-dom"
import Header from "../../components/Header/Header"
import CardsContainer from "../../components/CardsContainer/CardsContainer";

function Home() {
  const allData = useLoaderData();
  console.log(allData)
  return (
    <>
      <Header />
      <CardsContainer myAllData={ allData } />
    </>
  )
}

export default Home