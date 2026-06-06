import { personalInfo } from "@/data/portfolio";

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">

      <h2 className="text-3xl font-bold mb-4">
        About Me
      </h2>

      <p className="text-lg text-gray-700 leading-8">
        {personalInfo.summary}
      </p>

    </section>
  );
}