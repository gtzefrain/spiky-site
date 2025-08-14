import Image from 'next/image'

export default function AboutPage() {
  return (
    <div>
      <Image src="/images/stock.jpg" alt="Archive 1" width={600} height={300} />
      Lorem ipsum dolor sit <span className="text-xl font-bold ">amet</span>, consectetur adipiscing elit.

    </div>
  )
}