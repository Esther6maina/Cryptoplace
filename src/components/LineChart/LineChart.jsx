import React, { useEffect, useState } from 'react'
import './LineChart.css'
import Chart from 'react-google-charts'

const LineChart = ({historicalData}) => {

  const [data, setData] = useState([["Date","Prices"]])

  useEffect(()=>{
    let dataCopy = [["Date","Prices"]];
    if (historicalData && historicalData.prices) {
      historicalData.prices.forEach((item) => {
        // Push Date object and price into dataCopy
        dataCopy.push([new Date(item[0]), item[1]]);
      })
      setData(dataCopy);
    }

  }, [historicalData])
  return (

   <Chart
     chartType='LineChart'
     data={data}
     height="100%"
     legendToggle/>
     
  )
}

export default LineChart