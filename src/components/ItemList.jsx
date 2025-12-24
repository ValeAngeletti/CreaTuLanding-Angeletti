import Item from "./Item.jsx"

export default function ItemList({ items }){
  return (
    <div className="flex justify-evenly items-center gap-5 flex-wrap p-10 bg-[#F4EEDF]">
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  )
}
