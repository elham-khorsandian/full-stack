import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./CourseDetails.scss";

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
    <div className="details">
      <div className="courseDetails">
        <h2>Here are the details of the {courseDetails.name} course...</h2>
        <div>Category: {courseDetails.category}</div>
        <div>Course author: {courseDetails.author}</div>
        <div>Course location: {courseDetails.location}</div>
        <div>Duration of the course: {courseDetails.duration}</div>
        <div>Price: {courseDetails.price}</div>
        <div>Summary: {courseDetails.summary}</div>
      </div>
    </div>
  );
};

export default CourseDetails;
