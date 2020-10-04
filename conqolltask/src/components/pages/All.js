import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { DeleteForeverTwoTone } from '@material-ui/icons';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
});

const All = () => {

    const [details,setDetails] = useState([]);
    const [newdetail,setNewdetail] = useState([]);
    const [shortlisted,setShortlisted] = useState([]);


    const sayHello = () => {
    alert('Hello');
    alert('DO you want to shortlist this item?');
    alert('Hello');
    }
    
    const delRow = (id) => {
      const newdetail = details.filter((item) => item.id !== id );
      setDetails(newdetail)
    } 
   
    const classes = useStyles();    
    axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            setDetails(res.data);
        })
        .catch(err =>alert(err));
    

    return (
        <div className='Test'>
            <h2>Cities</h2>
             
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="caption table">
                <caption>A basic table example with a caption</caption>
                <TableHead>
                  <TableRow>
                    <TableCell align="right">State</TableCell>
                    <TableCell align="right">District</TableCell>
                    <TableCell align="right">City</TableCell>
                    <TableCell align="right">Actions</TableCell> 
                  </TableRow>
                </TableHead>
                <TableBody>
                    {details.map((detail,index) => (
                    <TableRow key={detail.id}>
                      <TableCell align="right">{detail.name}</TableCell>
                      <TableCell align="right">{detail.username}</TableCell>
                      <TableCell align="right">{detail.email}</TableCell>
                      <TableCell align="right">
                        <button onClick={() => delRow(detail.id)} type="button" className='btn-1' id='btn-11'>Delete</button>
                        <button onClick={sayHello} type="button" className='btn-1' id='btn-22'>Shortlist</button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            
        </div>     
        );   
}    
export default All