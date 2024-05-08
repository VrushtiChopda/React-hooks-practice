import React, { useState } from 'react'
import { Form, FormControl } from 'react-bootstrap'
function CounterObj() {
    const [name, setName] = useState({
        "fname": "",
        "lname": ""
    })
    return (
        <>
            <center>
                <Form><br />
                    <FormControl
                        type='text'
                        className='w-25 border border-black'
                        value={name.fname}
                        placeholder='Enter First Name'
                        onChange={e => setName({...name, fname: e.target.value })} /><br />
                    <FormControl
                        type='text'
                        className='w-25 border border-black'
                        value={name.lname}
                        placeholder='Enter Last Name'
                        onChange={e => setName({...name, lname: e.target.value })} />
                </Form>
                <h2>First name : {name.fname}</h2>
                <h2>Last name : {name.lname}</h2>
            </center>
        </>
    )
}

export default CounterObj
