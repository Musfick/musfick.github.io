"use client";
import * as React from "react";
import { Avatar } from "@heroui/react";
import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { Ellipsis, Xmark } from "@gravity-ui/icons";
import { Button } from "@heroui/react";

const ProfileImage = ({ src }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [closeOnPullDown, setCloseOnPullDown] = React.useState(false);
  const [closeOnBackdropClick, setCloseOnBackdropClick] = React.useState(true);
  const [finite, setFinite] = React.useState(true);
  return (
    <>
      <Avatar
        className="size-24 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <Avatar.Image alt="Profile Image" src={src} />
        <Avatar.Fallback>Musfick Jamil</Avatar.Fallback>
      </Avatar>
      <Lightbox
        plugins={[Zoom]}
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={[{ src }]}
        index={0}
        carousel={{
          finite,
        }}
        zoom={{
          maxZoomPixelRatio: 3,
          scrollToZoom: true,
        }}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
        }}
        controller={{ closeOnPullDown, closeOnBackdropClick }}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
          iconZoomOut: () => null,
          iconZoomIn: () => null,
          buttonClose: () => (
            <Button
              isIconOnly
              variant="tertiary"
              key={"closebtn"}
              onClick={() => setIsOpen(false)}
            >
              <Xmark />
            </Button>
          ),
        }}
      />
    </>
  );
};

export default ProfileImage;
