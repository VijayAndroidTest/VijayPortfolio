import { personalInfo } from "@/data/portfolio";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-10 max-w-5xl mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-12">
        <div>
          <h1 className="text-4xl font-bold">{personalInfo.name}</h1>
          <p className="text-xl text-gray-600">{personalInfo.role}</p>
          <div className="mt-4">
            <a 
              href="/ResumeMay2026.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Download Resume
            </a>
          </div>
        </div>

   <div className="flex items-center gap-4 border p-4 rounded-xl shadow-sm">
  <img 
    src="/profile.jpg" 
    alt="Profile" 
    width={80} 
    height={80} 
    className="rounded-full object-cover"
  />
        <div className="text-sm text-gray-600">
    <p className="font-bold text-gray-900">{personalInfo.name}</p>
    <p>{personalInfo.address}</p>
    <p>{personalInfo.email}</p>
    <p>{personalInfo.phone}</p>
  </div>


        </div>

        
      </div>

      {/* Projects Grid Section */}
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {personalInfo.projects.map((project, index) => (
          <div key={index} className="border p-5 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-bold text-blue-600">{project.title}</h3>
            <p className="text-sm mt-1 text-gray-700">{project.description}</p>
            {project.techStack && (
              <p className="mt-2 text-xs text-gray-500 italic">Tech: {project.techStack.join(", ")}</p>
            )}
            {project.duration && (
              <p className="text-xs font-semibold mt-1">Duration: {project.duration}</p>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
<a 
  href="/ResumeMay2026.pdf" 
  target="_blank" 
  rel="noopener noreferrer"
  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
>
  Download Resume
</a>