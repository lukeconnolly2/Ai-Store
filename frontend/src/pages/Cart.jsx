export default function Cart() {
  return (
    <div className="h-screen md:h-[80vh] w-full">
      <div className="bg-bglight h-1/5 pl-5 md:pl-10 pt-10">
        <h2 className="font text-2xl font-bold tracking-tight text-alt sm:text-4xl">My Cart</h2>
      </div>
      <div className="bg-alt h-[75vh] grid grid-cols-1 md:grid-cols-5">
        <div className="bg-bglight h-full col-span-3"> column 1</div>
        <div className="bg-bgdark h-full col-span-2">column 2</div>
      </div>
    </div>
  )
}
