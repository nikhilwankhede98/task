import React, { useState } from 'react'
import MaterialTable from 'material-table'
import axios from 'axios'

const Tablee = () => {
    const [details,setDetails] = useState([]);
    

    const delRow = (id) => {
        const newDetail = details.filter((item) => item.id !== id );
        setDetails(newDetail)
    } 
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
        setDetails(res.data);
    })
    .catch(err =>alert(err));

    const columns= [
        {
            title:"ID", field:"id"
        },

        {
            title:"Name", field:"name"
        },

        {
            title:"Username", field:"username"
        },

        {
            title:"Email", field:"email"
        },
    ]

    

    return(
        <div>
            <MaterialTable title="Material Table"
            data={details}
            columns={columns}

            options={{
                actionsColumnIndex: -1
            }}
            actions={[
                {
                  icon: 'save',
                  tooltip: 'Save User',
                  onClick: (event, rowData) => alert("You saved " + rowData.name)
                },
                {
                  icon: 'delete',
                  tooltip: 'Delete User',
                  onClick:(event, rowData) => delRow(rowData.id)
                },

                {
                    icon: 'add',
                    tooltip: 'Add User',
                    isFreeAction: true,
                    onClick: (event) => alert("You want to add a new row")
                }
            ]}

           
            />
        </div>    
    )
}
export default Tablee