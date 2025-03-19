export default function ContactCard({name, description, imageUrl = "/menu.svg"}) {
    return (
        <div className="shadow-md flex items-center gap-[8px] rounded-[22px] ">
          <img src={imageUrl} className="w-[48px] rounded-[10px] "/>
          <h2 className="font-bold">{name}</h2>
          <p className="text-[12px] text-gray-500">{description}</p>

        </div>
    )
}