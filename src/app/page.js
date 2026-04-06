"use client";
import { Card, Link, Chip, Button, Input, TextArea } from "@heroui/react";
import {
  Bulb,
  GraduationCap,
  Star,
  CodeFork,
  LocationArrow,
  Envelope,
  CircleFill,
  Xmark,
} from "@gravity-ui/icons";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import ProfileImage from "./profile_image";
import noappimage from "../app/no_app.jpg";
import csgo from "../app/csgo.jpg";
import att from "../app/att.jpg";
import sft from "../app/sft.jpg";
import bike from "../app/bike.jpeg";
import * as React from "react";
import { useState } from "react";
import Experience from "./experience";

const Home = () => {
  return (
    <div className="flex flex-col mx-auto max-w-3xl gap-20 my-24">
      <div className="flex flex-col gap-8">
        <ProfileImage src="https://avatars.githubusercontent.com/u/43013838?v=4" />
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
          return <Experience item={e} key={e.company_name} />;
        })}
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="text-xl font-semibold">Open Source</h1>
        <div className="flex flex-col gap-8">
          {openSourceProjects.map((project) => {
            return <OpenSourceCard key={project.name} project={project} />;
          })}
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="text-xl font-semibold">Education</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {educations.map((e) => {
          return <Education key={e.title} item={e} />;
        })}
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="text-xl font-semibold">Beyond Coding</h1>
        <div className="grid grid-cols-12 gap-8">
          {hobbies.map((hobby) => {
            return <HobbyCard key={hobby.title} hobby={hobby} />;
          })}
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="text-xl font-semibold">Get In Touch</h1>
        <ContactSection />
      </div>
    </div>
  );
};

export default Home;

const Education = ({ item }) => {

  return (
    <Card className="p-5">
      <div className="flex flex-col gap-3">
        <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center">
          <GraduationCap className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-sm text-gray-500 leading-relaxed mt-1 mb-2">{item.subtitle}</p>
          <Chip className="bg-black/4">{item.body}</Chip>
        </div>
      </div>
    </Card>
  );
};

const HobbyCard = ({ hobby }) => {
  const eyebrow = hobby.tags?.[0] ?? "Interest";
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Card className="relative col-span-12 flex min-h-[300px] flex-col overflow-hidden rounded-3xl sm:col-span-6">
      <img
        alt={hobby.title}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        src={hobby.image}
      />
      <button
        type="button"
        aria-label={`View ${hobby.title} image larger`}
        className="absolute inset-0 z-[1] cursor-pointer border-0 bg-transparent p-0"
        onClick={() => setIsOpen(true)}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-black/40 via-black/15 to-black/30"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[25%] border-t border-white/15 bg-gradient-to-t from-black/88 via-black/48 to-transparent shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] backdrop-blur-2xl backdrop-saturate-125"
        aria-hidden
      />
      <Card.Header className="relative z-10">
        <Card.Title className="text-xs font-semibold uppercase tracking-wide text-white/90">
          {eyebrow}
        </Card.Title>
        <Card.Description className="text-sm font-medium leading-5 text-white/75">
          {hobby.title}
        </Card.Description>
      </Card.Header>
      <Card.Footer className="relative z-10 mt-auto">
        <p className="line-clamp-2 text-sm font-normal text-white leading-relaxed">
          {hobby.description}
        </p>
      </Card.Footer>
      <Lightbox
        plugins={[Zoom]}
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={[{ src: hobby.image, alt: hobby.title }]}
        index={0}
        carousel={{ finite: true }}
        zoom={{
          maxZoomPixelRatio: 3,
          scrollToZoom: true,
        }}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
        }}
        controller={{ closeOnPullDown: false, closeOnBackdropClick: true }}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
          iconZoomOut: () => null,
          iconZoomIn: () => null,
          buttonClose: () => (
            <Button
              isIconOnly
              variant="tertiary"
              key="hobby-lightbox-close"
              onClick={() => setIsOpen(false)}
            >
              <Xmark />
            </Button>
          ),
        }}
      />
    </Card>
  );
};

