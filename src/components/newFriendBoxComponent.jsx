import { Button, Card, Typography } from "@material-tailwind/react";

export function NewFriendBox() {
  return (
    <>
      <div className=" p-3">
        <Typography>
          <p className="ml-3 pb-3 text-lg font-sans font-semibold text-gray-400">
            Requests
          </p>
        </Typography>
        <div>
          <Card className="mb-5 lg:full flex p-3 flex-col text-center bg-white rounded-lg	">
            <ul className="">
              <Typography className="text-lg font-sans font-semibold">
                <li className="my-2 items-center  flex  ">
                  <img
                    className="h-12 w-12  rounded-full"
                    src="https://cdn.discordapp.com/attachments/940373493483200573/1085708135089573898/gym_workout_routines_5_1024x1024.png"
                    alt=""
                  />
                  <p className="ml-2 text-lg text-gray-600">
                    Dragan Bijelic wants to be your friend
                  </p>
                </li>
              </Typography>
            </ul>
            <div>
              <button class="mr-3 w-1/3 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full">
                Accept
              </button>
              <button class="ml-3 w-1/3 bg-white hover:bg-gray-500 hover:text-white text-gray-800 border border-gray-500 font-semibold py-2 px-4 rounded-full">
                Decline
              </button>
            </div>
          </Card>
          <Card className="mb-5 lg:full	flex p-3 flex-col text-center bg-white rounded-lg	">
            <ul className="">
              <Typography className="text-lg font-sans font-semibold">
                <li className="my-2 items-center  flex  ">
                  <img
                    className="h-12 w-12  rounded-full"
                    src="https://cdn.discordapp.com/attachments/940373493483200573/1085708135089573898/gym_workout_routines_5_1024x1024.png"
                    alt=""
                  />
                  <p className="ml-2 text-lg text-gray-600">
                    Dragan Bijelic wants to be your friend
                  </p>
                </li>
              </Typography>
            </ul>
            <div>
              <button class="mr-3 w-1/3 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full">
                Accept
              </button>
              <button class="ml-3 w-1/3 bg-white hover:bg-gray-500 hover:text-white text-gray-800 border border-gray-500 font-semibold py-2 px-4 rounded-full">
                Decline
              </button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
