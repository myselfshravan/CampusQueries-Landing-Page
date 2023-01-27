import Head from "next/head";
import Link from "next/link";
import * as React from "react";
import { useEffect } from "react";

import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  CreateGuesser,
} from "react-admin";
import {
  FirebaseDataProvider,
  FirebaseAuthProvider,
  RAFirebaseOptions,
} from "react-admin-firebase";

import { AuthLayout } from "@/components/AuthLayout";
import { Button } from "@/components/Button";
import { TextField } from "@/components/Fields";
import { Logo } from "@/components/Logo";
const config = {
  apiKey: "AIzaSyB-yzOdcTr83J_AXFSwUF22dvFdBW3Ubpk",
  authDomain: "neo-bank-ae818.firebaseapp.com",
  projectId: "neo-bank-ae818",
  storageBucket: "neo-bank-ae818.appspot.com",
  messagingSenderId: "248597643386",
  appId: "1:248597643386:web:dbb0782c0b7d1d82cbfbc3",
};
const options = {};

const dataProvider = FirebaseDataProvider(config, options);
// const authProvider = FirebaseAuthProvider(config);
export default function Found() {
  if (typeof window !== "undefined") {
    // Perform localStorage action
    const item = localStorage.getItem("key");
  }
  useEffect(() => {
    const item = localStorage.getItem("key");
  }, []);
  return (
    <>
      <Head>
        <title>Sign In - TaxPal</title>
      </Head>
      {/* <Admin dataProvider={dataProvider}>
        <Resource
          name="itemfound"
          list={ListGuesser}
          edit={EditGuesser}
          create={CreateGuesser}
        />
      </Admin> */}
      <AuthLayout>
        <div className="flex flex-col">
          <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link>
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              Don’t have an account?{" "}
              <Link
                href="/register"
                className="font-medium text-blue-600 hover:underline"
              >
                Sign up
              </Link>{" "}
              for a free trial.
            </p>
          </div>
        </div>
        <form action="#" className="mt-10 grid grid-cols-1 gap-y-8">
          <TextField
            label="Email address"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          <TextField
            label="Password"
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />
          <div>
            <Button
              type="submit"
              variant="solid"
              color="blue"
              className="w-full"
            >
              <span>
                Sign in <span aria-hidden="true">&rarr;</span>
              </span>
            </Button>
          </div>
        </form>
      </AuthLayout>
    </>
  );
}
