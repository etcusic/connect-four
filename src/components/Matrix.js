import React, { Component } from 'react'
import Cell from './Cell'

export class Matrix extends Component {
  render() {
    return (
      <div>
        <table>
            <tr id="row-1">
                <td className="col-1"><Cell /></td>
                <td className="col-2"><Cell /></td>
                <td className="col-3"><Cell /></td>
                <td className="col-4"><Cell /></td>
                <td className="col-5"><Cell /></td>
                <td className="col-6"><Cell /></td>
                <td className="col-7"><Cell /></td>
            </tr>
            <tr id="row-2">
                <td className="col-1"><Cell /></td>
                <td className="col-2"><Cell /></td>
                <td className="col-3"><Cell /></td>
                <td className="col-4"><Cell /></td>
                <td className="col-5"><Cell /></td>
                <td className="col-6"><Cell /></td>
                <td className="col-7"><Cell /></td>
            </tr>
            <tr id="row-3">
                <td className="col-1"><Cell /></td>
                <td className="col-2"><Cell /></td>
                <td className="col-3"><Cell /></td>
                <td className="col-4"><Cell /></td>
                <td className="col-5"><Cell /></td>
                <td className="col-6"><Cell /></td>
                <td className="col-7"><Cell /></td>
            </tr>
            <tr id="row-4">
                <td className="col-1"><Cell /></td>
                <td className="col-2"><Cell /></td>
                <td className="col-3"><Cell /></td>
                <td className="col-4"><Cell /></td>
                <td className="col-5"><Cell /></td>
                <td className="col-6"><Cell /></td>
                <td className="col-7"><Cell /></td>
            </tr>
            <tr id="row-5">
                <td className="col-1"><Cell /></td>
                <td className="col-2"><Cell /></td>
                <td className="col-3"><Cell /></td>
                <td className="col-4"><Cell /></td>
                <td className="col-5"><Cell /></td>
                <td className="col-6"><Cell /></td>
                <td className="col-7"><Cell /></td>
            </tr>
            <tr id="row-6">
                <td className="col-1"><Cell /></td>
                <td className="col-2"><Cell /></td>
                <td className="col-3"><Cell /></td>
                <td className="col-4"><Cell /></td>
                <td className="col-5"><Cell /></td>
                <td className="col-6"><Cell /></td>
                <td className="col-7"><Cell /></td>
            </tr>
        </table>
      </div>
    )
  }
}

export default Matrix