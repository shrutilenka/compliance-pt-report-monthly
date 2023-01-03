import "./../styles/table.css";

const Table = () => {
  const data = [
    {
      slNo: 1,
      empNo: "LC002",
      name: "SREEMOYEE MALAKAR",
      taxBasic: "103,650.00",
      amount: 200.0,
    },
    {
      slNo: 2,
      empNo: "LC005",
      name: "VEENA TERESA PAUL",
      taxBasic: "98,050.00",
      amount: 200.0,
    },
    {
      slNo: 3,
      empNo: "LC010",
      name: "Martin VK",
      taxBasic: "50,577.00",
      amount: 200.0,
    },
  ];

  return (
    <div>
      <table>
        <thead>
          <h1>Lawcubator Technologies Pvt Ltd</h1>
          <tr>STATEMENT OF PROFESSION TAX FOR JANUARY 2021 (KARNATAKA)</tr>

          <tr>
            <th>Sr. No.</th>
            <th>Employee No</th>
            <th>Name</th>
            <th>Prof Tax Basic</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, key) => {
            return (
              <tr key={key}>
                <td>{value.slNo}</td>
                <td>{value.empNo}</td>
                <td>{value.name}</td>
                <td>{value.taxBasic}</td>
                <td>{value.amount}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <h1>Summary</h1>
          <tr>
            <td></td>
            <td></td>
            <td>Rate</td>
            <td>No of employees</td>
            <td>Amount</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td id="rate">200</td>
            <td id="totalEmp">{data.length}</td>
            <td>{data.length * 200}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
