import React, { useState } from "react";
import PlusCircleIcon from "@heroicons/react/24/outline/PlusCircleIcon";

const InputField = ({ id, label, type, placeholder, required, value, onChange, min }) => {
  return (
    <div className="card rounded-box my-2 flex h-20 flex-grow place-items-start">
      <label htmlFor={id} className="text flex justify-start text-sm font-bold">
        {label} {required && "*"}
      </label>
      <input
        type={type}
        id={id}
        className="mb-4 mt-2 flex w-full justify-start rounded-md border-b border-gray-200 bg-transparent px-2 py-2 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-gray-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        min={min}
      />
    </div>
  );
};

const PaySlipGenerator = () => {
  const [employeeName, setEmployeeName] = useState("");
  const [employeePosition, setEmployeePosition] = useState("");
  const [employeeEmail, setEmployeeEmail] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [uan, setUan] = useState("");
  const [numberofDays, setNumberOfDays] = useState("");
  const [lopDays, setLopDays] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [pfnumber, setPfNumber] = useState("");
  const [showEarningsTable, setShowEarningsTable] = useState(false);

  const [earningsName, setEarningsName] = useState("");
  const [earningsAmount, setEarningsAmount] = useState("");
  const [earningsList, setEarningsList] = useState([]);

  const [showReimbursementsTable, setShowReimbursementsTable] = useState(false);
  const [showDeductionsTable, setShowDeductionsTable] = useState(false);

  const addEarnings = () => {
    const newEarningsItem = {
      name: earningsName,
      amount: earningsAmount,
    };

    setEarningsList([...earningsList, newEarningsItem]);

    // Clear the input fields after adding
    setEarningsName("");
    setEarningsAmount("");

    // Show the earnings table after adding
    setShowEarningsTable(true);
  };

  const [deductionsName, setDeductionsName] = useState("");
  const [deductionsAmount, setDeductionsAmount] = useState("");
  const [deductionsList, setDeductionsList] = useState([]);

  const [reimbursementsName, setReimbursementsName] = useState("");
  const [reimbursementsAmount, setReimbursementsAmount] = useState("");
  const [reimbursementsList, setReimbursementsList] = useState([]);

  const addReimbursements = () => {
    const newReimbursementsItem = {
      name: reimbursementsName,
      amount: reimbursementsAmount,
    };

    setReimbursementsList([...reimbursementsList, newReimbursementsItem]);

    // Clear the input fields after adding
    setReimbursementsName("");
    setReimbursementsAmount("");

    // Show the reimbursements table after adding
    setShowReimbursementsTable(true);
  };

  const addDeductions = () => {
    const newDeductionsItem = {
      name: deductionsName,
      amount: deductionsAmount,
    };

    setDeductionsList([...deductionsList, newDeductionsItem]);

    // Clear the input fields after adding
    setDeductionsName("");
    setDeductionsAmount("");

    // Show the deductions table after adding
    setShowDeductionsTable(true);
  };

  return (
    <>
      <div className="flex flex-col overflow-x-auto p-6 max-sm:p-0 max-sm:pt-3">
        <div className="card card-body min-w-full  bg-base-100 shadow-xl">
          <div className="text mb-5 flex justify-center rounded-lg border border-gray-200  bg-slate-200 p-2 text-2xl font-bold text-black shadow-lg ">
            <h1>Employee Pay slip Generator</h1>
          </div>
          <div className=" rounded-lg border border-dashed border-gray-500 px-10 pb-14">
            <div className="mt-8 flex flex-row gap-x-4 ">
              <div className="flex w-6/12 flex-col">
                <InputField
                  id="EmployeeName"
                  label="Employee Name"
                  type="text"
                  placeholder="Employee name"
                  value={employeeName}
                  onChange={(e) => setEmployeeName(e.target.value)}
                  required
                />
                <InputField
                  id="EmployeePosition"
                  label="Employee Position"
                  type="text"
                  placeholder="Employee position"
                  value={employeePosition}
                  onChange={(e) => setEmployeePosition(e.target.value)}
                  required
                />
                <InputField
                  id="JoiningDate"
                  label="Joining Date (YYYY-MM-DD)"
                  type="date"
                  placeholder="(YYYY-MM-DD)"
                  value={joiningDate}
                  onChange={(e) => setJoiningDate(e.target.value)}
                  required
                />
                <InputField
                  id="PF"
                  label="PF Account Number"
                  type="text"
                  value={pfnumber}
                  onChange={(e) => setPfNumber(e.target.value)}
                  placeholder="TN/AAA/00000/000/00000"
                  required
                />
                <InputField
                  id="PaidDays"
                  label="Paid Days"
                  type="number"
                  placeholder="Number of days"
                  value={numberofDays}
                  onChange={(e) => setNumberOfDays(e.target.value)}
                  required
                  min="0"
                />
              </div>
              <div className="flex w-6/12 flex-col">
                <InputField
                  id="EmployeeEmail"
                  label="Employee Email"
                  type="text"
                  value={employeeEmail}
                  onChange={(e) => setEmployeeEmail(e.target.value)}
                  placeholder="Employee email"
                  required
                />
                <InputField
                  id="EmployeeId"
                  label="Employee Id"
                  type="text"
                  placeholder="Employee id"
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                  required
                />
                <InputField
                  id="AccountNumber"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  label="Account Number"
                  type="text"
                  placeholder="Account number"
                  required
                />
                <InputField
                  id="UAN"
                  label="Universal Account Number (UAN)"
                  type="text"
                  value={uan}
                  onChange={(e) => setUan(e.target.value)}
                  placeholder="Universal account number (UAN)"
                  required
                />
                <InputField
                  id="LOPDays"
                  value={lopDays}
                  onChange={(e) => setLopDays(e.target.value)}
                  label="LOP Days"
                  type="number"
                  placeholder="0"
                  required
                  min="0"
                />
              </div>
            </div>

            <div className="">
              <div className="text mt-5 text-2xl font-bold">Earnings</div>
              <div className="flex flex-row gap-x-4">
                <InputField
                  id="EarningsName"
                  label="Name"
                  type="text"
                  placeholder="Earnings name"
                  required
                  value={earningsName}
                  onChange={(e) => setEarningsName(e.target.value)}
                />
                <InputField
                  id="EarningsAmount"
                  label="Amount"
                  type="number"
                  min="0"
                  placeholder="Earnings amount"
                  required
                  value={earningsAmount}
                  onChange={(e) => setEarningsAmount(e.target.value)}
                />
                <div>
                  <button className="btn btn-active px-3" onClick={addEarnings}>
                    <PlusCircleIcon className="h-5 w-5" /> Add
                  </button>
                </div>
              </div>
              {showEarningsTable && earningsList.length > 0 && (
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-dashed border-gray-500">
                    <thead>
                      <tr>
                        <th className="rounded-md border border-dashed border-gray-500 px-6 py-3 text-left text-lg font-medium uppercase leading-4 tracking-wider">
                          Name
                        </th>
                        <th className="rounded-md border border-dashed border-gray-500 px-6 py-3 text-left text-lg font-medium uppercase leading-4 tracking-wider">
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody className="border border-dashed border-gray-500">
                      {earningsList.map((item, index) => (
                        <tr key={index}>
                          <td className="whitespace-no-wrap border border-dashed border-gray-500 px-6 py-4">
                            {item.name}
                          </td>
                          <td className="whitespace-no-wrap border border-dashed border-gray-500 px-6 py-4">
                            ₹ {item.amount}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* <div className="flex flex-col overflow-x-auto p-6  max-sm:p-0 max-sm:pt-3">
              <div className="card card-body min-w-full bg-base-100 shadow-xl ">
                <div className="overflow-x-auto">
                
                </div>
              </div>
            </div> */}
            </div>

            <div className="">
              <div className="text mt-5 text-2xl font-bold">Deductions</div>
              <div className="flex flex-row gap-x-4">
                <InputField
                  id="DeductionsName"
                  label="Name"
                  type="text"
                  placeholder="Deductions name"
                  required
                  value={deductionsName}
                  onChange={(e) => setDeductionsName(e.target.value)}
                />
                <InputField
                  id="DeductionsAmount"
                  label="Amount"
                  type="number"
                  min="0"
                  placeholder="Deductions amount"
                  required
                  value={deductionsAmount}
                  onChange={(e) => setDeductionsAmount(e.target.value)}
                />
                <div>
                  <button className="btn btn-active px-3" onClick={addDeductions}>
                    <PlusCircleIcon className="h-5 w-5" /> Add
                  </button>
                </div>
              </div>

              {showDeductionsTable && deductionsList.length > 0 && (
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-dashed border-gray-500">
                    <thead>
                      <tr>
                        <th className="rounded-md border border-dashed border-gray-500 px-6 py-3 text-left text-lg font-medium uppercase leading-4 tracking-wider">
                          Name
                        </th>
                        <th className="rounded-md border border-dashed border-gray-500 px-6 py-3 text-left text-lg font-medium uppercase leading-4 tracking-wider">
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody className="border border-dashed border-gray-500">
                      {deductionsList.map((item, index) => (
                        <tr key={index}>
                          <td className="whitespace-no-wrap border border-dashed border-gray-500 px-6 py-4">
                            {item.name}
                          </td>
                          <td className="whitespace-no-wrap border border-dashed border-gray-500 px-6 py-4">
                            ₹ {item.amount}
                          </td>
                          <td className="whitespace-no-wrap border border-dashed border-gray-500 px-6 py-4"></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            <div className="">
              <div className="text mt-5 text-2xl font-bold">Reimbursements</div>
              <div className="flex flex-row gap-x-4">
                <InputField
                  id="ReimbursementsName"
                  label="Name"
                  type="text"
                  placeholder="Reimbursements name"
                  required
                  value={reimbursementsName}
                  onChange={(e) => setReimbursementsName(e.target.value)}
                />
                <InputField
                  id="ReimbursementsAmount"
                  label="Amount"
                  type="number"
                  min="0"
                  placeholder="Reimbursements amount"
                  required
                  value={reimbursementsAmount}
                  onChange={(e) => setReimbursementsAmount(e.target.value)}
                />
                <div>
                  <button className="btn btn-active px-3" onClick={addReimbursements}>
                    <PlusCircleIcon className="h-5 w-5" /> Add
                  </button>
                </div>
              </div>
              {showReimbursementsTable && reimbursementsList.length > 0 && (
                <div className=" overflow-x-auto">
                  <table className="min-w-full border border-dashed border-gray-500 ">
                    <thead>
                      <tr>
                        <th className="rounded-md border border-dashed border-gray-500 px-6 py-3 text-left text-lg font-medium uppercase leading-4 tracking-wider">
                          Name
                        </th>
                        <th className="rounded-md border border-dashed border-gray-500 px-6 py-3 text-left text-lg font-medium uppercase leading-4 tracking-wider">
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody className="mb-5 border border-dashed border-gray-500">
                      {reimbursementsList.map((item, index) => (
                        <tr key={index}>
                          <td className="whitespace-no-wrap border border-dashed border-gray-500 px-6 py-4">
                            {item.name}
                          </td>
                          <td className="whitespace-no-wrap border border-dashed border-gray-500 px-6 py-4">
                            ₹ {item.amount}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            <div className="left-10 mt-6 flex flex-row justify-end gap-x-4">
              <button className="btn btn-neutral btn-wide">Reset</button>
              <button className="btn btn-info btn-wide text-white">Download As PDF</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaySlipGenerator;
