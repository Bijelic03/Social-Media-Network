import { Typography, Card } from "@material-tailwind/react";

export function ChatBox() {
  return (
    <>
      <div className=" lg:full p-3	">
        <Typography>
          <p className="ml-3 pb-3 text-lg font-sans font-semibold text-gray-400">
            Contacts
          </p>
        </Typography>
        <Card className=" p-3 text-center bg-white rounded-lg	">
          <ul className="flex flex-col ">
            <Typography className="text-lg font-sans font-semibold">
              <li className="my-2 items-center  flex  ">
                <img
                  className="h-12 w-12  rounded-full"
                  src="https://cdn.discordapp.com/attachments/940373493483200573/1085708135089573898/gym_workout_routines_5_1024x1024.png"
                  alt=""
                />
                <p className="ml-2 text-lg text-gray-600">Dragan Bijelic</p>
              </li>
              <li className="my-2 items-center  flex  ">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://cdn.discordapp.com/attachments/940373493483200573/1085708135089573898/gym_workout_routines_5_1024x1024.png"
                  alt=""
                />
                <p className="ml-2 text-lg text-gray-600">Petar Petrovic</p>
              </li>
              <li className="my-2 items-center  flex  ">
                <img
                  className="h-12 w-12  rounded-full"
                  src="https://cdn.discordapp.com/attachments/940373493483200573/1085708135089573898/gym_workout_routines_5_1024x1024.png"
                  alt=""
                />
                <p className="ml-2 text-lg text-gray-600">Nikola Lukic</p>
              </li>
              <li className="my-2 items-center  flex  ">
                <img
                  className="h-12 w-12  rounded-full"
                  src="https://cdn.discordapp.com/attachments/940373493483200573/1085708135089573898/gym_workout_routines_5_1024x1024.png"
                  alt=""
                />
                <p className="ml-2 text-lg text-gray-600">Luka Nikolic</p>
              </li>
            </Typography>
          </ul>
        </Card>
      </div>
    </>
  );
}
