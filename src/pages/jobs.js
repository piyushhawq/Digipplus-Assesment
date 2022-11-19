import { useState } from "react";

export default function Jobs() {
  const [openTab1, setOpenTab1] = useState(false);
  const [openTab2, setOpenTab2] = useState(true);
  const [openTab3, setOpenTab3] = useState(false);

  const tab1Handler = (e) => {
    e.preventDefault();
    setOpenTab1((prev) => !prev);
    setOpenTab2(false);
    setOpenTab3(false);
  };
  const tab2Handler = (e) => {
    e.preventDefault();
    setOpenTab2((prev) => !prev);
    setOpenTab3(false);
    setOpenTab1(false);
  };
  const tab3Handler = (e) => {
    e.preventDefault();
    setOpenTab3((prev) => !prev);
    setOpenTab1(false);
    setOpenTab2(false);
  };
  return (
    <div className="px-6 py-10 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="col-span-full lg:col-span-1 flex flex-col gap-8 sm:flex-row sm:justify-evenly lg:flex-col">
          <div>
            <h5 className="text-[#F76247] font-semibold mb-2">JOBS</h5>
            <div
              onClick={tab1Handler}
              className={`px-4 py-3 rounded-md cursor-pointer ${
                openTab1 ? "bg-gray-700 text-white" : "bg-blue-50 text-black"
              }`}
            >
              Solution writing
            </div>
          </div>
          <div>
            <h5 className="text-[#F76247] font-semibold mb-2">
              FOR JOB APPLICATION
            </h5>
            <div
              onClick={tab2Handler}
              className={`px-4 py-3 rounded-md cursor-pointer ${
                openTab2 ? "bg-gray-700 text-white" : "bg-blue-50 text-black"
              }`}
            >
              SCREENING TASKS
            </div>
          </div>
          <div>
            <h5 className="text-[#F76247] font-semibold mb-2">
              APPLICATION STATUS
            </h5>
            <div
              onClick={tab3Handler}
              className={`px-4 py-3 rounded-md cursor-pointer ${
                openTab3 ? "bg-gray-700 text-white" : "bg-blue-50 text-black"
              }`}
            >
              JOB APPLICATION STATUS
            </div>
          </div>
        </div>
        <div className="col-span-full lg:col-span-2 py-4">
          <div className={`${openTab1 ? "block" : "hidden"} `}>Jobs</div>
          <div
            className={`w-80 h-40 primary-shadow-orange py-6 px-5 rounded-lg ${
              openTab2 ? "block" : "hidden"
            }`}
          >
            <h4>K10 Maths Text Book Solution</h4>
            <div>Intern digipplus</div>
          </div>
          <div className={`${openTab3 ? "block" : "hidden"} `}>Status</div>
        </div>
        <div className="w-full max-w-[590px] mx-auto flex flex-col items-center gap-2 col-span-full lg:col-span-1 -order-1 lg:order-3">
          <div className="font-semibold flex gap-2 items-center">
            <span>Announcements </span>
            <img src="images/megaphone.png" alt="anouncement" className="h-4 w-4" />
          </div>
          <div className="w-full py-3 px-4 bg-blue-100 text-sm text-cyan-800 font-medium rounded-md">
            We are working on adding Project and Internship Details, So just
            fill up profile only.
          </div>
        </div>
      </div>
    </div>
  );
}
