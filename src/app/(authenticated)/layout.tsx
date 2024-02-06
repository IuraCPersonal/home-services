import { Particles } from "@/components/landing/ui/particles";
import { ClerkProvider, SignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import * as React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ClerkProvider>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <Particles />

        <SignIn afterSignInUrl={"/dashboard"} />
      </SignedOut>
    </ClerkProvider>
  );
};

export default RootLayout;
