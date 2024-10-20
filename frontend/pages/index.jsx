import React from "react";
import { useEffect } from "react";
import { HeroSection } from "../sections/hero";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function Home() {
    const { userInfo } = useSelector((state) => state.auth);
    const router = useRouter();
    useEffect(() => {
        if (userInfo) {
            router.push("/dashboard");
        }
    }, [router, userInfo]);
    return <HeroSection />;
}
