const Heading = ({ title, desc }) => {
  return (
    <div>
      <h2 className=" py-3 text-gray-900">{title}</h2>
      <h1 className=" mb-3 text-gray-500">{desc}</h1>
    </div>
  );
};

export default Heading;
