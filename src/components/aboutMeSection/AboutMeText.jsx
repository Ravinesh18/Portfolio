import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m a software developer with experience in full-stack web development,
        specializing in the MERN stack. I have a strong foundation in
        JavaScript, React, Redux, Node.js, Express, and MongoDB, and I enjoy
        building scalable web applications. Currently, I’m interning at KPMG,
        working on cybersecurity projects like breach and attack simulation.
        Beyond development, I have a passion for problem-solving, data
        structures, and algorithms, actively honing my skills through coding
        challenges and competitive programming. I also create technical content,
        sharing knowledge to help others grow in their careers. When I’m not
        coding, I’m exploring new technologies, preparing for interviews, and
        continuously learning to stay ahead in the tech industry.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
