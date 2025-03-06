'use client'

import React from "react";
import { useRouter } from "next/navigation";
import { NotFoundObject } from "../types/NotFoundObject";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";

interface NotFoundProps {
  objectType: NotFoundObject;
}

export default function NotFound({ objectType }: NotFoundProps) {
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">
        {capitalizeFirstLetter(objectType)} Not Found
      </h1>
      <p className="text-gray-600 mb-4">
        Sorry, the {objectType} you are looking for does not exist or has been
        removed.
      </p>
      <button
        onClick={() => router.back()}
        className="text-blue-600 hover:underline"
      >
        Go back
      </button>
    </div>
  );
}
