import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import CardList from "@/components/CardList";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Candy, Check, Settings, Shield } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";



import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import EditUser from "@/components/EditUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserActivity } from "@/components/UserActivity";

const SingleUserPage = () => {
  return (
    <div className="px-5">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/user">user</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>xyz01</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* all user */}

      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* left */}
        <div className="w-full xl:w-1/3 space-y-6">
          <div className="bg-primary-foreground p-4  rounded-lg">
            <h1 className="font-semibold text-xl">User Badge</h1>
            <div className="flex gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger>
                  <div className="border p-1 rounded-full bg-blue-400">
                    <Check className="" size={20} />
                  </div>
                </HoverCardTrigger>
                <HoverCardContent>
                  <p className="text-sm font-bold">Verified user</p>
                  <p className="text-xs  font-semibold mt-1 text-gray-400">
                    The user has been Verified <br></br> by admin
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <div className="border p-1 rounded-full bg-green-700">
                    <Candy className="" size={20} />
                  </div>
                </HoverCardTrigger>
                <HoverCardContent>
                  <p className="text-sm font-bold">Verified user</p>
                  <p className="text-xs  font-semibold mt-1 text-gray-400">
                    The user has been Verified <br></br> by admin
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <div className="border p-1 rounded-full bg-orange-400">
                    <Shield className="" size={20} />
                  </div>
                </HoverCardTrigger>
                <HoverCardContent>
                  <p className="text-sm font-bold">Verified user</p>
                  <p className="text-xs  font-semibold mt-1 text-gray-400">
                    The user has been Verified <br></br> by admin
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <div className="border p-1 rounded-full bg-yellow-600">
                    <Settings className="" size={20} />
                  </div>
                </HoverCardTrigger>
                <HoverCardContent>
                  <p className="text-sm font-bold">Verified user</p>
                  <p className="text-xs  font-semibold mt-1 text-gray-400">
                    The user has been Verified <br></br> by admin
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          <div className="bg-primary-foreground p-4  rounded-lg">
            <div className="flex items-center justify-between">
              <h1 className="font-semibold">User information</h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="cursor-pointer">Edit user</Button>
                </SheetTrigger>
                <EditUser />
              </Sheet>
            </div>
            <p className="text-xs  text-gray-400 mt-3 mb-1">
              Profile Completion 53 %
            </p>
            <Progress value={53} />

            <div className="mt-5 flex  flex-col gap-4">
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold">Username : </span>
                <p>Xyz 123</p>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold">Email : </span>
                <p>Xyz@gmail.com</p>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold">Phone : </span>
                <p>Xxx-xx3-7779</p>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold">location : </span>
                <p>India</p>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold">Role : </span>
                <Badge className="capitalize">user</Badge>
              </div>
            </div>
          </div>
          <div className="bg-primary-foreground p-4  rounded-lg">
            <CardList title={"Recent Transictions"} />
          </div>
        </div>

        {/* right */}
        <div className="w-full xl:w-2/3 space-y-6 rounded-lg">
          {/* USER Card */}
          <div className="bg-primary-foreground p-4  rounded-lg">
            <div>
              <div className="flex items-center gap-3">
                <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <b>User Name</b>
              </div>

              <p className="text-sm text-gray-400 mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quia vel laboriosam molestias pariatur ipsam eveniet maxime consequatur, officia porro labore praesentium perspiciatis quaerat quod accusamus delectus exercitationem cupiditate eum sit. Asperiores cumque maxime excepturi laudantium deleniti voluptatum itaque dolorem perspiciatis earum sint.</p>
            </div>
          </div>
          <div className="bg-primary-foreground p-4  rounded-lg">
            <UserActivity/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUserPage;
