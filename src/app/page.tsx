import Image from 'next/image'

export default function HomePage() {
  return (
    <div className='flex justify-center flex-col gap-16'>
      <div className='flex justify-center gap-16'>
        <Image
          src="/images/spiky1.jpg"
          alt="Spiky Art"
          width={200}
          height={300}

          className="rounded shadow-lg border-2 border-accent hover:opacity-90 transition"
        />
        <div className='flex justify-center flex-col'>
          <h2 className="text-3xl text-bold">Spiky One</h2>
          <p className="mt-4">Lorem ipsum dolor sit <span className=" font-bold ">amet</span>, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className='flex justify-center flex-col'>
        <div className='flex justify-center gap-16'>
          <Image
            src="/images/spiky1.jpg"
            alt="Spiky Art"
            width={200}
            height={300}
            className="rounded shadow-lg border-2 border-accent hover:opacity-90 transition"
          />
          <div className='flex justify-center flex-col'>
            <h2 className="text-3xl text-bold">Spiky Two</h2>
            <p className="mt-4">Lorem ipsum dolor sit <span className=" font-bold ">amet</span>, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
      <div className='flex justify-center gap-16'>
        <Image
          src="/images/spiky1.jpg"
          alt="Spiky Art"
          width={200}
          height={300}

          className="rounded shadow-lg border-2 border-accent hover:opacity-90 transition"
        />
        <div className='flex justify-center flex-col'>
          <h2 className="text-3xl text-bold">Spiky One</h2>
          <p className="mt-4">Lorem ipsum dolor sit <span className="text-xl font-bold ">amet</span>, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className='flex justify-center flex-col'>
        <div className='flex justify-center gap-16'>
          <Image
            src="/images/spiky1.jpg"
            alt="Spiky Art"
            width={200}
            height={300}
            className="rounded shadow-lg border-2 border-accent hover:opacity-90 transition"
          />
          <div className='flex justify-center flex-col'>
            <h2 className="text-3xl text-bold">Spiky Two</h2>
            <p className="mt-4">Lorem ipsum dolor sit <span className="text-xl font-bold ">amet</span>, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
      <div className='flex justify-center gap-16'>
        <Image
          src="/images/spiky1.jpg"
          alt="Spiky Art"
          width={200}
          height={300}

          className="rounded shadow-lg border-2 border-accent hover:opacity-90 transition"
        />
        <div className='flex justify-center flex-col'>
          <h2 className="text-3xl text-bold">Spiky One</h2>
          <p className="mt-4">Lorem ipsum dolor sit <span className="font-bold ">amet</span>, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className='flex justify-center flex-col'>
        <div className='flex justify-center gap-16'>
          <Image
            src="/images/spiky1.jpg"
            alt="Spiky Art"
            width={200}
            height={300}
            className="rounded shadow-lg border-2 border-accent hover:opacity-90 transition"
          />
          <div className='flex justify-center flex-col'>
            <h2 className="text-3xl text-bold">Spiky Two</h2>
            <p className="mt-4">Lorem ipsum dolor sit <span className="font-bold ">amet</span>, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
