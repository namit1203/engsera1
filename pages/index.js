import React from "react";
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/Index/MainBanner";
import Partner from "@/components/Index/Partner";
import WhyChooseUs from "@/components/Index/WhyChooseUs";
import PopularCourses from "@/components/Index/PopularCourses";
import FunFacts from "@/components/Index/FunFacts";
import FeedbackSlider from "@/components/Index/FeedbackSlider";
import SubscribeForm from "@/components/Common/SubscribeForm";
import Footer from "@/components/_App/Footer";
import baseUrl from "@/utils/baseUrl";
import OurLanguageCourses from "@/components/Index/OurLanguageCourses";
import HowToApply from "@/components/Index/HowToApply";

function Index({ courses, user }) {
  return (
    <>
      <Navbar user={user} />

      <MainBanner user={user} />

      <OurLanguageCourses />

      <WhyChooseUs />

      <FeedbackSlider />

      <PopularCourses user={user} courses={courses} />

      <FunFacts />

      <HowToApply />

      <SubscribeForm />

      <Partner />

      <Footer />
    </>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${baseUrl}/api/popular-courses`);
  const { courses } = await res.json();

  // Pass data to the page via props
  return { props: { courses: courses || [] } };
}

export default Index;
