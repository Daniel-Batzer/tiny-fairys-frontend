const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 bg-gray-900">
      {/* Intro */}
      <div className="flex flex-col md:flex-row md:items-start items-center gap-10 mb-12">
        <img
          src="/images/profile.jpg"
          alt="profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"
        />
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Hey, I'm Daniel 👋
          </h1>
          <p className="text-gray-300 text-lg">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea
          </p>
        </div>
      </div>

      {/* Bio Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">My Mission</h2>
        <p className="text-gray-300 leading-relaxed">
          Er hörte leise Schritte hinter sich. Das bedeutete nichts Gutes. Wer
          würde ihm schon folgen, spät in der Nacht und dazu noch in dieser
          engen Gasse mitten im übel beleumundeten Hafenviertel? Gerade jetzt,
          wo er das Ding seines Lebens gedreht hatte und mit der Beute
          verschwinden wollte! Hatte einer seiner zahllosen Kollegen dieselbe
          Idee gehabt, ihn beobachtet und abgewartet, um ihn nun um die Früchte
          seiner Arbeit zu erleichtern? Oder gehörten die Schritte hinter ihm zu
          einem der unzähligen Gesetzeshüter dieser Stadt, und die stählerne
          Acht um seine Handgelenke würde gleich zuschnappen? Er konnte die
          Aufforderung stehen zu bleiben schon hören. Gehetzt sah er sich um.
          Plötzlich erblickte er den schmalen Durchgang. Blitzartig drehte er
          sich nach rechts und verschwand
        </p>
      </div>

      {/* Tech Stack */}
      <h2 className="text-2xl font-semibold text-white mb-4">🚀 Tech I Use</h2>
      <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
        {[
          "React",
          "Next.js",
          "Vue",
          "Tailwind CSS",
          "Node.js",
          "Laravel",
          "Prisma",
          "MongoDB",
          "PostgreSQL",
          "Appwrite",
          "Docker",
        ].map((tech) => (
          <li key={tech} className="bg-gray-700 px-3 py-1 rounded-md">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutPage;
