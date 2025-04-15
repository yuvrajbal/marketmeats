export default function Footer() {
  return (
    <main className="bg-orange-100 pt-28 pb-16">
      <h1 className="text-3xl font-bold uppercase text-orange-600 tracking-wide text-center mt-10">
        Sign up, get first dibs
      </h1>
      <div className="border-b border-b-black w-3/4 flex flex-row justify-between gap-4 mx-auto my-12">
        <input
          type="text"
          placeholder="Enter Your Email Here"
          className="outline-none"
        />
        <button className="uppercase font-bold outline-none hover:text-gray-100">
          Submit
        </button>
      </div>
    </main>
  );
}
