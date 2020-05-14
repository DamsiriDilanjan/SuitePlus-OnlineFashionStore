import React, { Component } from 'react'

export default class ProductTable extends Component {
    render() {
        return (
            <div className="container">

                <table className="table" style={{width:"100%"}}>
                    <thead>
                        <tr className="table-active">
                            <th scope="col">Code</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Details</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td><a href="#"><button className="btn btn-outline-primary btn-sm">Details</button></a></td>
                            <td><a href="#"><button className="btn btn-outline-secondary btn-sm">Update</button></a></td>
                            <td><a href="#"><button className="btn btn-outline-danger btn-sm">Delete</button></a></td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
        )
    }
}
