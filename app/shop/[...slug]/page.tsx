export default function page({params}:any) {
    return (
        <div >
            Test 01 : {params.slug[0]} /  {params.slug[1]}
        </div>
    )
}