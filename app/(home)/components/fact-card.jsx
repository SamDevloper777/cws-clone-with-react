

const FactCard = ({label,count}) => {
  return (
    <div className="border rounded-lg shadow-lg bg-white flex-1 p-4 items-center justify-center py-6 trext-center flex flex-col gap-2">
        <h2 className="text-2xl ">{label}</h2>
        <h3 className="text-3xl text-orange-600 font-black">{count}</h3>
    </div>
  )
}



const FactContainer = () => {
  return (

    <div className="grid grid-cols-4 bg-slate-100 mb-3 p-4 gap-4">
      <FactCard label="Students" count="9600+" />
      <FactCard label="Placements" count="460+" />
      <FactCard label="Technologies" count="23+" />
      <FactCard label="Projects" count="750+" />
      </div>
  )
}

export default FactContainer