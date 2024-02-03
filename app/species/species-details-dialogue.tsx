
import { Button } from "@/components/ui/button";
import { numberWithCommas } from "./formatting";
import {
    Dialog, DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";

import type { Database } from "@/lib/schema";

type Species = Database["public"]["Tables"]["species"]["Row"];


export default function SpeciesDetailsDialogue({ species }: { species: Species }) {
    
    return(
        <Dialog>
            <DialogTrigger asChild>
                <Button className="mt-3 w-full">Learn More</Button>
            </DialogTrigger>
            <DialogContent className="max-h-screen overflow-y-auto sm:max-w-[600px]">
                <DialogHeader>
                <DialogTitle><h3 className="mt-3 text-2xl font-semibold">{species.scientific_name}</h3></DialogTitle>
                {species.common_name && <DialogDescription>
                    <h4 className="text-lg font-light italic">{species.common_name}</h4>
                    <h4 className="text-lg font-light">Part of Kindom {species.kingdom}</h4>
                    <h4 className="text-lg font-light">Total Population: {species.total_population ? numberWithCommas(species.total_population): "Unknown"}</h4>
                    <p>{species.description ? species.description: ""}</p>
                </DialogDescription>}
                </DialogHeader>
                {/* TODO: add content here  */}
            </DialogContent>
        </Dialog>
    );
}
