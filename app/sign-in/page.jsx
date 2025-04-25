"use client";

import React from "react";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <SignIn
        path="/sign-in"
        routing="path"
        localization={{
          translations: {
            en: {
              sign_in: {
                headerTitle: "Sign in to NextGadget",
                headerSubtitle: "Welcome back! Please sign in to continue."
              }
            }
          }
        }}
      />
    </div>
  );
}
