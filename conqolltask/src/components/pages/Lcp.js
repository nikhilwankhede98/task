import React, { Component } from 'react';
import ReactTable from "react-table";

class Lcp extends Component {
  
  constructor()
  {
    super()
    this.state={
      posts:[]
    }
  }  
  

  
  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url, {
      method: 'GET',
    }).then(response => response.json()).then(posts => {
     this.setState({posts: posts})
    })
  }
  
  render() {
    const data = this.state.posts;
   const columns = [
      {
        Header: "userID",
        accessor: "userId",
        style:{
          textAlign: "right"
        },
        width: 100
      },
      {
        Header: "ID",
        accessor: "id",
        style:{
          textAlign: "right"
        },
        width: 50
      },
      {
        Header: "Title",
        accessor: "title"
      },
      {
        Header: "Content",
        accessor: "body"
      },
      {
        Header: "Actions",
        filterable: false,
        sortable: false,
        resizable: false,
        Cell: props =>{
          return(
            
            <button style={{background: "red", color: "#fefefe"}}
              onClick={(e)=> {
                  this.deletePoste(props.original.id);
              }}
            >Delete</button>
        )},
        width: 100,
        maxWidth: 100,
        minWidth: 100,
      }
    ]
    return (
      <div>
      <ReactTable
            className="-striped -highlight"
            data={data}
            filterable
            columns={columns}
            defaultPageSize={10}
          >
         
          </ReactTable>
      </div>
          

    );
  }
}

export default Lcp;
