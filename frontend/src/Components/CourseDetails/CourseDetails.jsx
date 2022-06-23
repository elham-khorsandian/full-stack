import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const CourseDetails = () => {
  let { id } = useParams();

  const [courseDetails, setCourseDetails] = useState({});

  const getCourse = async () => {
    const url = "http://localhost:8080/courses/" + id;
    const response = await fetch(url);
    const data = await response.json();
    setCourseDetails(data);
  };
  useEffect(() => {
    getCourse();
  }, []);
  return (
    <div>
      {courseDetails.name}
      {courseDetails.category}
    </div>
  );
};

export default CourseDetails;
