export async function GET(){
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