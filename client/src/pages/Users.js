import { useEffect, useState } from "react";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import $ from "jquery";

const names = [
  {
    name: "Asif Imam",
    ageSex: "25/M",
    mobile: "9911471995",
    address: "Narayanpur, Sakri",
    govtId: "991124199423",
    guardian: "Shaukat Ali",
    nationality: "Indian",
  },
  {
    name: "Asif Imam",
    ageSex: "25/M",
    mobile: "9911471995",
    address: "Narayanpur, Sakri",
    govtId: "991124199423",
    guardian: "Shaukat Ali",
    nationality: "Indian",
  },
  {
    name: "Asif Imam",
    ageSex: "25/M",
    mobile: "9911471995",
    address: "Narayanpur, Sakri",
    govtId: "991124199423",
    guardian: "Shaukat Ali",
    nationality: "Indian",
  },
  {
    name: "Asif Imam",
    ageSex: "25/M",
    mobile: "9911471995",
    address: "Narayanpur, Sakri",
    govtId: "991124199423",
    guardian: "Shaukat Ali",
    nationality: "Indian",
  },
];

const Users = ({ usersList }) => {
  useEffect(() => {
    if (!$.fn.DataTable.isDataTable("#myTable")) {
      $(document).ready(function () {
        setTimeout(function () {
          $("#table").DataTable({
            pagingType: "full_numbers",
            pageLength: 5,
            processing: true,
            dom: "Bfrtip",
            select: {
              style: "single",
            },

            buttons: [
              {
                extend: "pageLength",
                className: "btn btn-secondary bg-secondary",
              },
              {
                extend: "copy",
                className: "btn btn-secondary bg-secondary",
              },
              {
                extend: "csv",
                className: "btn btn-secondary bg-secondary",
              },
              {
                extend: "print",
                customize: function (win) {
                  $(win.document.body).css("font-size", "10pt");
                  $(win.document.body)
                    .find("table")
                    .addClass("compact")
                    .css("font-size", "inherit");
                },
                className: "btn btn-secondary bg-secondary",
              },
            ],

            fnRowCallback: function (
              nRow,
              aData,
              iDisplayIndex,
              iDisplayIndexFull
            ) {
              var index = iDisplayIndexFull + 1;
              $("td:first", nRow).html(index);
              return nRow;
            },

            lengthMenu: [
              [10, 20, 30, 50, -1],
              [10, 20, 30, 50, "All"],
            ],
            columnDefs: [
              {
                targets: 0,
                render: function (data, type, row, meta) {
                  return type === "export" ? meta.row + 1 : data;
                },
              },
            ],
            bDestroy: true,
          });
        }, 1000);
      });
    }
  }, []);

  const showTable = () => {
    try {
      return usersList?.map((item, index) => {
        return (
          <tr>
            <td className="text-xs font-weight-bold">{index + 1}</td>
            <td className="text-xs font-weight-bold">{item.name}</td>
            <td className="text-xs font-weight-bold">
              {item.age}/{item.sex}
            </td>
            <td className="text-xs font-weight-bold">{item.mobileNo}</td>
            <td className="text-xs font-weight-bold">{item.address}</td>
            <td className="text-xs font-weight-bold">
              {item.aadhaarNo || item.panNo}
            </td>
            <td className="text-xs font-weight-bold">{item.guardianName}</td>
            <td className="text-xs font-weight-bold">{item.nationality}</td>
            <td></td>
          </tr>
        );
      });
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className="user-table-container center">
      <div class="container-fluid py-4">
        <div class="table-responsive p-0 pb-2">
          <table
            id="table"
            className="table align-items-center justify-content-center mb-0"
          >
            <thead>
              <tr>
                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                  S/N
                </th>
                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                  Name
                </th>
                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                  Age/Sex
                </th>
                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                  Mobile
                </th>
                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                  Address
                </th>
                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                  Govt ID
                </th>
                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                  Guardian
                </th>
                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                  Nationality
                </th>
                <th></th>
              </tr>
            </thead>

            <tbody>{usersList.length > 0 && showTable()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
