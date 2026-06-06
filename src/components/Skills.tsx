import { personalInfo } from "@/data/portfolio";

export default function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">

      <h2 className="text-3xl font-bold mb-6">
        Technical Skills
      </h2>

      <div className="flex flex-wrap gap-3">

        {personalInfo.skills.map((skill) => (
          <span
            key={skill}
            className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
          >
            {skill}
          </span>
        ))}

      </div>

    </section>
  );
}