const OpenSourceCard = ({ project }) => {
  return (
    <Card className="p-5">
      <div className="flex flex-col gap-3">
        <div className="flex flex-row items-start justify-between">
          <div className="flex flex-row items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center">
              <span className="text-white font-bold text-sm">
                {project.name.charAt(0)}
              </span>
            </div>
            <div>
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold transition-colors"
              >
                {project.name}
              </Link>
              <p className="text-sm text-gray-400">{project.language}</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4">
            <div className="flex items-center gap-1 text-sm text-gray-400">
              <Star className="h-4 w-4" />
              <span>{project.stars}</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-400">
              <CodeFork className="h-4 w-4" />
              <span>{project.forks}</span>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-1">
          {project.tags.map((tag) => (
            <Chip key={tag} size="sm" className="bg-white/10">
              {tag}
            </Chip>
          ))}
        </div>
      </div>
    </Card>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "4bd5f104-bd89-434b-aec0-fd88f0b11f75",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: "Portfolio Contact Form",
          subject: `New message from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Card className="p-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-gray-500 leading-relaxed">
          I’m currently focused on my ongoing work, but I’ll consider interesting opportunities.
          Feel free to reach out if you have a question or just want to say hi!
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-gray-100 shadow-none"
            />
            <Input
              name="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-gray-100 shadow-none"
            />
          </div>
          <TextArea
            name="message"
            placeholder="Tell me about your project or just say hello..."
            value={formData.message}
            onChange={handleChange}
            required
              className="bg-gray-100 shadow-none"
          />
          <div className="mt-1"></div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-black text-white"
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                <LocationArrow className="h-4 w-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
        {submitStatus === "success" && (
          <p className="text-sm">
            Message sent successfully! I'll get back to you soon.
          </p>
        )}
        {submitStatus === "error" && (
          <p className="text-sm">
            Something went wrong. Please try again or email me directly.
          </p>
        )}
        <div className="flex flex-row items-center gap-4 pt-4 border-t border-white/10">
          <Envelope className="h-5 w-5 text-gray-400" />
          <Link
            href="mailto:musfick@example.com"
            className="text-gray-400 hover:text-white transition-colors"
          >
            musfick.jamil.1@gmail.com
          </Link>
        </div>
      </div>
    </Card>
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
    subtitle: "Secondary School Certificate",
    body: "2012 - 2014",
  },
];

const hobbies = [
  {
    title: "Desk Setup",
    description:
      "My desk setup is for both work and fun, helping me stay productive and relax.",
    image:
      "https://raw.githubusercontent.com/Musfick/Musfick/master/my_personal_work_space.jpeg",
    tags: ["PC"],
  },
  {
    title: "Bike Touring",
    description:
      "I love bike touring and have explored mountains, rivers, and beaches across Bangladesh.",
    image:
    bike.src,
    tags: ["Adventure"],
  },
  {
    title: "PC Gaming",
    description:
      "I love to play games and have played games for a long time.",
    image:
    csgo.src,
    tags: ["Gaming"],
  }
];

const openSourceProjects = [
  {
    name: "preron",
    description:
      "An Android app that allows bKash cash out, send money, and balance check offline using a USSD dialer with Accessibility Service. It is currently in development for Android.",
    language: "Dart",
    stars: 0,
    forks: 0,
    url: "https://github.com/Musfick/preron",
    tags: ["Flutter", "Accessibility Service", "Dart"],
  },
  {
    name: "AlbumFetcher",
    description:
      "An Android app consuming a https://jsonplaceholder.typicode.com API to display album list. it has been built with Kotlin, Jetpack Compose, Repository Pattern and MVVM pattern as well as Architecture Components. Also uses unitTest and instrumentation testing.",
    language: "Kotlin",
    stars: 0,
    forks: 0,
    url: "https://github.com/Musfick/AlbumFetcher",
    tags: ["Jetpack Compose", "Retrofit", "Coroutines", "Hilt", "JUnit", "Compose UI Testing", "Turbine", "Mockwebserver", "Code coverage"],
  },
  {
    name: "AgentX",
    description:
      "An Android & iOS app consuming a (https://valorant-api.com/) API to display agent list. it has been built with Kotlin Multiplatform Mobile.",
    language: "Kotlin & Swift",
    stars: 64,
    forks: 5,
    url: "https://github.com/Musfick/AgentX",
    tags: ["KMM", "Jetpack Compose", "SwiftUI", "Ktor", "SQLDelight", "Coil"],
  },
  {
    name: "retrofit-kotlin-upload-progress",
    description:
      "This library allows you to get upload progress from Retrofit Request Body.",
    language: "Kotlin",
    stars: 38,
    forks: 5,
    url: "https://github.com/Musfick/retrofit-kotlin-upload-progress",
    tags: ["Kotlin", "Retrofit", "Library"],
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
        logo: att.src,
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
        logo: sft.src,
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
