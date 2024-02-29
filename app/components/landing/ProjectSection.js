import Link from "next/link";
import projectsData from "/public/data/projectsData"; // Adjust the path as needed

const ProjectSection = () => {
  const topProjects = projectsData.slice(0, 4);

  return (
    <div className="bg-gradient-to-r from-orange-300 to-pink-300">
      <div className="flex items-center justify-center">
        <h1 className="text-3xl font-semibold mt-10">Top Projects</h1>
      </div>
      <span className="justify-center items-center flex">
        <img
          src="/images/borderline.svg"
          alt="underline"
          className="w-[20rem] mt-4"
        />
      </span>
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {topProjects.map((project, index) => (
          <div
            key={index}
            className="w-[18rem] h-auto bg-white shadow rounded-[20px] flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[200px] rounded-tl-[20px] rounded-tr-[20px] object-fit"
            />
            <div className="flex justify-between m-2">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-500 font-light">{project.date}</p>
            </div>

            <p className="text-gray-700 mr-3 ml-3 text-wrap">
              {project.description.slice(0, 120) + "..."}
            </p>

            <ul className="flex justify-evenly  mt-auto">
              {project.skills.slice(0, 3).map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded m-2 "
                >
                  {skill}
                </li>
              ))}
            </ul>
            <div className="flex-l top-0">
              <Link href={project.repoLink} target="_blank" rel="noreferrer">
                <button className="bg-indigo-600 hover:bg-green-800 w-[100%] h-[3rem] text-white p-2  rounded-bl-[20px] rounded-br-[20px] items-center justify-center">
                  View Repo
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center m-8">
        <Link href="/portfolio">
          <button className="bg-indigo-600 hover:bg-green-800 w-auto  text-white p-3 rounded-[20px] items-center justify-center">
            View GitHub Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectSection;
