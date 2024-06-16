

const StudentCard = ({image,name,post,company}) => {
    return (
        <div className="relative flex items-center gap-4 pt-0 mx-0 overflow-hidden text-gray-700 shadow-none rounded-xl">
                            <img src={`https://codewithsadiq.com/image/${image}`} alt="Gautam Kumar" className="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center"/>
                            <div className="flex w-full flex-col gap-0.5">
                            <div className="flex items-start text-left justify-between  flex-col self-start">
                                <h5 className="block font-sans text-md antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                {name}
                                </h5>
                                <p className="block font-sans text-xs antialiased font-light leading-relaxed text-blue-gray-900">
                                {post}
                            </p>
                            <p className="block font-sans text-xs truncate antialiased font-light leading-relaxed text-blue-gray-900">
                                @{company}
                            </p>
                            </div>
                            
                            </div>
                        </div>
    )
}

export default StudentCard