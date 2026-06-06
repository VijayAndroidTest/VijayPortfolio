import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  return (
    <section className="bg-white py-12">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-6">
          Contact
        </h2>

        <div className="space-y-3">

          <p>📧 {personalInfo.email}</p>

          <p>📱 {personalInfo.phone}</p>

          <p>📍 {personalInfo.address}</p>

        </div>

      </div>

    </section>
  );
}