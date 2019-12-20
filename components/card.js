import React from 'react'

const Card = ({info}) => (
    <div className="w-full sm:w-full lg:w-4/12 xl:w-4/12 md:w-5/12 h-24 mx-2 my-2 px-2 py-1 rounded
    border border-transparent cursor-pointer hover:shadow-lg hover:border-white text-sm bg-white shadow">
        <div className="flex">
        <div className="w-auto h-6 flex items-center content-center">
            <img className="h-4 w-4 mr-2 mt-1" src={'../images/flags/' + info.DN + '.svg'}></img>
            <div>{info.DN}</div>
        </div>
            {
                {
                    'A': <div className="w-auto ml-auto px-2 text-center bg-blue-500 rounded shadow text-white">On Arrival</div>,
                    'R': <div className="w-auto ml-auto px-2 text-center bg-red-500 rounded shadow text-white">Required</div>,
                    'F': <div className="w-auto ml-auto px-2 text-center bg-green-500 rounded shadow text-white">Free</div>,
                    'E': <div className="w-auto ml-auto px-2 text-center bg-yellow-500 rounded shadow text-white">Electronic</div>
                  }[info.VC]
            }
        </div>

    </div>

)

export default Card
