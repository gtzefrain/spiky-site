import Image from 'next/image'

export default function ArchivePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Archive</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <Image src="/images/spiky1.jpg" alt="Archive 1" width={600} height={300} className="rounded shadow-lg border-2 border-accent hover:opacity-90 transition"
        />
        <Image src="/images/spiky2.jpg" alt="Archive 2" width={600} height={300} className="rounded shadow-lg border-2 border-accent hover:opacity-90 transition"
        />
        <Image src="/images/spiky1.jpg" alt="Archive 1" width={600} height={300} className="rounded shadow-lg border-2 border-accent hover:opacity-90 transition"
        />
        <Image src="/images/spiky2.jpg" alt="Archive 2" width={600} height={300} className="rounded shadow-lg border-2 border-accent hover:opacity-90 transition"
        />
        <Image src="/images/spiky1.jpg" alt="Archive 1" width={600} height={300} className="rounded shadow-lg border-2 border-accent hover:opacity-90 transition"
        />
        <Image src="/images/spiky2.jpg" alt="Archive 2" width={600} height={300} className="rounded shadow-lg border-2 border-accent hover:opacity-90 transition"
        />
      </div>
    </div>
  )
}