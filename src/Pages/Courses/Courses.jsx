
import { useEffect, useState } from "react"
import { Pagination, ThemeProvider, createTheme } from '@mui/material';
import {  useLoaderData } from "react-router-dom";
import Card from "../../Component/Card";

const Courses = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#ff0000',
      },
      secondary: {
        main: '#00ff00',
      },
    },
  });

  const [courseData, setCourseData] = useState([]);
  const loaderData = useLoaderData();
  const [currentPage, setCurrentPage] = useState(1)

  const [paginatedData, setpagintaedData] = useState([])

  let itemPerpage = 8



  useEffect(() => {
    setCourseData(loaderData);
  }, [loaderData]);



  useEffect(() => {
    let lastIndex = currentPage * itemPerpage;
    let fristIndex = lastIndex - itemPerpage;
    const result = courseData.slice(fristIndex, lastIndex);
    setpagintaedData(result)
  }, [currentPage, courseData, itemPerpage]);


  const totalProducts = loaderData.length;
  const totalPage = Math.ceil(totalProducts / itemPerpage);
  const handleChange = (event, value) => {
    setCurrentPage(value);
  }



  return (
    <div className="bg-[#151515]">

      <div className=" max-w-7xl mx-auto grid py-24 grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-6">
        {
          paginatedData.map(course => <>
            <Card
              key={course._id}
              course={course}

            >
            </Card></>)
        }

      </div>

      <div className="text-center py-5">

        <ThemeProvider theme={theme}>
          <div className="w-full h-full flex justify-center items-center py-10">
            <Pagination onChange={handleChange} count={totalPage} color="primary" />
          </div>
        </ThemeProvider>
      </div>





    </div>
  );
};

export default Courses;