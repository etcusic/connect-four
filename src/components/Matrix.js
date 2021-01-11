import React, { Component } from 'react'
import ButtonCell from './ButtonCell'
import Cell from './Cell'
import TokenButton from './TokenButton'

export class Matrix extends Component {
  render() {
    return (
      <div>
        <table id="game-board-table">
            <tbody>
                <tr className="row">
                    <td className="col-1"><Cell /></td>
                    <td className="col-2"><Cell /></td>
                    <td className="col-3"><Cell /></td>
                    <td className="col-4"><Cell /></td>
                    <td className="col-5"><Cell /></td>
                    <td className="col-6"><Cell /></td>
                    <td className="col-7"><Cell /></td>
                </tr>
                <tr className="row">
                    <td className="col-1"><Cell /></td>
                    <td className="col-2"><Cell /></td>
                    <td className="col-3"><Cell /></td>
                    <td className="col-4"><Cell /></td>
                    <td className="col-5"><Cell /></td>
                    <td className="col-6"><Cell /></td>
                    <td className="col-7"><Cell /></td>
                </tr>
                <tr className="row">
                    <td className="col-1"><Cell /></td>
                    <td className="col-2"><Cell /></td>
                    <td className="col-3"><Cell /></td>
                    <td className="col-4"><Cell /></td>
                    <td className="col-5"><Cell /></td>
                    <td className="col-6"><Cell /></td>
                    <td className="col-7"><Cell /></td>
                </tr>
                <tr className="row">
                    <td className="col-1"><Cell /></td>
                    <td className="col-2"><Cell /></td>
                    <td className="col-3"><Cell /></td>
                    <td className="col-4"><Cell /></td>
                    <td className="col-5"><Cell /></td>
                    <td className="col-6"><Cell /></td>
                    <td className="col-7"><Cell /></td>
                </tr>
                <tr className="row">
                    <td className="col-1"><Cell /></td>
                    <td className="col-2"><Cell /></td>
                    <td className="col-3"><Cell /></td>
                    <td className="col-4"><Cell /></td>
                    <td className="col-5"><Cell /></td>
                    <td className="col-6"><Cell /></td>
                    <td className="col-7"><Cell /></td>
                </tr>
                <tr className="row">
                    <td className="col-1"><Cell /></td>
                    <td className="col-2"><Cell /></td>
                    <td className="col-3"><Cell /></td>
                    <td className="col-4"><Cell /></td>
                    <td className="col-5"><Cell /></td>
                    <td className="col-6"><Cell /></td>
                    <td className="col-7"><Cell /></td>
                </tr>
                <tr id="button-row">
                    <td id="token-button-1"><ButtonCell /></td>
                    <td id="token-button-2"><ButtonCell /></td>
                    <td id="token-button-3"><ButtonCell /></td>
                    <td id="token-button-4"><ButtonCell /></td>
                    <td id="token-button-5"><ButtonCell /></td>
                    <td id="token-button-6"><ButtonCell /></td>
                    <td id="token-button-7"><ButtonCell /></td>
                </tr>
            </tbody>
        </table>
      </div>
    )
  }
}

export default Matrix