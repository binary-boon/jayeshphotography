import React from 'react'
import Content from './FooterContent';

export default function FooterWeb() {
  return (
    <div className='relative bg-[#ffffff]'>
        <div className='relative'>
            <div className='sticky bottom-0'>
                <Content />
            </div>
        </div>
    </div>
  )
}









// import React from 'react'
// import Content from './FooterContent';

// export default function FooterWeb() {
//   return (
//     <div 
//         className='relative h-[800px] bg-[#ffffff]'
//         style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
//     >
//         <div className='relative h-[calc(100vh+800px)] -top-[100vh]'>
//             <div className='h-[800px] sticky top-[calc(100vh-800px)]'>
//                 <Content />
//             </div>
//         </div>
//     </div>
//   )
// }
