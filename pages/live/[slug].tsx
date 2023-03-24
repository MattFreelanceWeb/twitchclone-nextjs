import Lives from "@/components/Lives/Lives";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

function LiveFrom({}: Props) {
  const router = useRouter();

  return (
    <div className="text-black pt-20 md:pt-8">
      <Lives login={router.query.slug} />
    </div>
  );
}

export default LiveFrom;
