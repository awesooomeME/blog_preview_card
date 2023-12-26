import Image from "next/image";

export default function Home() {
  return (
    <main className="grid place-content-center min-h-screen p-4
      bg-yellow_primary">
      <article className="bg-white_neutral p-4 rounded-2xl card
        grid gap-6 max-w-[375px]">
        <section className="overflow-hidden rounded-2xl h-auto">
          <Image className="w-full"
            src="/illustration-article.svg" width={100} height={100} 
            alt="Blog illustration"/>
        </section>
        <section className="grid gap-4">
          <div className="bg-yellow_primary rounded-md py-2 px-4 max-w-28 text-center">
            <p className="font-heavy">
              Learning
            </p>
          </div>
          <p>
            Published 21 Dec 2023
          </p>
        </section>
        <section className="grid gap-5">
          <h1 className="font-heavy text-2xl cursor-pointer hover:text-yellow_primary">
            HTML & CSS foundations
          </h1>
          <p className="text-grey_neutral">
            These languages are the backbone of every website, 
            defining structure, content, and presentation.
          </p>
        </section>
        <footer className="flex items-center gap-3">
          <div className="w-10 h-10">
            <Image src="/image-avatar.webp" width={40} height={40} alt="Writer's avatar"/>
          </div>
          <h3 className="font-heavy">
            Greg Hooper
          </h3>
        </footer>
      </article>
    </main>
  )
}
