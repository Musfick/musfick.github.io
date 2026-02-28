"use client";
import { Button } from "@heroui/react";

const StoreButton = ({ title, link, img }) => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => {
        window.open(link, "_blank", "noopener,noreferrer");
      }}
    >
      <img src={img} alt={title} className="h-3" />
      {title}
    </Button>
  );
};

export default StoreButton;
