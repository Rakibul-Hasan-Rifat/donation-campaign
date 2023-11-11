import Chart from "react-google-charts"
import Navbar from "../../components/Navbar/Navbar"


function StatisticsPage({ length }) {
    console.log(length, 'hurray')

    const presentTotalLength = localStorage ? JSON.parse(localStorage.getItem('donatedItems')).length : 0

    const data = [
        ["Task", "Hours per Day"],
        ["Total Donation", presentTotalLength],
        ["My Donation", presentTotalLength - length],
      ];
    return (<>
        <Navbar />
        <Chart
            className="my-10"
            chartType="PieChart"
            data={data}
            width={"100%"}
            height={"400px"}
        />
    </>
    )
}

export default StatisticsPage