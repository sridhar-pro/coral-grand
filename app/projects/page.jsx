import React from 'react'
import ProjectHero from './components/projectHero';
import Section1 from './components/section1';
import Section2 from './components/section2';
import Project from "@/app/components/Project";

const page = () => {
  return (
    <>
    <ProjectHero/>
    {/* <Section1/> */}
    <Section2/>
    <Project/>
    </>
  )
}

export default page