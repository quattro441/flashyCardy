export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center bg-[#111821] px-6 py-16 text-center text-white">
      <section className="flex w-full max-w-5xl flex-col items-center gap-7">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
            Welcome to{" "}
            <span className="text-blue-500">Flashy Cardy Course</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-7 text-zinc-300 sm:text-xl">
            Master any subject with our interactive flashcard learning system.
            <br className="hidden sm:block" />
            Create, study, and track your progress all in one place.
          </p>
        </div>

        <div className="w-full max-w-md rounded-md bg-[#172231] px-8 py-7 shadow-lg">
          <h2 className="text-2xl font-semibold">Get Started Today</h2>
          <p className="mt-5 text-base leading-6 text-zinc-300">
            Sign up or sign in to start creating your personalized flashcard
            decks.
          </p>
          <p className="mt-6 text-sm text-zinc-400">
            Click the buttons in the header above to get started!
          </p>
        </div>
      </section>
    </main>
  );
}
