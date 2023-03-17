import { Card, Typography } from "@material-tailwind/react";
import React from "react";
export function StoryBoxComponent() {
  return (
    <>
      <div className="flex h-1/4 w-full flex-row justify-center">
        <Card className="w-1/6 mx-2  bg-blue-300  rounded-lg "></Card>
        <Card className="w-1/6 mx-2  bg-pink-300 rounded-lg"></Card>
        <Card className="w-1/6 mx-2 bg-red-300  rounded-lg"></Card>
        <Card className="w-1/6 mx-2  bg-green-300 rounded-lg"></Card>
        <Card className="w-1/6 mx-2 align-bottom			 bg-yellow-300 bg-blend-multiply rounded-lg">
          <Typography className=" font-sans text-white text-center	  font-semibold">
            <p>Dragan Bijelic</p>
          </Typography>
        </Card>
      </div>
    </>
  );
}
