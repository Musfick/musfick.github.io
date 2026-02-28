"use client";
import { Card, Link, Chip } from "@heroui/react";
import { GraduationCap } from "@gravity-ui/icons";
import ProfileImage from "./profile_image";
import noappimage from "../app/no_app.jpg";
import * as React from "react";
import Experience from "./experience";

const Home = () => {
  return (
    <div className="flex flex-col mx-auto max-w-3xl gap-12 my-24">
      <ProfileImage src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg" />
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="font-semibold text-2xl">Hey, I'm Musfick Jamil.</h1>
          <h1 className="font-semibold text-2xl">
            Mobile Application Developer (Android & iOS)
          </h1>
          <h1 className="font-semibold text-2xl">
            based in Dhaka, Bangladesh.
          </h1>
        </div>
        <p>
          I build mobile apps for iOS and Android using Kotlin, Swift, and
          Flutter. I focus on writing clean code and creating reliable solutions
          that people actually use every day.
        </p>

        <div className="flex flex-row items-center gap-6">
          {links.map((e) => {
            return (
              <Link
                href={e.link}
                target="_blank"
                rel="noopener noreferrer"
                key={e.link}
              >
                {e.title}
                <Link.Icon />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="text-xl font-semibold">Skills</h1>
        <div className="flex flex-wrap items-center gap-3">
          {skills.map((e) => {
            return (
              <Chip className="bg-white" key={e} size="lg">
                {e}
              </Chip>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="text-xl font-semibold">Experience</h1>
        {experiences.map((e) => {
          return (
            <Experience
              item={e}
              key={e.company_name}
              isLast={
                e.company_name ==
                experiences[experiences.length - 1].company_name
              }
            />
          );
        })}
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="text-xl font-semibold">Education</h1>
        {educations.map((e) => {
          return <Education key={e.title} item={e} />;
        })}
      </div>
    </div>
  );
};

export default Home;

const Education = ({ item }) => {
  return (
    <div className="flex flex-row place-items-center gap-5">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br bg-white flex items-center justify-center">
        <GraduationCap className="h-6 w-6" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-medium">{item.title}</h3>
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="text-gray-600">{item.subtitle}</span>
          <span className="text-gray-300">•</span>
          <span className=" text-gray-600">{item.body}</span>
        </div>
      </div>
    </div>
  );
};

const educations = [
  {
    title: "Daffodil International University, Dhaka",
    subtitle: "B.Sc. in Computer Science and Engineering",
    body: "2017 - 2021",
  },
  {
    title: "Notre Dame College, Mymensingh",
    subtitle: "Higher Secondary Certificate",
    body: "2014 - 2016",
  },
  {
    title: "Government Laboratory High School, Mymensingh",
    subtitle: "Secondary School Certificat",
    body: "2012 - 2014",
  },
];

const experiences = [
  {
    designation: "Senior Software Engineer (L3)",
    company_name: "Bondstein Technolgoy Limited",
    duration: "Nov 2022 - Present",
    projects: [
      {
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/f1/25/a1/f125a1e9-3c13-7cce-0ef0-4fa19917458c/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/200x200ia-75.webp",
        title: "Track My Vehicle",
        description: (
          <>
            GPS tracking & fleet management app for Android
            <strong> (Kotlin/Compose)</strong> and iOS
            <strong> (SwiftUI)</strong> with offline support, MVVM, Google Maps,
            push notifications, and payments.
          </>
        ),
        playstore:
          "https://play.google.com/store/apps/details?id=com.bondstein.app.tmv",
        appstore:
          "https://apps.apple.com/in/app/track-my-vehicle-tmv/id6670245303",
      },
      {
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/88/bf/b7/88bfb726-6f30-f94d-b3c0-0a1765cbabf5/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/200x200ia-75.webp",
        title: "BCharge Bangladesh",
        description: (
          <>
            EV charging app for Android and iOS built with{" "}
            <strong>Flutter</strong>, allowing users to remotely start and stop
            vehicle charging, integrated with <strong>IoT</strong> and payment
            gateway support.
          </>
        ),
        playstore:
          "https://play.google.com/store/apps/details?id=com.bondstein.app.bcharge",
        appstore:
          "https://apps.apple.com/us/app/bcharge-bangladesh/id6740781995",
      },
      {
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ef/9a/4b/ef9a4b28-3984-a53b-020b-46513b3463c7/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/200x200ia-75.webp",
        title: "JCI Connect",
        description: (
          <>
            A Super App platform which will be the center point of interaction
            among JCI members. This is a cross platform application built with
            <strong> Flutter</strong>
          </>
        ),
        playstore:
          "https://play.google.com/store/apps/details?id=com.singularity.app.jci.community",
        appstore:
          "https://apps.apple.com/us/app/jci-bangladesh-connect/id6740516016",
      },
      {
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/31/6c/c2/316cc2a0-d119-0975-fea6-3e2f64031e3e/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/200x200ia-75.webp",
        title: "MySERVO",
        description: (
          <>
            The app is designed to enhance your purchasing experience by
            providing a unique way to earn and redeem rewards. This is a cross
            platform application built with
            <strong> Flutter.</strong>
          </>
        ),
        playstore:
          "https://play.google.com/store/apps/details?id=com.singularitybd.app.myservo&hl=en",
        appstore: "https://apps.apple.com/us/app/myservo/id6755518223",
      },
      {
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ce/1d/bc/ce1dbcd3-62b8-9e0a-9d40-c129868809d0/AppIcon-0-0-1x_U007emarketing-0-8-0-0-85-220.png/200x200ia-75.webp",
        title: "Lead Management System",
        description: (
          <>
            This is a business management app that centralizes lead tracking,
            sales, tasks, and workflow in one platform. This is a cross platform
            application built with
            <strong> Flutter.</strong>
          </>
        ),
        playstore:
          "https://play.google.com/store/apps/details?id=com.singularity.lead.app",
        appstore:
          "https://apps.apple.com/us/app/leads-management-system/id6744722579",
      },
      {
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/7a/f7/06/7af706a0-3d8c-2e79-4f8f-0c5c64d13728/AppIcon-0-0-1x_U007emarketing-0-8-0-0-85-220.png/200x200ia-75.webp",
        title: "Track My Vehicle - Lite",
        description: (
          <>
            This is the lite version of the Track My Vehicle app, built as a
            cross-platform application using
            <strong> Flutter.</strong>
          </>
        ),
        playstore:
          "https://play.google.com/store/apps/details?id=com.bondstein.tmv.lite",
        appstore:
          "https://apps.apple.com/us/app/track-my-vehicle-lite/id1663701040",
      },
      {
        logo: "https://play-lh.googleusercontent.com/MZcK2L4GH1FtMbdwoEku-oo-NULI7jEiHMQSVqiv5ZisactqQ2SU-8INBtutJmlR5Sw=w240-h480-rw",
        title: "Avengers - Task Tracker",
        description: (
          <>
            A Realtime GPS tracking based task management solution, built with
            <strong> Kotlin and Jetpack compose UI .</strong>
          </>
        ),
        playstore:
          "https://play.google.com/store/apps/details?id=com.bondstein.techniciantracker",
        appstore: null,
      },
      {
        logo: "https://play-lh.googleusercontent.com/_2HHVhrMdIQg20v9TDZ9i8XpyIzd5HjiPWlLuGnhxT0bkypNIxGDUQ15srHiBSkL9iZDH9pU7v-pX7uirw8XGg=w240-h480-rw",
        title: "Sales Force Tracker",
        description: (
          <>
            This app built with <strong>Kotlin</strong> and{" "}
            <strong>Jetpack Compose</strong>, making it easy to check in/out,
            track daily work status, and view real-time attendance summaries.
          </>
        ),
        playstore:
          "https://play.google.com/store/apps/details?id=com.singularitybd.app.salesforcetracker",
        appstore: null,
      },
    ],
  },
  {
    designation: "Mobile Application Developer",
    company_name: "Ezze Technolgoy Limited",
    duration: "Feb 2021 - Oct 2022",
    projects: [
      {
        logo: noappimage.src,
        title: "Advisofast",
        description: (
          <>
            A telemedicine app with video/audio consultation. Built with{" "}
            <strong>Kotlin (Android)</strong> and <strong>Flutter (iOS)</strong>
            , featuring real-time communication via <strong>Agora SDK</strong>{" "}
            and <strong>Stripe</strong> payment integration.
          </>
        ),
        playstore: null,
        appstore: null,
      },
      {
        logo: noappimage.src,
        title: "Digital Literacy Center",
        description: (
          <>
            An educational platform with course content, quizzes, and
            leaderboard functionality. Built with <strong>Flutter</strong> for
            cross-platform delivery.
          </>
        ),
        playstore: null,
        appstore: null,
      },
      {
        logo: noappimage.src,
        title: "NAEM",
        description: (
          <>
            An application management system for National Academy for
            Educational Management. Built with <strong>Kotlin</strong> for
            Android.
          </>
        ),
        playstore: null,
        appstore: null,
      },
    ],
  },
];

const skills = [
  "Kotlin",
  "Swift",
  "Dart",
  "Jetpack Compose",
  "SwiftUI",
  "Flutter",
  "React Native",
  "MVVM/MVI",
  "Clean Architecture",
  "Coroutines",
  "Dependency Injection",
  "Room",
  "Reactive Programming",
  "RESTful APIs",
  "GraphQL",
  "WebSocket",
  "Google Maps",
  "Push Notifications",
  "Payment Gateway",
  "Unit Testing",
  "Git",
  "CI/CD",
];

const links = [
  {
    title: "Github",
    link: "https://github.com/musfick",
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/musfick",
  },
  {
    title: "Youtube",
    link: "https://www.youtube.com/@MusfickJamil",
  },
];
