import React from 'react'
import ProjectHero from './components/projectHero';
import Section1 from './components/section1';
import Section2 from './components/section2';
import Project from "@/app/components/Project";
import OngoingProjects from './components/ongoing';

const page = () => {
  return (
    <>
    <ProjectHero/>
    <OngoingProjects/>
    {/* <Section1/> */}
    <Section2/>
    <Project/>
    </>
  )
}

export default page