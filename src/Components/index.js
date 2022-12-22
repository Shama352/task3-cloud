import React from 'react';
import { getDatabase, ref, set, onValue } from "firebase/database";
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { dataRef } from '../firebase';


export class RealTimeDatabase extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }


    componentDidMount() {
        dataRef.ref().child('images').on('value', (data) => {
            const getData = Object.values(data.val());
            this.setState({ data: getData });
            console.log(getData);
        });

    }


    deleteUrlFromDatabase = (index) => {
        const { data } = this.state;
        data.splice(index, 1);
        this.setState({ data: data });
        dataRef.ref().child('images').set(data);
    }



    render() {
        return (
            <Table striped bordered hover variant="dark"  >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>URL</th>
                        <th>Button</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    <a href={item} target="_blank" rel="noreferrer">{item}</a>
                                </td>
                                <td>
                                    <button onClick={() => this.deleteUrlFromDatabase(index)}>Delete</button>
                                </td>
                            </tr>

                        )
                    })}


                </tbody>
            </Table>
        );
    }
}