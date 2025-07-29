
const Projects = () => {
  return (
    <section id="projects" className="relative px-6 py-10 text-xl">
      <h2 className="text-5xl mb-8 text-center">Projects</h2>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="project-card bg-white p-6 rounded-lg shadow-md">
          Project #1
        </div>
        <div className="project-card border bg-white p-6 rounded-lg shadow-md">
          Project #2
        </div>
        <div className="project-card border bg-white p-6 rounded-lg shadow-md">
          Project #3
        </div>
      </div>
    </section>
  );
};

export default Projects;
