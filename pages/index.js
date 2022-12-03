import Header from "../components/Header";


export default function Home() {
  return (
   <>
     <Header/>
     <div className="parent h-full">
        <div className="child relative z-[9999] flex items-center">
          <div className="grid grid-cols-2">
             <div className='mt-[160px]'>
             <div className='text-main-color text-[27px] font-[300]'>HEALTHY BODY | HEALTHY MIND</div>
             <div className='text-not-black text-[60px] font-[700] mt-2 leading-tight'>Align Your Life Plans with Our Meal Plans</div>
             <div className="flex items-center gap-5 mt-8">
               <button className='bg-main-color shadow-main w-[150px] leading-none h-[55px] flex items-center justify-center text-white text-[17px] font-[600] rounded-full'>View Plans</button>
               <button className='text-not-black border-2 border-main-color w-[150px] leading-none h-[55px] flex items-center justify-center text-[17px] font-[600] rounded-full'>Learn More</button>
             </div>
             </div>
          </div>
        </div>
        <img src="/images/homebg.png" className='w-full absolute h-[700px] extraLarge:h-[800px] top-0 right-0 object-cover' alt="background" />
     </div>

    <div className="mt-10">
     <div className="bg-green-400 h-96"></div>
     <div className="bg-red-400 h-96"></div>
     <div className="bg-red-400 h-96"></div>
    </div>
   </>
  )
}