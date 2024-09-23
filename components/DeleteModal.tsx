// "use client";

// import Image from "next/image";
// import { useState } from "react";

// import { deleteDocument } from "@/lib/actions/room.actions";

// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";

// import { Button } from "./ui/button";

// export const DeleteModal = ({ roomId }: DeleteModalProps) => {
//   const [open, setOpen] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const deleteDocumentHandler = async () => {
//     setLoading(true);

//     try {
//       await deleteDocument(roomId);
//       setOpen(false);
//     } catch (error) {
//       console.log("Error notif:", error);
//     }

//     setLoading(false);
//   };

//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogTrigger asChild>
//         <Button className="min-w-9 rounded-xl bg-transparent p-2 transition-all">
//           <Image
//             src="/assets/icons/delete.svg"
//             alt="delete"
//             width={20}
//             height={20}
//             className="mt-1"
//           />
//         </Button>
//       </DialogTrigger>
//       <DialogContent className="shad-dialog">
//         <DialogHeader>
//           <Image
//             src="/assets/icons/delete-modal.svg"
//             alt="delete"
//             width={48}
//             height={48}
//             className="mb-4"
//           />
//           <DialogTitle>Delete document</DialogTitle>
//           <DialogDescription>
//             Are you sure you want to delete this document? This action cannot be
//             undone.
//           </DialogDescription>
//         </DialogHeader>

//         <DialogFooter className="mt-5">
//           <DialogClose asChild className="w-full bg-dark-400 text-white">
//             Cancel
//           </DialogClose>

//           <Button
//             variant="destructive"
//             onClick={deleteDocumentHandler}
//             className="gradient-red w-full"
//           >
//             {loading ? "Deleting..." : "Delete"}
//           </Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// };


"use client";

import Image from "next/image";
import { useState } from "react";

import { deleteDocument } from "@/lib/actions/room.actions";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "./ui/button";

import DeleteLoader from "./DeleteLoader";


export const DeleteModal = ({ roomId }: DeleteModalProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const deleteDocumentHandler = async () => {
    setLoading(true);

    try {
      await deleteDocument(roomId);
      setOpen(false);
    } catch (error) {
      console.log("Error notif:", error);
    }

    setLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
      <Button className="min-w-9 rounded-xl bg-transparent p-2 hover:bg-red-100 hover:shadow-lg transition-all duration-300 ease-in-out">
  <Image
    src="/assets/icons/delete.svg"
    alt="delete"
    width={20}
    height={20}
    className="mt-1"
  />
</Button>

      </DialogTrigger>
      <DialogContent className="shad-dialog max-w-md p-6 bg-white rounded-xl shadow-xl transition-transform transform-gpu duration-300 ease-in-out">
  <DialogHeader className="text-center">
    <Image
      src="/assets/icons/delete-modal.svg"
      alt="delete"
      width={48}
      height={48}
      className="mb-4 mx-auto"
    />
    <DialogTitle className="text-2xl font-semibold text-white">Delete Document</DialogTitle>
    <DialogDescription className="text-base text-white mt-2">
      Are you sure you want to delete this document? This action cannot be undone.
    </DialogDescription>
  </DialogHeader>

  <DialogFooter className="flex space-x-4 mt-6 justify-center">
    <DialogClose
      asChild
      className="w-full bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-lg py-2 px-4 transition-all duration-200 ease-in-out"
    >
      <Button>Cancel</Button>
    </DialogClose>

    {/* <Button
      variant="destructive"
      onClick={deleteDocumentHandler}
      className={`w-full py-2 px-4 rounded-lg text-white font-medium 
        ${loading ? "bg-red-400 cursor-not-allowed" : "bg-red-500 hover:bg-red-600"} transition-all duration-200 ease-in-out`}
    >
      {loading ? "Deleting..." : "Delete"}
    </Button> */}
    <Button
  variant="destructive"
  onClick={deleteDocumentHandler}
  className={`w-full py-2 px-4 rounded-lg text-white font-medium 
    ${loading ? "bg-red-400 cursor-not-allowed" : "bg-red-500 hover:bg-red-600"} transition-all duration-200 ease-in-out`}
>
  {loading ? (
    <div className="flex items-center justify-center">
      <DeleteLoader  /> {/* Add Loader instead of Spinner */}
    </div>
  ) : (
    "Delete"
  )}
</Button>
  </DialogFooter>
</DialogContent>

    </Dialog>
  );
};


