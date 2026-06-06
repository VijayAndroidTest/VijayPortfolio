import { personalInfo } from "@/data/portfolio";

export default function Experience() {
  return (
<section className="max-w-6xl mx-auto px-6 py-8">
  <h2 className="text-3xl font-bold mb-6">
    Professional Experience
  </h2>

  <div className="space-y-5">
    {personalInfo.experiences.map((exp) => (
      <div
        key={exp.company}
        className="bg-white p-6 rounded-xl shadow"
      >
        <h3 className="text-xl font-bold">
          {exp.role}
        </h3>

        <p className="text-blue-600 font-semibold">
          {exp.company}
        </p>

        <p className="text-gray-500">
          {exp.period}
        </p>
      </div>
    ))}
  </div>
</section>
  );
}