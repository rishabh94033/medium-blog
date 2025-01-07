import Appbar from "./appbar"

export function Skeleton(){
//     return(
//         <div>
//         <div className="w-full">
// <div className="h-2 bg-gray-200 rounded-full  max-w-[480px] mb-2.5"></div>
// <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
// <div className="h-2 bg-gray-200 rounded-full  max-w-[440px] mb-2.5"></div>
// <div className="h-2 bg-gray-200 rounded-full  max-w-[460px] mb-2.5"></div>
// <div className="h-2 bg-gray-200 rounded-full  max-w-[360px]"></div>
// </div>
// </div>
//     )




  return <div>
    <Appbar/>
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
                <div className="col-span-8">
                    <div className="text-5xl font-extrabold">
                    <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>

                    </div>
                    <div className="text-slate-500 pt-2">
                       <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>

                    </div>
                    <div className="pt-4">
                    <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full  max-w-[360px]"></div><br/>
                    <div className="h-2 bg-gray-200 rounded-full  max-w-[460px]"></div><br/>
                    <div className="h-2 bg-gray-200 rounded-full  max-w-[560px]"></div><br/>
                    <div className="h-2 bg-gray-200 rounded-full  max-w-[560px]"></div><br/>

                    </div>
                </div>
                <div className="col-span-4">
                    <div className="text-slate-600 text-lg">
                    <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>

                    </div>
                    <div className="flex w-full">
                        <div className="pr-4 flex flex-col justify-center">
                        <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>

                        </div>
                        <div>
                            <div className="text-xl font-bold">
                            <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>

                            </div>
                            <div className="pt-2 text-slate-500">
                            <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>

                            </div>
                        </div>
                    </div>  
                </div>
                
            </div>
        </div>
    </div>
}