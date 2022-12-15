import React, { useState } from "react";
import { ButtonGroup, Table, ToggleButton } from "react-bootstrap";

const Request = () => {
  const [radioValue, setRadioValue] = useState("1");

  // console.log(radioValue);
  const radios = [
    { name: "ETH Transaction History", value: "1" },
    { name: "TestLink Transaction History", value: "2" },
  ];

  return (
    <div className="my-3">
      <ButtonGroup className="gap-3 mb-3">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? "outline-blue" : "outline-blue"}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>

      {radioValue === "1" ? (
        <div>
          <Table className="w-50" bordered>
            <thead>
              <tr>
                <th>Sr</th>
                <th>Time</th>
                <th>Amount</th>
                <th>Hash</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>12:30 AM</td>
                <td>487</td>
                <td>4s8er5s5fe57rjmxnfuewrurks</td>
              </tr>
              <tr>
                <td>2</td>
                <td>10:30 AM</td>
                <td>875</td>
                <td>sf7s7ers4e7r7wser</td>
              </tr>
              <tr>
                <td>3</td>
                <td>11:30 AM</td>
                <td>797</td>
                <td>se4s7er7</td>
              </tr>
            </tbody>
          </Table>
        </div>
      ) : (
        <div>
          <Table className="w-50" bordered>
            <thead>
              <tr>
                <th>Sr</th>
                <th>Time</th>
                <th>Amount</th>
                <th>Hash</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>08:30 AM</td>
                <td>748</td>
                <td>7s7effkeurusue4</td>
              </tr>
              <tr>
                <td>2</td>
                <td>10:23 AM</td>
                <td>974</td>
                <td>sfe7r7sr4fer</td>
              </tr>
              <tr>
                <td>3</td>
                <td>11:10 AM</td>
                <td>874</td>
                <td>s4e7s8er</td>
              </tr>
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default Request;
