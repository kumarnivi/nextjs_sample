export async function GET(req:any){
    const type = req.nextUrl.searchParams('type')
    console.log('type:', type)
 return Response.json([
    {
        title:'I phone 12 pro'
    },
    {
        title:'Samsung'
    },

 ])
}

export async function POST(){
    return Response.json({message:'post succesed'})
}