

const BorderHeading = ({title,subtitle}) => {
  return (
    <div className="border-l-4 border-b py-1 px-2 mb-3 border-l-orange-500 flex flex-col">
        {title && <h2>{title}</h2>}
        {subtitle && <h6 className="text-slate-500 text-xs">{subtitle}</h6>}
    </div>
  )
}

export default BorderHeading