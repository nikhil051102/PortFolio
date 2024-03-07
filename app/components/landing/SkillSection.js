import experiences from "@/public/data/experience";

const SkillSection = () => {
  return (
    <div className="bg-white flex flex-wrap justify-around p-4 shadow-2xl shadow-white">
      {/* left section */}
      <div className="flex flex-col ml-4 mt-8 justify-center">
        <div className="text-left">
          <h1 className="text-5xl leading-tight font-bold">
            Skills &<br />
            Experience
          </h1>
        </div>
        <div className="md:max-w-[70vh] md:w-auto w-[24rem] pt-4 px-4">
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
          <div className="flex flex-wrap justify-center md:w-[26rem] w-[24rem]">
            <img src="/images/nextjs.svg" alt="NextJS" className="md:p-1 p-1" />
            <img src="/images/go.svg" alt="Golang" className="p-1" />
            <img src="/images/git.svg" alt="Git" className="p-1" />
            <img src="/images/aws.svg" alt="AWS" className="p-1" />
            <img src="/images/jenkins.svg" alt="Jenkins" className="p-1" />
            <img src="/images/docker.svg" alt="Docker" className="p-1" />
            <img
              src="/images/kubernetes.svg"
              alt="Kubernetes"
              className="p-1"
            />

            <img src="/images/figma.svg" alt="Figma" className="p-1" />
          </div>
        </div>
      </div>

      {/* right section */}
      <div className="mt-8 ml-2 overflow-x-hidden overscroll-x-none container md:w-[70vh] w-[24rem]">
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
            <img src="./images/Devops.png" className="ml-2 mt-1 md:h-[35vh]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
