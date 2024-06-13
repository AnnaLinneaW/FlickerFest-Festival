import Link from 'next/link';
import MyLayout from './MyLayout';

export default function Home() {
  return (
    <MyLayout>
      <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-gray-700">
        <div className="z-10 max-w-5xl w-full flex-col items-center justify-between font-mono text-sm text-white">
          <h2 className="text-4xl font-bold text-center m-8 ">
            FLICKERFEST FILMFESTIVAL
          </h2>
          <div className="flex flex-col items-center justify-center m-8 text-center">
            <h3 className="text-3xl font-bold mb-12 text-white">
              10-12 november 2023
            </h3>
            <p className="mb-12 ">
              Välkomna till Flickerfest Filmfestival! Upplev spännande filmer
              från olika genrer och ta del av inspirerande evenemang. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Vel dolor hic
              nobis reprehenderit placeat saepe, error molestias perferendis
              nulla aliquid necessitatibus, magnam velit nesciunt quas? In,
              culpa. Eius facere maxime quis possimus. Perspiciatis officiis
              veritatis officia, quia aliquid soluta ipsum vel vero natus
              obcaecati. Quaerat optio expedita aliquid blanditiis fuga.
            </p>
          </div>
          <div className=" flex flex-row items-center justify-evenly space-evenly">
            <div className="flex flex-col items-center justify-evenly space-evenly m-6">
              <h3 className="text-m font-bold mb-2">Vilken film ska du se?</h3>
              <Link
                href="/schedule"
                className="text-black-500 hover:underline hover:text-red-600 font-bold text-lg"
              >
                Program
              </Link>
            </div>

            <div className="flex flex-col items-center justify-evenly space-evenly m-6">
              <h3 className="text-m font-bold mb-2">Boka din biljett nu:</h3>
              <Link
                href="/tickets"
                className="text-black-500 hover:underline hover:text-red-600 font-bold text-lg"
              >
                Köp biljett
              </Link>
            </div>
          </div>
        </div>
      </main>
    </MyLayout>
  );
}
