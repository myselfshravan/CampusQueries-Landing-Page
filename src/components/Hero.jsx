import Image from "next/future/image";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import logoLaravel from "@/images/logos/laravel.svg";
import logoMirage from "@/images/logos/mirage.svg";
import logoStatamic from "@/images/logos/statamic.svg";
import logoStaticKit from "@/images/logos/statickit.svg";
import logoTransistor from "@/images/logos/transistor.svg";
import logoTuple from "@/images/logos/tuple.svg";

export function Hero() {
  return (
    <Container className="pt-4 pb-16 text-center dark:bg-gray-900 lg:pt-8">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 dark:text-white sm:text-7xl">
        Campus Queries
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700 dark:text-white/70">
        Streamlining the Lost and Found and Complaints Process on College Campus
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button className="dark:bg-white dark:text-black" href="/register">
          File a Complaint
        </Button>
        <Button
          className="dark:bg-white dark:text-black"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        >
          Lost and Found
        </Button>
      </div>
    </Container>
  );
}
