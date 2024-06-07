import React, { useState } from 'react'


function AddPassenger({passengers, addFunc }) {

    let [passenger, setPassenger] = useState("{name: '', age: ''}")
    let [message, setMessage] = useState("")
    // if you have the variable and input element data only goes from variable to input element but not from input to variable - ONE WAT DATA BINDING
    // It does not work in back ways
    // Now we do two way data binding

    function addPassenger(evt) {
        evt.preventDefault()  // do not refresh page 
        setMessage('')  // clear message
        // check whether name is unique
        let result = passengers.find(p => p.name === passenger.name)
        if(result)    // if name already exists
            setMessage("Name already exists")
        
        else 
            addFunc(passenger)  // call function in parent component
        
    }
    function updateValue(e){
        let ename = e.target.name
        let evalue = e.target.value

        setPassenger({...passenger, [ename]: evalue})   //takes property name from that variable and update that property
    }

    function clearAll(e){
        e.preventDefault()
        setPassenger({name: '', age: ''})
    }

    return (
        <>
            <form onSubmit={addPassenger} className=''>
                Name < br />
                <input type="text" id="txtName" value={passenger.name} name="name" onChange={updateValue} required  maxLength="20" />
                &nbsp; <span style={{color:'red'}}>{message}</span>
                <p />
                Age < br />
                <input type="number" id="txtAge" value={passenger.age} name="age" onChange={updateValue} required  min="6"  max="100" />
                <p></p>
                <button className='btn btn-primary' style={{width:'100px'}}>Add</button>
                &nbsp;
                {/* <input type="button" value="clear" onClick={clearAll}/> */}
                <button onClick={clearAll} className='btn btn-danger' style={{width:'100px'}}>Clear</button>
                <p></p>
            </form>
        </>
    )
}

function ListPassengers({ passengers, deleteFunc }) {

    function deletePassenger(idxToDelete) {
        if(window.confirm("Confirm Delete?"))
            deleteFunc(idxToDelete)
    }
    return (
        <>
            {passengers.length > 0 &&
                <table className="table table-bordered">
                    <thead>
                        <tr><th>Name</th>
                            <th>Age</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            passengers.map((p, idx) =>
                                <tr key={idx}>
                                    <td>{p.name}</td>
                                    <td>{p.age}</td>
                                    <td className="text-center">
                                        <button onClick={() => deletePassenger(idx)} className='btn btn-link'>Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            }
        </>
    )
}

export default function PassengersList() {
    let [passengers, setPassengers] = useState([])

    function deletePassenger(idxToDelete) {
        //alert("Delete " + idxToDelete)
        setPassengers(passengers.filter((v, idx) => idx !== idxToDelete))
    }

    function addNewPassenger(newPassenger) {
        setPassengers([...passengers, newPassenger])
    }

    function deleteAll(){
        setPassengers([])
    }
    return (
        <>
            <h2>Passengers</h2>
            <AddPassenger addFunc={addNewPassenger} passengers={passengers}/>
            <ListPassengers passengers={passengers}
                deleteFunc={deletePassenger} />

            {passengers.length > 0 && <button onClick={deleteAll} className='btn btn-danger'>Delete All</button>}
        </>
    )
}