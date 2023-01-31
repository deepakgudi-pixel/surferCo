

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-12">
        <h3 className="flex flex-col font-black text-4xl leading-[80%]">
            <span>Surfer</span><span>Co</span>
        </h3>
        <div className="cursor-pointer border border-solid border-black rounded-[80px] w-[80px] h-[80px] flex justify-center items-center">Menu</div>
    </nav>
  )
}
