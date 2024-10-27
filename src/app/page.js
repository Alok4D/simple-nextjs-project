import Heading from "@/Components/Heading";


export default function Home() {
  return (
    <div className="grid grid-rows-[1.25rem_1fr_1.25rem] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <div>
      <h6>Hello NextJs !!!</h6>
      <button className="bg-yellow-200 px-4 py-4 rounded-lg">Call me</button>
      <Heading></Heading>
     </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <h6>This is footer section of nextJs!</h6>
      </footer>
    </div>
  );
}
