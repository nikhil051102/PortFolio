import experiences from "@/public/data/experience";

const SkillSection = () => {
  return (
    <div className="bg-white flex flex-wrap justify-around p-4">
      {/* left section */}
      <div className="flex flex-col ml-4 mt-8">
        <div className="text-left">
          <h1 className="text-5xl leading-tight font-bold">
            Skills &<br />
            Experience
          </h1>
        </div>
        <div className="max-w-[75vh] w-auto mt-5">
          <p className="flex items-center">
            <img src="/images/arrow.svg" alt="Arrow" />
            <span className="ml-2 text-wrap">
              Experienced in crafting scalable web applications and implementing
              robust DevOps practices. Proficient in CI/CD pipelines,
              containerization (Docker, Kubernetes), cloud infrastructure
              management (AWS/Azure/GCP), and comprehensive monitoring. Adept at
              UI/UX design for user-centric experiences. 🧑‍💻♾️
            </span>
          </p>
        </div>
        <div>
          <h2 className="text-4xl font-semibold mt-8 mb-4">Skills</h2>
          <div className="flex flex-wrap w-[26rem] ">
            <img src="/images/nextjs.svg" alt="NextJS" className="p-2" />
            <img src="/images/go.svg" alt="Golang" className="p-2" />
            <img src="/images/git.svg" alt="Git" className="p-2" />
            <img src="/images/aws.svg" alt="AWS" className="p-2" />
            <img src="/images/docker.svg" alt="Docker" className="p-2" />
            <img
              src="/images/kubernetes.svg"
              alt="Kubernetes"
              className="p-2"
            />
            <img src="/images/aws.svg" alt="AWS" className="p-2" />
            <img src="/images/figma.svg" alt="Figma" className="p-2" />
          </div>
        </div>
      </div>

      {/* right section */}
      <div className="mt-8 ml-4 w-[80vh]">
        <div>
          <div className="">
            <h2 className="text-4xl font-semibold">Experience</h2>
          </div>

          <div className="antialiased">
            {experiences.map((experience, index) => (
              <div key={index} className="pt-4">
                <img
                  src="/images/cardline.svg"
                  alt="NextJS"
                  className="w-full"
                />
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-l font-semibold p-2">
                      {experience.title}
                    </h3>
                    <span className="pl-4 italic">-{experience.company}</span>
                  </div>
                  <p className="p-2">{experience.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="justify-center items-center flex">
            <img src="./images/Devops.png" className="ml-2 mt-1 h-[40vh]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
