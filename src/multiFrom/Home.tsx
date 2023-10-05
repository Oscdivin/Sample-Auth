
const Home = () => {
  return (
    <div>
      <div className="bg-[#f4f4f4f3] text-[#000] w-[100%] h-[10vh]
       justify-center items-center flex border-[solid red 1px] max-[500px]:flex">
        <div className="bg-[none] w-[90%] h-[10vh] flex items-center justify-between">
<div className="">
  Divine Osinachi
</div>
<div className="bg-[none] w-[48%] h-[10vh] items-center justify-center 
cursor-pointer flex gap-4 max-[500px]:hidden">
<div>Home </div>
<div>About </div>
<div>Us </div>
<div>Prouject</div>
</div>
<button className="border-black py-[7px] px-[12px] bg-white
 text-black border-[1px] flex justify-center 
 max-[768px]:hidden max-[500px]:flex">
Login Now!
</button>
        </div>
      </div>
    </div>
  )
}
export default Home
