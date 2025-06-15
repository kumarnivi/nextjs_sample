
// Methode One
// export default function DashboardLayout({children}:any){
//     return (
//         <div>
//            <h1></h1>
//            {children}
//         </div>

        
//     )
// }


import { ReactNode } from "react"


type DashobardLayoutProps = {
    children:ReactNode
}

export default function DashboardLayout({children}:DashobardLayoutProps){
    return (
        <div>
           <h1>Header</h1>
           {children}
           <h1>Footer</h1>
        </div>
        
    )
}