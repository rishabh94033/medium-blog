import { Circle } from "./blogCard";

export function Skeleton(){
    return(
        <div>
                <div className="flex justify-center mt-4">
                <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
                           <div className="flex">
                           <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
                   
                               <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
                               <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
                               </div>
                               <div className="flex justify-center flex-col pl-2">
                                   <Circle />
                               </div>
                               <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
                               <div className="h-2 bg-gray-200 rounded-full  max-w-[360px]"></div><br/>
                    
                               </div>
                           </div>
                           <div className="text-xl font-semibold pt-2">
                           <div className="h-2 bg-gray-200 rounded-full  max-w-[460px]"></div><br/>
            
                    
                           </div>
                           <div className="text-md font-thin">
                           <div className="h-2 bg-gray-200 rounded-full  max-w-[560px]"></div><br/>
                           </div>
                           <div className="text-slate-500 text-sm font-thin pt-4">
                           <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4">
                           </div>
                       </div>
                       </div>
                       </div>
                       </div>
    )
}