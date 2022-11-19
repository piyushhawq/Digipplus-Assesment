export default function Home() {
  return (
    <div className="py-8 px-2 max-w-screen-xl mx-auto">
      <div className="flex flex-col items-center gap-y-5 w-full max-w-screen-lg mx-auto">
        <div className="flex flex-col items-center">
          <img className="w-20" src="/public/images/digiplus main logo.png" alt="logo" />
          <h2 className="text-2xl font-bold">Welcome to Digipplus</h2>
        </div>
        <div className="w-full flex flex-col items-end gap-2">
          <div className="font-semibold flex gap-2 items-center">
            <span>Announcements </span>
            <img src="/public/images/megaphone.png" alt="" className="h-4 w-4" />
          </div>
          <div className="w-full py-3 px-4 bg-blue-100 text-sm text-cyan-800 font-medium rounded-md">
            We are working on adding Project and Internship Details, So just
            fill up profile only.
          </div>
        </div>
        <div className="w-full">
          <h3 className="text-[#F76247] font-semibold mb-4">Work Action</h3>
          <div className="px-8 py-[10px] w-fit rounded-lg primary-shadow-yellow">
            View Intern Data
          </div>
        </div>
        <div className="w-full">
          <h3 className="text-[#F76247] font-semibold mb-12">Internships</h3>
          <div className="w-80 h-40 primary-shadow-orange py-6 px-5 rounded-lg">
            <h4 className="text-[#F76247] font-semibold mb-3">
              Solution Writing
            </h4>
            <p>Write solution</p>
          </div>
        </div>
      </div>
    </div>
  );
}
