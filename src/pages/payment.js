import { useState } from "react";

export default function Payment() {
  const [openTab1, setOpenTab1] = useState(true);
  const [openTab2, setOpenTab2] = useState(false);

  const tab1Handler = (e) => {
    e.preventDefault();
    setOpenTab1((prev) => !prev);
    setOpenTab2(false);
  };
  const tab2Handler = (e) => {
    e.preventDefault();
    setOpenTab2((prev) => !prev);
    setOpenTab1(false);
  };

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = today.toLocaleString("default", { month: "short" });
  let yyyy = today.getFullYear();
  let hour = today.getHours();
  let min = today.getMinutes();

  const date = mm + ". " + dd + ", " + yyyy + ", " + hour + ":" + min;

  return (
    <div className="px-4 py-10 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div id="tabs" className="col-span-full md:col-span-1 space-y-3">
          <h5 className="text-[#F76247] font-medium">PAYMENT NAVIGATION</h5>
          <div className="flex gap-4 lg:flex-col">
            <div
              onClick={tab1Handler}
              className={`px-4 py-3 rounded-md cursor-pointer ${
                openTab1 ? "bg-gray-500 text-white" : "bg-blue-50 text-black"
              }`}
            >
              INVOICES
            </div>
            <div
              onClick={tab2Handler}
              className={`px-4 py-3 rounded-md cursor-pointer ${
                openTab2 ? "bg-gray-500 text-white" : "bg-blue-50 text-black"
              }`}
            >
              MY BANK DETAILS
            </div>
          </div>
        </div>
        <div className="flex lg:flex-col gap-5 col-span-full md:col-span-1 lg:order-5">
          <div className="flex flex-col">
            <span className="font-medium">Lifetime Earning</span>
            <span className="font-bold">₹3150</span>
          </div>
          <div className="flex flex-col">
            <span className="font-medium">This Month Earning</span>
            <span className="font-bold">0 Rupee</span>
          </div>
        </div>
        {openTab1 && (
          <div className="col-span-full lg:col-span-2 py-2">
            <div className="rounded-md border border-black px-5 py-3 space-y-3 max-w-xl lg:max-w-none">
              <div className="flex gap-5">
                <div>
                  <span>Payment Date:</span>{" "}
                  <span className="font-semibold">{date}</span>
                </div>
                <div>
                  <span>Amount paid:</span>{" "}
                  <span className="font-semibold">₹3150</span>
                </div>
              </div>
              <div className="space-y-3">
                <div>Payment made for project:</div>
                <div>K10 Maths Text Book Solution</div>
                <div>K12 Maths Text Book Solution</div>
              </div>
            </div>
          </div>
        )}
        {openTab2 && (
          <div className="col-span-full lg:col-span-2 py-4">
            <h2>Bank details would be here</h2>
          </div>
        )}
      </div>
    </div>
  );
}
