import React, { Component } from 'react';
import { DropdownButton, InputGroup } from 'react-bootstrap';
import SeatPicker from 'react-seat-picker';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader } from 'antd';

const Option = Select.Option;

class SeatBooking extends Component {
  state = {
    loading: false,
    typeOfSeat: 'Premium',
    noOfSeats: 1,
    amount:200
  };

  addSeatCallback = ({ row, number, id }, addCb) => {
    this.setState(
      {
        loading: true,
      },
      async () => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log(`Added seat ${number}, row ${row}, id ${id}`);
        const newTooltip = `Seats selected by you`;
        addCb(row, number, id, newTooltip);
        this.setState({ loading: false });
      }
    );
  };

  addSeatCallbackContinousCase = ({ row, number, id }, addCb, params, removeCb) => {
    this.setState(
      {
        loading: true,
      },
      async () => {
        if (removeCb) {
          await new Promise((resolve) => setTimeout(resolve, 750));
          console.log(`Removed seat ${params.number}, row ${params.row}, id ${params.id}`);
          removeCb(params.row, params.number);
        }
        await new Promise((resolve) => setTimeout(resolve, 750));
        console.log(`Added seat ${number}, row ${row}, id ${id}`);
        const newTooltip = `Seats selected by you`;
        addCb(row, number, id, newTooltip);
        this.setState({ loading: false });
      }
    );
  };

  removeSeatCallback = ({ row, number, id }, removeCb) => {
    this.setState(
      {
        loading: true,
      },
      async () => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log(`Removed seat ${number}, row ${row}, id ${id}`);
        // A value of null will reset the tooltip to the original while '' will hide the tooltip
        const newTooltip = ['A', 'B', 'C'].includes(row) ? null : '';
        removeCb(row, number, newTooltip);
        this.setState({ loading: false });
      }
    );
  };

  handleSeatSelect = (value) => {
    this.setState({
      noOfSeats: value,
      amount:200 * value
    });
  };

  handleTypeSelect = (value) => {
    this.setState({
      typeOfSeat: value,
    });
  };

  // menu = (
  //   <Menu
  //     items={[
  //       {
  //         label: (
  //           <p>
  //             Premium
  //           </p>
  //         ),
  //         key: '0',
  //       },
  //       {
  //         label: (
  //           <p >
  //             Standard
  //           </p>
  //         ),
  //         key: '1',
  //       },
  //       {
  //         type: 'divider',
  //       }
  //     ]}
  //   />
  // );

  // Seatmenu = (
  //   <Menu
  //     items={[
  //       {
  //         label: (
  //           <p>
  //             0
  //           </p>
  //         ),
  //         key: '0',
  //       },
  //       {
  //         label: (
  //           <p >
  //             1
  //           </p>
  //         ),
  //         key: '1',
  //       },
  //       {
  //         label: (
  //           <p>
  //             2
  //           </p>
  //         ),
  //         key: '2',
  //       },
  //       {
  //         label: (
  //           <p >
  //             3
  //           </p>
  //         ),
  //         key: '3',
  //       },
  //       {
  //         label: (
  //           <p>
  //             4
  //           </p>
  //         ),
  //         key: '4',
  //       },
  //       {
  //         label: (
  //           <p >
  //             5
  //           </p>
  //         ),
  //         key: '5',
  //       },
  //       {
  //         type: 'divider',
  //       }
  //     ]}
  //   />
  // );

  render() {
    const rows = [
      [
        { id: 1, number: 1, isSelected: true, tooltip: 'Reserved by you' },
        { id: 2, number: 2, tooltip: 'Cost: 15$' },
        null,
        {
          id: 3,
          number: '3',
          isReserved: true,
          orientation: 'east',
          tooltip: 'Reserved by Rogger',
        },
        { id: 4, number: '4', orientation: 'west' },
        null,
        { id: 5, number: 5 },
        { id: 6, number: 6 },
      ],
      [
        {
          id: 7,
          number: 1,
          isReserved: true,
          tooltip: 'Reserved by Matthias Nadler',
        },
        { id: 8, number: 2, isReserved: true },
        null,
        { id: 9, number: '3', isReserved: true, orientation: 'east' },
        { id: 10, number: '4', orientation: 'west' },
        null,
        { id: 11, number: 5 },
        { id: 12, number: 6 },
      ],
      [
        { id: 13, number: 1 },
        { id: 14, number: 2 },
        null,
        { id: 15, number: 3, isReserved: true, orientation: 'east' },
        { id: 16, number: '4', orientation: 'west' },
        null,
        { id: 17, number: 5 },
        { id: 18, number: 6 },
      ],
      [
        { id: 19, number: 1, tooltip: 'Cost: 25$' },
        { id: 20, number: 2 },
        null,
        { id: 21, number: 3, orientation: 'east' },
        { id: 22, number: '4', orientation: 'west' },
        null,
        { id: 23, number: 5 },
        { id: 24, number: 6 },
      ],
      [
        { id: 25, number: 1, isReserved: true },
        { id: 26, number: 2, orientation: 'east' },
        null,
        { id: 27, number: '3', isReserved: true },
        { id: 28, number: '4', orientation: 'west' },
        null,
        { id: 29, number: 5, tooltip: 'Cost: 11$' },
        { id: 30, number: 6, isReserved: true },
      ],
    ];
    const { loading } = this.state;
    return (
      <div>
        <div style={{ padding: '20px', display:'inline-flex' }}>

        <InputGroup>
          <Select onChange={(e) => this.handleTypeSelect(e)} defaultValue='Premium'>
            <Option value='Premium'>Premium</Option>
            <Option value='Standard'>Standard</Option>
          </Select>
        </InputGroup>
        <InputGroup>
          <Select onChange={(e) => this.handleSeatSelect(e)} defaultValue='1'>
            <Option value='1'>1</Option>
            <Option value='2'>2</Option>
            <Option value='3'>3</Option>
            <Option value='4'>4</Option>
            <Option value='5'>5</Option>
          </Select>
        </InputGroup>
        </div>

        <p style={{ padding: '10px'}}>Amount = {this.state.amount}</p>

        <div style={{ marginTop: '100px' }}>
          <SeatPicker
            addSeatCallback={this.addSeatCallback}
            removeSeatCallback={this.removeSeatCallback}
            rows={rows}
            maxReservableSeats={this.state.noOfSeats}
            alpha
            visible
            selectedByDefault
            loading={loading}
            tooltipProps={{ multiline: true }}
          />
        </div>
      </div>
    );
  }
}

export default SeatBooking;
