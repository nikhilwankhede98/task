import React, { Component } from 'react'
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

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
});

class Try extends Component {
    state = {
        details:[],
        city:[],
        state:[]
    }
    async componentDidMount() {
        const res= await axios.get('https://api.jsonbin.io/b/5f6f36127243cd7e824413e1')
        this.setState({details: res.data});                                
        console.log(this.state.details)
    }  

    deleteItem(i) {
        const {details} =this.state;
        details.splice(i,1);
        this.setState({details});
    }
    render () {
    return (
        <div className='Test'>
            <h2>Cities</h2>
            
            <TableContainer component={Paper}>
              <Table  aria-label="caption table">
                <caption>A basic table example with a caption</caption>
                <TableHead>
                  <TableRow>
                    <TableCell align="right">State</TableCell>
                    <TableCell align="right">District</TableCell>
                    <TableCell align="right">City</TableCell>
                    <TableCell align="right">Action</TableCell> 
                  </TableRow>
                </TableHead>
                <TableBody>
                    {this.details.map((detail,index) => (
                    <TableRow key={detail.id}>
                      <TableCell align="right">{detail.name}</TableCell>
                      <TableCell align="right">{detail.username}</TableCell>
                      <TableCell align="right">{detail.email}</TableCell>
                      <TableCell align="right">
                        <button onClick={this.deleteItem.bind(this, index)}
                          type="button" className='btn-1' id='btn-11'>Delete</button>
                        <button type="button" className='btn-1' id='btn-22'>Shortlist</button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            
        </div>     
        ); 
    }      
}    
export default Try