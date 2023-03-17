import { Card, Typography } from "@material-tailwind/react";
import React from "react";

export function UserInfoCard() {
  return (
    <>
      <Card className="mb-5 lg:full mr-5	flex p-3 flex-col text-center bg-white rounded-lg	">
        <ul className="">
          <li className="my-2 items-center  flex  ">
            <img
              className="h-12 w-12 mr-2 rounded-full"
              src="https://cdn.discordapp.com/attachments/940373493483200573/1085708135089573898/gym_workout_routines_5_1024x1024.png"
              alt=""
            />
            <div className="flex flex-col text-start">
              <Typography className="text-lg font-sans font-bold">
                <p className="ml-2 text-lg text-gray-600">Dragan Bijelic</p>
              </Typography>
              <Typography className="text-sm font-sans font-normal">
                <p className="ml-2 text-lg text-gray-600">@bijelic</p>
              </Typography>
            </div>
          </li>
        </ul>
      </Card>
    </>
  );
}
