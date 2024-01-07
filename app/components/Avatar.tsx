"use client";

import { User } from "@prisma/client";
import Image from "next/image";
import clsx from "clsx";
import useActiveList from "../hooks/useActiveList";
import { getInitials } from "../libs/utils";
import { useEffect, useState } from "react";

interface AvatarProps {
  user?: User;
}

const Avatar: React.FC<AvatarProps> = ({ user }) => {
  const { members } = useActiveList();
  const [initials, setInitials] = useState("");
  const isActive = members.indexOf(user?.email!) !== -1;

  useEffect(() => {
    setInitials(getInitials(user?.name!));
  }, [user?.name]);
  return (
    <div className="relative" suppressHydrationWarning>
      <div
        className={clsx(
          "relative",
          "inline-block",
          "rounded-full",
          "overflow-hidden",
          "h-9",
          "w-9",
          "md:h-11",
          "md:w-11",
          !user?.image &&
            "border border-solid shadow-sm font-medium text-lg border-gray-200"
        )}
      >
        {user?.image ? (
          // <Image
          //   layout="responsive"
          //   width={300}
          //   height={300}
          //   src={user?.image || "/images/placeholder.jpg"}
          //   alt="Avatar"
          //   sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 60vw"
          // />

          <Image
            objectFit="contain"
            objectPosition="center"
            width={300}
            height={300}
            src={user?.image || "/images/placeholder.jpg"}
            alt="Avatar"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 60vw"
          />
        ) : (
          <div className=" font-bold text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  border-solid">
            {initials}
          </div>
        )}
        {/* .avatar-initials {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
} */}

        {/* <Image
          fill
          src={user?.image || "/images/placeholder.jpg"}
          alt="Avatar"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 60vw"
        /> */}
      </div>
      {isActive ? (
        <span
          className="
            absolute 
            block 
            rounded-full 
            bg-green-500 
            ring-2 
            ring-white 
            top-0 
            right-0
            h-2 
            w-2 
            md:h-3 
            md:w-3
          "
        />
      ) : null}
    </div>
  );
};

export default Avatar;
