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
        <div className="absolute bottom-0 left-[22px] top-12 w-0.5 bg-gradient-to-b from-black to-transparent opacity-20 sm:left-6" />
        <div className="flex gap-3 sm:gap-4">
          <div className="relative shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br bg-black">
              <BriefcaseFill className="h-6 w-6 text-white" />
            </div>
          </div>

          <div className="min-w-0 flex-1 pb-8">
            <div>
              <h3 className="text-base font-medium sm:text-lg">
                {item.designation}
              </h3>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                <span className="min-w-0 break-words text-gray-600">
                  {item.company_name}
                </span>
                <span className="text-gray-300" aria-hidden>
                  •
                </span>
                <span className="shrink-0 text-gray-600">{item.duration}</span>
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
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="mx-auto flex w-full max-w-md cursor-pointer items-center justify-center gap-2 px-3 py-2 text-center text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 sm:w-fit sm:max-w-none"
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
    <Card className="flex min-w-0 w-full flex-col items-stretch overflow-hidden shadow-none md:flex-row">
      <div className="relative h-[160px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[140px] md:h-[120px] md:w-[120px]">
        <img
          alt="TMV"
          className="pointer-events-none absolute inset-0 h-full w-full scale-100 object-cover select-none"
          loading="lazy"
          src={item.logo}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="min-w-0 gap-1">
          <Card.Title className="pr-2 text-base sm:pr-8 sm:text-lg">{item.title}</Card.Title>
          <Card.Description className="text-[15px] leading-relaxed text-gray-500 sm:text-base">
            {item.description}
          </Card.Description>
        </Card.Header>
        <Card.Footer className="mt-auto flex w-full min-w-0 flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-row flex-wrap gap-2 sm:gap-2.5">
            {item.appstore == null && item.playstore == null ? (
              <Button
                isDisabled
                variant="outline"
                className="w-full sm:w-auto"
              >
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
                className="min-w-0 flex-1 sm:flex-initial"
                img="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_Play_2022_icon.svg/960px-Google_Play_2022_icon.svg.png"
              />
            ) : (
              <></>
            )}
            {item.appstore ? (
              <StoreButton
                title={"App Store"}
                link={item.appstore}
                className="min-w-0 flex-1 sm:flex-initial"
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
