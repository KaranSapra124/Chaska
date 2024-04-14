import { useEffect, useMemo, useState } from "react";
import ownerMethod from "../Methods/ownerMethod";
import { useTable } from "react-table";
import { FaEdit, FaTrash } from "react-icons/fa";

export const TableLayout = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    ownerMethod("/get-product", null, setData);
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "Actions",
        accessor: "actions",
        Cell: ({ row }) => (
          <div className="flex justify-center items-center">
            <button
              className="mr-5"
              onClick={() => {
                handleEdit(row.original._id);
                // console.log(row.original._id);
              }}
            >
              <FaEdit />
            </button>
            <button
              className="mr-5"
              onClick={() => handleDelete(row.original._id)}
            >
              <FaTrash />
            </button>
          </div>
        ),
      },
      {
        Header: "ID",
        accessor: "_id",
      },
      { Header: "Name", accessor: "mealName" },
      {
        Header: "Category",
        accessor: "mealCategory",
      },
      {
        Header: "Rating",
        accessor: "mealRating",
      },
      {
        Header: "Price",
        accessor: "mealPrice",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <>
      <table
        {...getTableProps()}
        className="border-collapse  border border-gray-300 mt-2 "
      >
        <thead className="border-2 ">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className="border-2 p-2 ">
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="border-2">
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} className="p-2 border-2">
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
