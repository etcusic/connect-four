import React, { Component } from 'react'
import Cell from './Cell'

export class Matrix extends Component {
  render() {
    return (
      <div>
        <table>
            <tr id="row-1">
                <td class="col-1"><Cell /></td>
                <td class="col-2"><Cell /></td>
                <td class="col-3"><Cell /></td>
                <td class="col-4"><Cell /></td>
                <td class="col-5"><Cell /></td>
                <td class="col-6"><Cell /></td>
                <td class="col-7"><Cell /></td>
            </tr>
            <tr id="row-2">
                <td class="col-1"><Cell /></td>
                <td class="col-2"><Cell /></td>
                <td class="col-3"><Cell /></td>
                <td class="col-4"><Cell /></td>
                <td class="col-5"><Cell /></td>
                <td class="col-6"><Cell /></td>
                <td class="col-7"><Cell /></td>
            </tr>
            <tr id="row-3">
                <td class="col-1"><Cell /></td>
                <td class="col-2"><Cell /></td>
                <td class="col-3"><Cell /></td>
                <td class="col-4"><Cell /></td>
                <td class="col-5"><Cell /></td>
                <td class="col-6"><Cell /></td>
                <td class="col-7"><Cell /></td>
            </tr>
            <tr id="row-4">
                <td class="col-1"><Cell /></td>
                <td class="col-2"><Cell /></td>
                <td class="col-3"><Cell /></td>
                <td class="col-4"><Cell /></td>
                <td class="col-5"><Cell /></td>
                <td class="col-6"><Cell /></td>
                <td class="col-7"><Cell /></td>
            </tr>
            <tr id="row-5">
                <td class="col-1"><Cell /></td>
                <td class="col-2"><Cell /></td>
                <td class="col-3"><Cell /></td>
                <td class="col-4"><Cell /></td>
                <td class="col-5"><Cell /></td>
                <td class="col-6"><Cell /></td>
                <td class="col-7"><Cell /></td>
            </tr>
            <tr id="row-6">
                <td class="col-1"><Cell /></td>
                <td class="col-2"><Cell /></td>
                <td class="col-3"><Cell /></td>
                <td class="col-4"><Cell /></td>
                <td class="col-5"><Cell /></td>
                <td class="col-6"><Cell /></td>
                <td class="col-7"><Cell /></td>
            </tr>
        </table>
      </div>
    )
  }
}

export default Matrix