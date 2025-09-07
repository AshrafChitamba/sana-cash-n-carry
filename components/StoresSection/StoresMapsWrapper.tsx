"use client";

import dynamic from "next/dynamic";

const StoresMaps = dynamic(() => import("./StoresMaps"), { ssr: false });

export const StoresMapsWrapper = () => <StoresMaps />;
