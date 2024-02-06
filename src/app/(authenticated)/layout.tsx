"use client";

import * as React from "react";

import { ClerkProvider, SignIn, SignedIn, SignedOut } from "@clerk/nextjs";

interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ClerkProvider>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <SignIn afterSignInUrl={"/dashboard"} afterSignUpUrl={"/onboarding"} />
      </SignedOut>
    </ClerkProvider>
  );
};

export default RootLayout;
