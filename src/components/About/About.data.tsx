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
      endCounter: 10,
      text: "Satisfied Clients",
      lineRight: true,
      lineRightMobile: false,
    },
    {
      id: 2,
      endCounter: 15,
      text: "Finished projects",
      lineRight: true,
      lineRightMobile: true,
    },
    {
      id: 3,
      endCounter: 3,
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
          title: "iOS Developer in Purple-Systems 🚀 ",
          date: "since 21/12/2022",
        },
        {
          title: "Flutter Developer in Inure ",
          date: "since 15/1/2024",
        },
        {
          title: "Front Web Developer in Tripod",
          date: "since 1/11/2023",
        }
      ],
    },
    {
      id: 2,
      text: "Studies",
      skills: [
        {
          title: "iOS Developer in Udemy, Apple Docummentarion, ISUCorp and Ray Wenderlich",
          date: "since 2022",
        },
        {
          title: "Flutter Developer in Udemy and Flutter Docummentation",
          date: "since 2023",
        },
        {
          title: "Front End React Developer in Udemy",
          date: "since 2022",
        },
        {
          title: "Chemist Engineer in Cienfuegos University",
          date: "since 2018",
        },
      ],
    },
   
  ];