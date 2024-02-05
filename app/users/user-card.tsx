"use client";

import type { Database } from "@/lib/schema";
import UserDetailsDialogue from "./user-details-dialogue";
type User = Database["public"]["Tables"]["profiles"]["Row"];

export default function UserCard({ user }: { user: User }) {
  return (
    <div className="m-4 w-72 min-w-72 flex-none rounded border-2 p-3 shadow">
      <h3 className="mt-3 text-2xl font-semibold">{user.display_name}</h3>
      <h4 className="text-lg font-light italic">{user.email.slice(0, 27).trim() + "..."}</h4>
      <p>{user.biography ? user.biography.slice(0, 150).trim() + "..." : ""}</p>
      <UserDetailsDialogue user={user} />
    </div>
  );
}
