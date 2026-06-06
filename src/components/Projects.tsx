import { personalInfo } from "@/data/portfolio";

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">

      <h2 className="text-3xl font-bold mb-6">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {personalInfo.projects.map((project) => (

          <div
            key={project.title}
            className="bg-white rounded-xl shadow p-6"
          >
            <h3 className="text-xl font-bold text-blue-600">
              {project.title}
            </h3>

            <p className="mt-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">

              {project.techStack?.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-100 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}

            </div>

            <p className="mt-4 font-semibold">
              {project.duration}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}