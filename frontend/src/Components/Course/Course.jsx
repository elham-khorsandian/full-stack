import "./Course.scss";
const Course = (props) => {
  const { name, summary, onClick } = props;

  return (
    <div className="course" onClick={onClick}>
      <h3>{name}</h3>
      <p>{summary}</p>
    </div>
  );
};

export default Course;
