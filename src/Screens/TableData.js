import React, {useState,useEffect} from "react";
import {Container, Table} from 'react-bootstrap';
import axios from "axios";

const TableData =({studentId}) => {

    const [resultDetails, setResultDetails] = useState([])

    useEffect(() => {
axios.get("http://localhost:3001/stdinfo")
.then((response) =>{
    let temp = []
    temp = response.data.filter((d) => d.registerId  === studentId )
    setResultDetails(temp) 
}) 
    },[studentId])

    const getTotalMarks = (value) => {
         let sum = 0
         resultDetails.map((d) => {
           sum += Number(d[value])
        })
        return sum
    }

    return( 
        <Container>
        <Table className="my-5" responsive bordered>
            <thead>
                <tr>
                    <th style={{textAlign:"center"}}>Sl No.</th>
                    <th colSpan={2}>Subject
                        <th style={{padding:"0px 10rem"}}>Code</th>
                        <th style={{paddingLeft:"10rem"}}>Subject</th>
                    </th>

                    <th colSpan={3}>Examination Marks Obtained
                        <th style={{paddingLeft:"10rem"}}>Max</th>
                        <th style={{paddingLeft:"10rem"}}>Min</th>
                        <th style={{paddingLeft:"10rem"}}>Obtained</th>
                    </th>
                    <th style={{paddingLeft:"10rem"}}>
                        Subject Result
                    </th>
                </tr>
            </thead>

            <tbody>
                {
                    resultDetails.map((data,index) =>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{data.code}</td>
                            <td>{data.Subject}</td>
                            <td>{data.max_marks}</td>
                            <td>{data.min_marks}</td>
                            <td>{data.obtained_marks}</td>
                            <td>{data.result}</td>
                        </tr>
                    ))
                }
            </tbody>

            <thead>
                <tr>
                    <th colSpan={3}>Grand Total</th>
                    <td>{getTotalMarks("max_marks")}</td>
                    <td>{getTotalMarks("min_marks")}</td>
                    <td>{getTotalMarks("obtained_marks")}</td>
                    <td>PASS</td>
                </tr>
            </thead>
        </Table>

        <p><strong>Total Marks obtained [in words]</strong>: Tow Hundred and Sixty Only</p>
        <p><strong>Result</strong>: PASS</p>
        <p><strong>Percentage</strong>:65%</p>
        <p><strong>Date</strong>:Dec-2024</p>
        
        </Container>
    )
}
export default TableData;