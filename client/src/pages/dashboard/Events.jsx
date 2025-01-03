import { Button } from "@/components/ui/button";

import { FaPlus } from "react-icons/fa";
import EventCard from "./EventCard";
import { useState } from "react";
import CreateEventDialog from "./CreateEventDialog";

const Events = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl font-semibold twxt-gray-600">Events</h2>
          <p className="text-xl text-gray-400">
            Manage Your Events and Tickets
          </p>
        </div>
        <div className="flex justify-between items-center gap-2">
        <Button
  className=" bg-blue-700 text-white hover:bg-white hover:text-blue-700 hover:border hover:border-blue-700 py-2 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
  onClick={() => setIsDialogOpen(true)}
>
  <FaPlus size={25} className="mr-3" />
  <span className="font-semibold text-lg">Create Event</span>
</Button>
          
        </div>
        
      </div>
      <div className="">
        <EventCard />
      </div>
      <CreateEventDialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
};

export default Events;
