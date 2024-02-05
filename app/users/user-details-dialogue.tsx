
import { Button } from "@/components/ui/button";
import {
    Dialog, DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";

import type { Database } from "@/lib/schema";

type User = Database["public"]["Tables"]["profiles"]["Row"];

export default function UserDetailsDialogue({ user }: { user: User }) {

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
