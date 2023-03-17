import React from "react";
import { ChatBox } from "../components/chatBoxComponent";
import { NewFriendBox } from "../components/newFriendBoxComponent";
import { StoryBoxComponent } from "../components/storyBoxComponent";
import { UserInfoCard } from "../components/userInfoCard";
export function LandingPage() {
  return (
    <>
      <div className="hidden px-10 lg:flex flex-row w-full h-screen bg-gray-100 pt-7">
        <div class=" container w-1/3 ">
          <UserInfoCard className></UserInfoCard>
        </div>
        <div class="container px-5">
          <StoryBoxComponent></StoryBoxComponent>
        </div>
        <div class="container w-1/3">
          <NewFriendBox></NewFriendBox>
          <ChatBox></ChatBox>
        </div>
      </div>
    </>
  );
}
