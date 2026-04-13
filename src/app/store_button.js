"use client";
import { Button } from "@heroui/react";

const StoreButton = ({ title, link, img, className }) => {
  return (
    <Button
      variant="outline"
      size="sm"
      className={className}
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
