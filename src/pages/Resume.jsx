import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ResumeTimelineItem from "../components/ResumeTimelineItem";

import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import js from "../assets/icons/js.png";
import react from "../assets/icons/react.png";
import node from "../assets/icons/node-js.png";
import ts from "../assets/icons/typescript.png";
import python from "../assets/icons/python.png";
import tailwind from "../assets/icons/tailwind.png";
import mongo from "../assets/icons/mongo.png";
import redux from "../assets/icons/redux.png";
import github from "../assets/icons/github.png";
import firebase from "../assets/icons/firebase.png";
import nextjs from "../assets/icons/nextjs.png";
import mysql from "../assets/icons/mysql.png";
import postman from "../assets/icons/postman.png";
import bootstrap from "../assets/icons/bootstrap.png";


// function LinearProgressWithLabel({ value, title }) {
//   return (
//     <div>
//       <h1 className="font-bold text-xl text-white">{title}</h1>
//       <Box sx={{ display: "flex", alignItems: "center" }}>
//         <Box sx={{ width: "100%", mr: 1 }}>
//           <LinearProgress variant="determinate" value={value} />
//         </Box>
//         <Box sx={{ minWidth: 35 }}>
//           <Typography variant="body2" color="Highlight">{`${Math.round(
//             value
//           )}%`}</Typography>
//         </Box>
//       </Box>
//     </div>
//   );
// }

let skills = [
  {
    title: "HTML",
    icon: html,
  },
  {
    title: "CSS",
    icon: css,
  },
  {
    title: "JavaScript",
    icon: js,
  },
  {
    title: "TypeScript",
    icon: ts,
  },
  {
    title: "React JS",
    icon: react,
  },
  {
    title: "Node JS",
    icon: node,
  },


  {
    title: "Python",
    icon: python,
  },
  {
    title: "Tailwind CSS",
    icon: tailwind,
  },
  {
    title: "MongoDB",
    icon: mongo,
  },
  {
    title: "Redux",
    icon: redux,
  },
  {
    title: "Github",
    icon: github,
  },
  {
    title: "Firebase",
    icon: firebase,
  },
  {
    title: "nextjs",
    icon: nextjs,
  },
  {
    title: "mysql",
    icon: mysql,
  },
  {
    title: "postman",
    icon: postman,
  },
  {
    title: "bootstrap",
    icon: bootstrap,
  },
];

const Resume = () => {
  return (
    <div
      name="resume"
      id="resume"
      className="p-4 lg:px-24 bg-gradient-to-b from-gray-800 to-black justify-center py-10"
    >
      <div className=" inline-flex flex-col justify-center h-auto">
        <h1 className="text-center font-extrabold md:text-4xl text-2xl my-10">
         Education & Certifications
          <hr className="my-4 h-px w-1/2 md:w-1/4 mx-auto  border-0 bg-gray-700" />
        </h1>
        <div className="grid lg:grid-cols-2 auto-rows-auto gap-10">
          <section className="bg-[#0c0f16] ">
            <h1 className="p-6 md:text-xl  font-semibold">Education</h1>
            <Timeline
              sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }}
            >
              <ResumeTimelineItem
                title="Nowrosjee Wadia College,Pune"
                duration="2019-2022"
                content="Percentage 77 % "
              />
              <ResumeTimelineItem
                title="Nowrosjee Wadia College,Pune"
                duration="2017-2019"
                content="HSC Science Grade: B"
              />
              <ResumeTimelineItem
                title="Genba Sopanrao Moze High school,Pune "
                duration="2005-2017"
                content="SSC Percentage: 80%"
              />
            </Timeline>
          </section>
          <section className="bg-[#0c0f16]">
            <h1 className="p-6 md:text-xl  font-semibold">Certifications</h1>
            <Timeline
              sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }}
            >
              <ResumeTimelineItem
                title="JavaScript "
                duration="march 2023"
                content="HackerRank"
                certificate_link=" https://www.hackerrank.com/certificates/f64859c1f9d5"
              />
               <ResumeTimelineItem
                title="Programming with JavaScript  "
                duration="(04/2023 - 05/2023)"
                content="Coursera"
                certificate_link=" https://www.coursera.org/account/accomplishments/certificate/KZMRMFMHHVN7"
              />
                 <ResumeTimelineItem
                title="React.js Essential Training  "
                duration="06/2023"
                content="LinkedIn"
                certificate_link=" https://www.linkedin.com/learning/certificates/491204b78dbf3e907578a02da4744c179d12391d5bc79e5468ee13df730887fb"
              />
                 <ResumeTimelineItem
                title="Advaned React  "
                duration="(04/2023 - 05/2023)"
                content="Coursera"
                certificate_link=" https://www.coursera.org/account/accomplishments/verify/XPLKWKW5RXW6"
              />
                 <ResumeTimelineItem
                title="React: Working with APIs 
                "
                duration="(06/2023)"
                content="LinkedIN"
                certificate_link=" https://www.linkedin.com/learning/certificates/64e9ad794ef6a6d9e78f527950475e889e2adadfa35407e547dabb23c386aebc"
              />
                 <ResumeTimelineItem
                title="HTML and CSS in Depth 
                "
                duration=" (04/2023 - 05/2023)"
                content="Coursera"
                certificate_link="https://www.coursera.org/account/accomplishments/certificate/DW4GKLVUDU87"
              />
               <ResumeTimelineItem
                title="Introduction to Front-End-Development
                "
                duration=" (04/2023 - 05/2023)"
                content="Coursera"
                certificate_link="https://www.coursera.org/account/accomplishments/verify/5QHM784XJH6T"
              />
               <ResumeTimelineItem
                title="Version Control
                "
                duration="  (05/2023)"
                content="Coursera"
                certificate_link="https://www.coursera.org/account/accomplishments/verify/PYQB3UJX9SC4?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
              />
               <ResumeTimelineItem
                title=" React:State Management "
                duration="  (06/2023)
                " 
                content="LinkedIN"
                certificate_link="https://www.linkedin.com/learning/certificates/c15539bc151977a440d49c1f6b43624eab47746e779592ece71885bf368a8439"
              />
            </Timeline>
          </section>
        </div>
      </div>
      <div className=" py-10 md:py-20">
        <h1 className="text-center font-extrabold md:text-4xl text-2xl my-10">
          My Skills
          <hr className="my-4 h-px w-1/2 md:w-1/4 mx-auto  border-0 bg-gray-700 " />
        </h1>
        <div className="flex justify-center w-full">
          <section className=" flex flex-wrap justify-center items-center gap-6 md:gap-8 md:w-4/5">
            {skills.map((skill) => (
              <div className=" flex justify-center flex-col items-center bg-gray-200 rounded-xl">
                <img
                  src={skill.icon}
                  alt="icon"
                  className="w-20 h-20 md:w-32 md:h-32 p-2 md:p-4"
                />
                <h1 className="text-black font-bold py-2 text-[0.6rem] md:text-lg ">
                  {skill.title}
                </h1>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
