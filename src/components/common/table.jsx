import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ columns, sortColumn, onSort, data }) => {
  return (
    <table className="table">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      {/* <thead>
      <tr>
        <th onClick={() => this.raiseSort("title")}>Title</th>
        <th onClick={() => this.raiseSort("genre.name")}>Genre</th>
        <th onClick={() => this.raiseSort("numberInStock")}>Stock</th>
        <th onClick={() => this.raiseSort("dailyRentalRate")}>Rate</th>
        <th></th>
        <th></th>
      </tr>
    </thead> */}

      <TableBody data={data} columns={columns} />
      {/* <tbody>
      {movies.map((movie) => (
        <tr key={movie._id}>
          <td>{movie.title}</td>
          <td>{movie.genre.name}</td>
          <td>{movie.numberInStock}</td>
          <td>{movie.dailyRentalRate}</td>
          <td>
            <Like liked={movie.liked} onClick={() => onLike(movie)} />
          </td>
          <td>
            <button
              onClick={() => onDelete(movie)}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody> */}
    </table>
  );
};

export default Table;
