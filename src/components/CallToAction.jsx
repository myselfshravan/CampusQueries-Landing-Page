import Image from "next/future/image";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import backgroundImage from "@/images/background-call-to-action.jpg";

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center ">
          <h2 className="font-display text-3xl tracking-tight text-white dark:text-black sm:text-4xl">
            Lost and Found
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white dark:text-black">
            Connecting you to your lost belongings on campus
          </p>
            <Button
              href="https://campus-queries.vercel.app/#/lost"
              color="white"
              className="mt-10 dark:bg-slate-900 dark:text-white/80"
            >
              Report a lost item
            </Button>

            <Button
              className=" ml-5 mt-3 dark:text-white/80"
              href="https://campus-queries.vercel.app/#/found"
            >
              Report an item found
            </Button>
        </div>
      </Container>
    </section>
  );
}
