
import { Button } from "@/components/ui/button";
import {
    Dialog, DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Icons } from "@/components/icons";

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { createBrowserSupabaseClient } from "@/lib/client-utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { MouseEvent, useState, type BaseSyntheticEvent } from "react";

import type { Database } from "@/lib/schema";
import { userInfo } from "os";

type User = Database["public"]["Tables"]["profiles"]["Row"];

export default function UserDetailsDialogue({ user, currentUser }: { user: User; currentUser: String }) {
  const router = useRouter(); // Want next/navigation not next/router

  return(
      <Dialog>
          <DialogTrigger asChild>
              <Button className="mt-3 w-full">More Info</Button>
          </DialogTrigger>
          <DialogContent className="max-h-screen overflow-y-auto sm:max-w-[600px]">
              <DialogHeader>
              <DialogTitle><h3 className="mt-3 text-2xl font-semibold">User: {user.display_name}</h3></DialogTitle>
              <DialogDescription>
                  <h4 className="text-lg font-light">Email: {user.email}</h4>
                  <p>Biography: {user.biography ? user.biography: ""}</p>
              </DialogDescription>
              </DialogHeader>
          </DialogContent>
      </Dialog>
  );
}
