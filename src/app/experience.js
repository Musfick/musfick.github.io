"use client";
import * as React from "react";
import { Card, Button } from "@heroui/react";
import {
  BriefcaseFill,
  ChevronDown,
  ChevronUp,
  LinkSlash,
} from "@gravity-ui/icons";
import StoreButton from "./store_button";

const Experience = ({ item }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const hasMoreThanThree = item.projects.length > 2;
  const displayedProjects = isExpanded
    ? item.projects
    : item.projects.slice(0, 2);

  return (
    <>
      <div className="group relative">
        <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-black to-transparent opacity-20" />
        <div className="flex gap-4">
          <div className="relative flex-shrink-0">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br bg-black flex items-center justify-center">
              <BriefcaseFill className="h-6 w-6 text-white" />
            </div>
          </div>

          <div className="flex-1 pb-8">
            <div>
              <h3 className="text-lg font-medium">{item.designation}</h3>
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <span className="text-gray-600">{item.company_name}</span>
                <span className="text-gray-300">•</span>
                <span className=" text-gray-600">{item.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {displayedProjects.map((e) => {
        return <Project key={e.title} item={e} />;
      })}
      {hasMoreThanThree && (
        <div className="flex justify-center my-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center w-fit justify-center gap-2 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
          >
            {isExpanded ? (
              <>
                Show less
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Show {item.projects.length - 2} more projects
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      )}
      <hr className="border-gray-200" />
    </>
  );
};

const Project = ({ item }) => {
  return (
    <Card className="w-full items-stretch md:flex-row shadow-none">
      <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
        <img
          alt="TMV"
          className="pointer-events-none absolute inset-0 h-full w-full scale-100 object-cover select-none"
          loading="lazy"
          src={item.logo}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="pr-8 text-lg">{item.title}</Card.Title>
          <Card.Description className="text-gray-500 leading-relaxed">{item.description}</Card.Description>
        </Card.Header>
        <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-row gap-2.5">
            {item.appstore == null && item.playstore == null ? (
              <Button isDisabled variant="outline">
                <LinkSlash />
                Link Unavailable
              </Button>
            ) : (
              <></>
            )}
            {item.playstore ? (
              <StoreButton
                title={"Play Store"}
                link={item.playstore}
                img="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_Play_2022_icon.svg/960px-Google_Play_2022_icon.svg.png"
              />
            ) : (
              <></>
            )}
            {item.appstore ? (
              <StoreButton
                title={"App Store"}
                link={item.appstore}
                img="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              />
            ) : (
              <></>
            )}
          </div>
        </Card.Footer>
      </div>
    </Card>
  );
};

export default Experience;
