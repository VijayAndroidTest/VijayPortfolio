import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">

      <div className="max-w-6xl mx-auto px-6 py-16">

    <div className="inline-block bg-pink-500 px-4 py-2 rounded-full mb-8 text-sm font-medium">
  🚀 Open to Senior Android / React Native Opportunities
</div>

        <div className="flex flex-col md:flex-row gap-8 items-center">

          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-44 h-44 rounded-full border-4 border-white object-cover"
          />

          <div>

            <h1 className="text-5xl font-bold">
              {personalInfo.name}
            </h1>

            <h2 className="text-2xl mt-2">
              {personalInfo.role}
            </h2>

            <p className="mt-4 text-lg max-w-3xl">
              {personalInfo.summary}
            </p>

            <div className="flex flex-wrap gap-3 mt-6">

              <a
                href="/ResumeMay2026.pdf"
                target="_blank"
                className="bg-white text-blue-700 px-5 py-3 rounded-lg font-bold"
              >
                Download Resume
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                className="border px-5 py-3 rounded-lg"
              >
                GitHub
              </a>

              <a
                href={personalInfo.linkedIn}
                target="_blank"
                className="border px-5 py-3 rounded-lg"
              >
                LinkedIn
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}