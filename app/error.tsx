"use client"; // Error components must be Client Components

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [thisError, setThisError] = useState<any>(null);
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
    setThisError(error);
  }, [error]);

  console.log(thisError);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-5">
      <h2>Something went wrong!</h2>
      {/* <p>{thisError}</p> */}
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  );
}
