import Link from "next/link";
import projectsData from "/public/data/projectsData"; // Adjust the path as needed

const ProjectSection = () => {
  const topProjects = projectsData.slice(0, 3);

  return (
    <div className="bg-pink-100">
      <h1 className="text-3xl font-semibold mt-10">Top Projects</h1>
      <div className="grid grid-cols-3 overflow-x-scroll justify-evenly right-0">
        {topProjects.map((project, index) => (
          <div
            key={index}
            className="w-[310px] h-[450px] bg-red-100 shadow m-10 rounded-[20px] flex flex-col"
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
            <p className="text-gray-700 mt-2 m-2 text-wrap">
              {project.description}
            </p>

            <ul className="m-2 justify-evenly flex mt-auto">
              {project.skills.map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded m-2 "
                >
                  {skill}
                </li>
              ))}
            </ul>
            <div className="flex-l top-0 sticky">
              <Link href={project.repoLink} target="_blank" rel="noreferrer">
                <button className="bg-blue-500 w-[100%]  text-white p-2  rounded-bl-[20px] rounded-br-[20px] items-center justify-center">
                  View Repo
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
