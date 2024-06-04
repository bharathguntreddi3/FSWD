// import React from 'react'



// export default function CourseList(props) {
//     return (
//         <>
//             <h2 className="text-danger">Products List</h2>

//             <table className='table table-bordered'>
//                 <tr>
//                     <th>id</th>
//                     <th>name</th>
//                     <th>price</th>
//                 </tr>
//                 {
//                     props.products.map((p) =>
//                         <tr>
//                             <td>{p.id}</td>
//                             <td>{p.name}</td>
//                             <td>{p.price}</td>
//                         </tr>
//                     )
//                 }
//             </table>
//         </>
//     )
// }


import React from 'react'

function ShowCourse({ product }) {
    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    )
}

export default function CourseList2(props) {
    return (
        <>
            <h2 className="text-danger">Products List</h2>

            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.products.map((p, idx) => <ShowCourse key={idx} product={p} />)
                    }
                </tbody>
            </table>
        </>
    )
}