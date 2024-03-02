const SkillSection = () => {
  return (
    <div className="bg-blue-200 flex flex-wrap justify-evenly p-4">
      {/* left section */}
      <div className="flex flex-col justify-center ml-4 mt-8">
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
      <div className="mt-8 ml-4">
        <div>
          <div className="">
            <h2 className="text-4xl font-semibold ">Experience</h2>
          </div>

          <div className="">
            <div>
              <img
                src="/images/cardline.svg"
                alt="NextJS"
                className=" mr-[-2rem]"
              />
              <div className="flex justify-between">
                <div>
                  <h3 className="text-xl font-semibold">Growth Product</h3>
                  <span className="ml-1">-Mamaearth</span>
                </div>
                <p>June 2023 - Present</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
