import Link from 'next/link';
import MyLayout from './MyLayout';

export default function Home() {
  return (
    <MyLayout>
      <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-gray-800">
        <div className="z-10 max-w-5xl w-full flex-col items-center justify-between font-mono text-sm text-white">
          <h2 className="text-4xl font-bold text-center mb-10 ">
            FLICKERFEST FILMFESTIVAL
          </h2>
          <div className="flex flex-col items-center justify-center m-6 text-center">
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
          <div className="flex flex-row items-center justify-evenly space-evenly m-6">
            <Link
              href="/schedule"
              className="text-black-500 hover:underline font-bold text-lg"
            >
              Schedule
            </Link>
            <Link
              href="/tickets"
              className="text-black-500 hover:underline font-bold text-lg"
            >
              Buy Tickets
            </Link>
          </div>
        </div>
      </main>
    </MyLayout>
  );
}
