const Five = () => {
  const data = [
    {
      name: "Return of tax payable for the year ending on",
      value: "Year 2020 - 2021",
    },
    {
      name: "Name of the employer",
      value: "Lawcubator Technologies Pvt Ltd",
    },
    {
      name: "Address",
      value:
        "758,3rd floor, 19th main, Dollar Scheme layout,HSR Layout 2nd Sector, Bangalore,India-560102",
    },
    {
      name: "Registration Certificate No",
      value: ".........",
    },
    {
      name: "Tax paid during the year is as under",
      value: ".........",
    },
    {
      name: "Total tax payble for the year ending",
      value: ".........",
    },
    {
      name: "Tax paid as per monthly statement",
      value: ".........",
    },
    {
      name: "Balance tax payable",
      value: ".........",
    },
    {
      name: "Balance tax paid under challan no",
      value: ".........",
    },
  ];
  return (
    <>
      <p>( See Rule 11 )</p>
      <h3>
        RETURN OF TAX PAYABLE BY EMPLOYER UNDER SUB-SECTION(1) OF SECTION 6-A OF
        THE KARNATAKA PT ON PROFESSION, TRADE, CALLINGS AND EMPLOYMENT ACT 1976
      </h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "80%",
          margin: "auto",
        }}
      >
        <p>Name of the A.P.T.O Circle Number</p>
        <p>:</p>
        <p>...................</p>
      </div>

      <table>
        <tbody>
          {data.map((data, key) => {
            return (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{data.name}</td>
                <td>:</td>
                <td>{data.value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Month</th>
            <th>Tax Deducted</th>
            <th>Tax Paid</th>
            <th>Balance Tax</th>
            <th>Paid Under Challan No And Date</th>
          </tr>
          <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
          </tr>
        </thead>
      </table>

      <p>
        I Certify that all the employees who are liable to pay the tax in my
        employment during the period of return have been covered by the
        foregoing particular. I also certify that the necessary revision in the
        amount of tax deductable from the salary or wages of the employess on
        account of variation in the salary of wages earned by them has been made
        where necessary. <br />
        I, solemnly declare that the above statement are true to the best of my
        knowledge and belief.
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <p>Place :</p>
          <p>
            Date : <span>02 Jan 2023</span>
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <p>Signature</p>
          <p>Employer Status</p>
        </div>
      </div>
    </>
  );
};

export default Five;
