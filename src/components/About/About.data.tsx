import { TbBrandJavascript, TbBrandTypescript, TbBrandSwift,  TbBrandReact, TbBrandTailwind, TbBrandFlutter } from "react-icons/tb";
import { FaUikit, FaSwift, FaApple } from "react-icons/fa";
import { TfiAndroid } from "react-icons/tfi";
export const dataCounter = [
    {
      id: 0,
      endCounter: 2,
      text: "Years of experience",
      lineRight: true,
      lineRightMobile: true,
    },
    {
      id: 1,
      endCounter: 20,
      text: "Satisfied Clients",
      lineRight: true,
      lineRightMobile: false,
    },
    {
      id: 2,
      endCounter: 25,
      text: "Finished projects",
      lineRight: true,
      lineRightMobile: true,
    },
    {
      id: 3,
      endCounter: 5,
      text: "collaborations with companies",
      lineRight: false,
      lineRightMobile: false,
    },
  ];
  
  export const dataAboutSkills = [
    {
      id: 0,
      text: "Skills",
      skills: [
        {
          title: "iOS Developer",
          date: 
          <div className="flex">
            <TbBrandSwift size="40"/>
            <FaUikit size="40"/>
            <FaSwift size="40"/>      
          </div>,
        },
        {
          title: "Flutter Developer",
          date: 
          <div className="flex">
            <TbBrandFlutter size="40"/>
            <TfiAndroid size="40"/>
            <FaApple size="40"/>      
          </div>,
        },
        {
          title: "Frontend Developer",
          date:
          <div className="flex">
          <TbBrandTypescript size="40"/>
          <TbBrandReact size="40"/>
          <TbBrandJavascript size="40"/>
          <TbBrandTailwind size="40"/>
        </div>,
        },
      ],
    },
    {
      id: 1,
      text: "Experience",
      skills: [
        {
          title: "iOS Developer in Yorgi'Soft 🚀 ",
          date: "since 2022",
        },
        {
          title: "Flutter Developer in Yorgi'Soft 🚀 ",
          date: "since 2023",
        },
        {
          title: "Front Web Developer in TheNightLove ",
          date: "since 2021",
        }
      ],
    },
    {
      id: 2,
      text: "Studies",
      skills: [
        {
          title: "Software engineering at Udemy, Coursera",
          date: "since 2021",
        },
      ],
    },
   
  ];