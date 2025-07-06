"use client";

import React from "react";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>
      <div className="flex justify-center items-center min-h-screen p-6 relative z-10">
        <SignIn
          path="/sign-in"
          routing="path"
          localization={{
            translations: {
              en: {
                sign_in: {
                  headerTitle: "Sign in to NextGadget",
                  headerSubtitle: "Welcome back! Please sign in to continue.",
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}
