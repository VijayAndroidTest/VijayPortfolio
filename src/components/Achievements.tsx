import { personalInfo } from "@/data/portfolio";

export default function Achievements() {
  return (
   <section className="max-w-6xl mx-auto px-6 py-8">
  <h2 className="text-3xl font-bold mb-6">
    Key Achievements
  </h2>

  <div className="grid md:grid-cols-2 gap-4">
    {personalInfo.achievements.map((achievement) => (
      <div
        key={achievement}
        className="bg-white p-5 rounded-xl shadow"
      >
        ✅ {achievement}
      </div>
    ))}
  </div>
</section>

    
  );
}