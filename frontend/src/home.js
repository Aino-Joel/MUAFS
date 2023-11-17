import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar } from 'recharts'
//  Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 
//  
 

function Home() {

    //  const data = [
    //      {
    //      name: 'Page A',
    //      uv: 4000,
    //        pv: 2400,
    //        amt: 2400,
    //      },
    //      {
    //     name: 'Page B',
    //      uv: 3000,
    //     pv: 1398,
    //       amt: 2210,
    //      },
    //      {

    //        name: 'Page C',
    //        uv: 2000,
    //        pv: 9800,
    //        amt: 2290,
    //      },
    //      {
    //        name: 'Page D',
    //        uv: 2780,
    //        pv: 3908,
    //        amt: 2000,
    //      },
    //      {
    //       name: 'Page E',
    //       uv: 1890,
    //       pv: 4800,
    //       amt: 2181,
    //     },
    //     {
    //       name: 'Page F',
    //       uv: 2390,
    //       pv: 3800,
    //       amt: 2500,
    //     },
    //     {
    //       name: 'Page G',
    //       uv: 3490,
    //       pv: 4300,
    //       amt: 2100,
    //     },
    //   ];


   


// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100
//   }
// ];



     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <p>Welcome...</p>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h4>POPULAR</h4>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                {/* <a href=""> */}
                <h3>DREAM WORLD</h3>
                {/* </a> */}
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h2>PREFERRRED LOCATION</h2>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                {/* <a href=""> */}
                <h3>KIKONI A</h3>
                {/* </a> */}
            </div>
             <div className='card'>
                <div className='card-inner'>
                    <h3>CUSTOMERS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>YEAR 3 STUDENTS</h1>
            </div> 
            <div className='card'>
                <div className='card-inner'>
                    <h3>most rated</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                {/* <a href=""> */}
                <h2>olympia hostel</h2>
                {/* </a> */}
            </div>
        </div>

         {/* <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                // data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div> */}
 {/* <BarChart width={150} height={40} data={data}>
      <Bar dataKey="uv" fill="#8884d8" />
    </BarChart> */}

              
    </main>
  )
 } 

 export default Home