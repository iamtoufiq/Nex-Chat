import { getServerSession } from "next-auth";

// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";

export default async function getSession() {
  return await getServerSession(authOptions);
}
