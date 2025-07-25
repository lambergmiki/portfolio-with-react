
const Timeline = () => {
 const timelineItems = [
    { year: '2020', title: 'Telia', description: 'placeholder' },
    { year: '2023', title: 'Flyttar till Spanien', description: 'placeholder' },
    { year: '2024', title: 'Webbprogrammerare @ Linnéuniversitetet', description: 'placeholder' },

    { year: '2025', title: 'SI-ledare & TA (Teacher Assistant) @ Linnéuniversitet', description: 'placeholder' },
  ];

  return (
    <section id="timeline" className="p-10">
      <h2 className="text-3xl text-third-white py-6">My Timeline</h2>
      <div className="relative border-l-2 border-gray-300 pl-6">
        {timelineItems.map((item, index) => (
          <div key={index} className="mb-10 text-wrap">
            <div className="text-md text-secondary-white">{item.year}</div>
            <div className="text-xl text-primary-white">{item.title}</div>
            <div className="text-fourth-white">{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline