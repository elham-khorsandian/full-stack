import { useEffect, useState } from "react";
import Course from "../Course/Course";
import "./CourseList.scss";
import Search from "../Search/Search";
import { useNavigate } from "react-router-dom";

const CourseList = () => {
  const [searchedCourses, setSearchedCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const navigate = useNavigate();
  const getCourses = async () => {
    const url = "http://localhost:8080/courses/";
    const response = await fetch(url);
    const data = await response.json();
    setSearchedCourses(data);
    setAllCourses(data);
  };
  const handleSearch = (searchedCourses) => {
    setSearchedCourses(
      allCourses.filter((course) => {
        if (
          course.name.toLowerCase().indexOf(searchedCourses.toLowerCase()) != -1
        ) {
          return true;
        } else {
          return false;
        }
      })
    );
  };
  const showDetails = () => {
    navigate("/course/2", { replace: false });
  };

  useEffect(() => {
    getCourses();
  }, []);
  const courseJSX = () => {
    return searchedCourses.map((course, index) => {
      return (
        <Course
          name={course.name}
          summary={course.summary}
          onClick={showDetails}
        />
      );
    });
  };
  return (
    <>
      <div className="search">
        <h3>Find your next course...</h3>
        <Search onChange={handleSearch} />
      </div>
      <div className="courseList">{courseJSX()}</div>
    </>
  );
};

export default CourseList;
