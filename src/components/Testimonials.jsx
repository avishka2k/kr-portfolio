import React from 'react'

function Testimonials() {
  return (
    <div className="w-full h-screen flex flex-col justify-between">
        <div className="container px-4 m-auto">
            <div className="flex flex-col justify-center w-full py-8">
                <div className="flex flex-row place-content-center pb-2 items-center">
                <div className="section-header-before mr-3"></div>
                <p className="section-header uppercase tracking-[10px] md:text-1xl text-sm my-text-gray">my clients</p>
                </div>
                <p className="md:text-5xl text-4xl font-semibold text-center">Testimonials</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonials