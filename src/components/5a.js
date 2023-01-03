//form 5a telengana and andhra pradesh
const FiveA = () => {
  return (
    <div
      className="fiveA"
      style={{ border: "solid", borderColor: "gray", textAlign: "left" }}
    >
      {/* header */}
      <div
        className="header"
        style={{
          display: "flex",
          flexDirection: "row",
          borderBottom: "solid",
          borderColor: "gray",
          textAlign: "center",
        }}
      >
        <div
          style={{
            padding: "4px",
            borderRight: "solid",
            borderColor: "gray",
          }}
        >
          FORM V <br />
          (See Rule 12 )
        </div>
        <div
          style={{
            padding: "4px",
          }}
        >
          RETURN OF TAX PAYABLE BY EMPLOYER <br /> Under Sub-section (1) of
          Section 7 of the A.P. Tax on Professions, Traders, Calling and <br />
          Employments Act, 1987
        </div>
      </div>
      {/* first body */}
      <div style={{ fontSize: "14px" }}>
        <p>
          Return on Tax Payable for the month ending on <span>31/01/2021</span>
        </p>
        <p>
          Name of the Employer : <span>Lawcubator Technologies Pvt Ltd</span>
        </p>
        <p>
          Address :{" "}
          <span>
            758,3rd floor, 19th main, Dollar Scheme layout,HSR Layout 2nd
            Sector, Bangalore, India-560102
          </span>
        </p>
        <p>
          Registration Certificate No : <span>value</span>
        </p>
        <p>
          Number of employees during the month in respect of whom the tax
          payable is as under :-
        </p>
      </div>
      {/* first table */}
      <div className="table">
        <table>
          <thead>
            <th style={{ width: "45%" }}>
              Employees whose monthly salaries or wages or both
            </th>
            <th>No. of Employees</th>
            <th>Rate of Tax</th>
            <th>Amount of Tax</th>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>total</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>

            <tr style={{ fontSize: "14px" }}>
              Add : Simple interest payable (if any) on the above amount at two
              percent per month or part thereof ( vide section II (2) of the Act
              ).
            </tr>
            <tr>
              <th>GRAND TOTAL</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
      {/* second body */}
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            fontSize: "14px",
          }}
        >
          <p>
            Amount paid <span>value</span>
          </p>
          <p>
            Under Challan No <span>dated</span>
          </p>
          <p>
            dated <span>date</span>
          </p>
        </div>
        <p style={{ fontSize: "14px" }}>
          I certify that all the employees who are liable to pay tax in my
          employment during the period of return have been covered by the
          foregoing particulars. I also certify that the necessary revision in
          the amount of tax deductable from the salary or wages of the employees
          on account variation in the salary or wages earned by them has been
          made wherever necessary. <br />I solemnly declare that the above
          statements are true to the best of my knowledge and belief.
        </p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              fontSize: "14px",
            }}
          >
            <p>
              Place: <span>place</span>
            </p>
            <p>
              Signature <span>(Employer)</span>
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              fontSize: "14px",
            }}
          >
            <p>Date: 02 January 2023</p>
            <p>Signature</p>
          </div>
        </div>
      </div>
      {/* last body */}
      <div>
        <p>(FOR OFFICIAL USE ONLY)</p>
        <p>The return is accepted on verification</p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p>Tax assessed</p>
            <p>Tax Paid</p>
            <p>Balance</p>
          </div>
          <div>
            <p>
              Rs..............................................................
            </p>
            <p>
              Rs..............................................................
            </p>
            <p>
              Rs..............................................................
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p>
              ..............................................................
            </p>
            <p>Assessing Authority</p>
          </div>
        </div>
      </div>
      <p>
        Note : Where the return is not acceptable separate order of assessment
        should be passed.
      </p>
    </div>
  );
};

export default FiveA;
