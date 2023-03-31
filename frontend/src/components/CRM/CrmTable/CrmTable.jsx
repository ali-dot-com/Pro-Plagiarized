import React, { useEffect, useState } from "react";
import "./crmTable.css";
import pdfIcon from '../../../assets/pdf-file.png'
import pdf from '../../../assets/20F-1033.pdf'
//Bootstrap imports
import Table from "react-bootstrap/Table";
import { Container } from "react-bootstrap";

const CrmTable = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    setRecords([
      {
        type: "Project",
        name: "Website Development",
        submit_date: "2023-02-15",
        expected_date: "2023-08-15",
        progress: "60%",
        report: "Backend development and database setup in progress",
      },

      {
        type: "Task",
        name: "Marketing Campaign",
        submit_date: "2023-03-01",
        expected_date: "2023-06-01",
        progress: "25%",
        report: "Initial planning and research completed",
      },
      {
        type: "Meeting",
        name: "Quarterly Review",
        submit_date: "2023-04-01",
        expected_date: "2023-05-01",
        progress: "100%",
        report: "Presentation and discussion completed",
      },

      {
        type: "Task",
        name: "Complete project proposal",
        submit_date: "2022-05-01",
        expected_date: "2022-06-01",
        progress: "50%",
        report: "Working on researching and outlining proposal",
      },
    ]);
  }, []);

  return (
    <Container className="table-wrapper">
      <Table  striped responsive="lg">
        <thead>
          <tr>
            <th>Type</th>
            <th >Name</th>
            <th>Submite Date</th>
            <th>Expected Date</th>
            <th>Progress</th>
            <th>Report</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
          <tr >
            <td style={{width:"10%"}}>{record.type}</td>
            <td style={{width:"20%"}}>{record.name}</td>
            <td style={{width:"15%"}}>{record.submit_date}</td>
            <td style={{width:"15%"}}>{record.expected_date}</td>
            <td style={{width:"10%"}} >{record.progress}</td>
            <td ><a href={pdf}> <img src={pdfIcon} alt="pdf" /><span className="px-3" style={{fontSize:"0.6rem"}}>Report File</span></a></td>
          </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default CrmTable;
