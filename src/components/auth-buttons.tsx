"use client";

import { SignInButton, SignUpButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export function AuthButtons() {
  return (
    <>
      <SignInButton mode="modal">
        <Button
          type="button"
          size="sm"
          className="bg-blue-600 text-white hover:bg-blue-500"
        >
          Sign in
        </Button>
      </SignInButton>
      <SignUpButton mode="modal">
        <Button type="button" size="sm">
          Sign up
        </Button>
      </SignUpButton>
    </>
  );
}
