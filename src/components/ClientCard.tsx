export default function ClientCard() {
  return (
    <li className="rounded-xl border border-stroke-1 px-6 py-4 bg-white flex items-center gap-16">
      <div className="flex gap-3 items-center min-w-40">
        <div className="bg-dark-1 rounded-full size-16"></div>
        <div className="flex flex-col gap-1">
          <h3 className="text-dark-1 text-xl font-semibold">Client Name</h3>
          <p className=" text-xs opacity-50">Client business type</p>
        </div>
      </div>
      <div className=" flex flex-col gap-1 flex-grow">
        <div className="flex gap-1 items-center">
          <div className="size-1 bg-stroke-1 rounded-full"></div>
          <p className="text-stroke-1 text-xs font-medium">Service Status</p>
        </div>
        <h4 className="text-dark-1 text-xl font-semibold">Service Provided</h4>
        <p className=" text-xs opacity-50">Date Added</p>
      </div>
      <div className="flex gap-1">
        <p className="text-dark-1 text-xl font-semibold">$0.00</p>
        <span className="font-semibold text-xs">USD</span>
      </div>
    </li>
  );
}
