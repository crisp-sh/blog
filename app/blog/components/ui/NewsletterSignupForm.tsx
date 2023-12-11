"use client";

import { FormEventHandler, useCallback, useState } from "react";
import useSWR from "swr";

import Halo from "@/components/ui/Halo";
import FlipNumber from "@/components/FlipNumber";
import fetcher from "@/lib/fetcher";

export default function NewsletterSignupForm() {
  const { data: subscribersData, error } = useSWR(
    `/api/convertkit/subscribers`,
    fetcher,
  );
  const name = "email";
  const [success, setSuccess] = useState<boolean | undefined>();

  const onSubmit: FormEventHandler = useCallback(async (event) => {
    event.preventDefault();

    const target = event.target as HTMLFormElement;
    const data = new FormData(target);
    const email = data.get(name);

    const body = JSON.stringify({
      email,
    });

    const headers = new Headers({
      "Content-Type": "application/json; charset=utf-8",
    });

    try {
      const response = await fetch(`/api/convertkit/subscribe`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers,
        body,
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
      } else {
        setSuccess(false);
      }
    } catch {
      setSuccess(false);
    }
  }, []);

  if (success === false) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 border border-primary bg-tertiary p-8 text-center">
        <p>Erm, something went wrong...</p>
        <p className="max-w-lg text-secondary">
          Please try again later!
        </p>
      </div>
    );
  }

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 border border-primary bg-tertiary p-8 text-center">
        <p className="font-medium text-primary">You&apos;re in!</p>
        <p className="max-w-lg text-secondary">
          Thank you for subscribing to my newsletter! Good reads coming
          your way. Be on the lookout for the confirmation email.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 border border-primary bg-tertiary p-6 text-center lg:p-8">
      <p className="font-medium text-primary">Subscribe to my newsletter</p>
      <p className="max-w-md text-secondary">
        Monthly readings on technology, politics,
        design, productivity, programming, and more.
      </p>
      <form
        className="mt-2 flex  w-full max-w-md flex-col items-center gap-2 md:flex-row"
        onSubmit={onSubmit}
      >
        <div className="w-full">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            name={name}
            id="email"
            className="block w-full px-4 py-1.5 text-primary border border-primary placeholder:text-tertiary focus:ring-inset focus:ring-indigo-600 bg-primary"
            placeholder="you@example.com"
          />
        </div>
        <button className="w-full whitespace-nowrap bg-secondary border border-primary px-4 py-1.5 hover:bg-tertiary focus:ring-inset focus:ring-indigo-600 focus-visible:outline focus-visible:outline-2 md:w-fit">
          {"Sign up"}
        </button>
      </form>
      <p className="text-sm text-tertiary">
        Join the <FlipNumber>{subscribersData?.subscribers}</FlipNumber> other
        readers.
      </p>
    </div>
  );
}
