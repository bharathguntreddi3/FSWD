import React, { useState } from 'react'

export default function Passengers() {
    let [passengers, setPassengers] = useState([])

    function addPassenger() {
        let name = document.getElementById("txtName").value 
        let age = document.getElementById("txtAge").value 

        setPassengers([...passengers, { name: name, age: age }])
        // spread the existing operators and and give values to that operators
        // console.log(passengers)
    }

    function deletePassenger(idx) {
        // alert("delete" + idx)
        let newPassengers = passengers.filter((p, index) => index !== idx)
        // not equals to idx, then only it will be added to the newPassengers else it will be deleted
        setPassengers(newPassengers)
    }

    return (
        <>
            <h2>Passengers</h2>
            Name <br />
            <input type="text" id="txtName" required/>
            <p />
            Age <br />
            <input type="number" id="txtAge" required/>
            <p></p>
            <button onClick={addPassenger}>Add</button>
            <p></p>
            {passengers.length>0 &&
                <table className='table table-bordered'>
                    <tr><th>Name</th> 
                    <th>Age</th>
                    <th></th>
                    </tr>
                    {
                        passengers.map((p, idx) => 
                            <tr key={idx}>
                                <td>{p.name}</td>
                                <td>{p.age}</td>
                                <td className='text-center'><button onClick={()=>deletePassenger(idx)}>Delete</button></td>
                            </tr>
                        )
                    }
                </table>
            }
        </>
    )
}