"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/utils/auth";
import Swal from "sweetalert2";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebase.config";

const SignUpPage = () => {
  const router = useRouter();
  function handleSubmit(e: any) {
    e.preventDefault();
    const form: any = new FormData(e.currentTarget);
    const name: any = form.get("name");
    const password: any = form.get("password");
    const email: any = form.get("email");
    const number: any = form.get("number");

    const signupInfo = {
      Name: name,
      Email: email,
      Password: password,
      Number: number,
    };
    console.log(signupInfo);
    // setLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const creationTime: any = userCredential.user.metadata.creationTime;
        const user: any = {
          name: name,
          email: email,
          password: password,
          number: number,
          creationTime: creationTime,
        };
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });
        router.push("/login");
      })
      .catch((error) => {
        console.log(error);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "error",
          title: "An error occured!",
        });
      });

    const token = registerUser(number, password, name, email);
    if (token) {
      // Redirect to dashboard or home
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Signed in successfully",
      });
      e.target.reset();
      router.push("/");
    } else {
      // Show error
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "error",
        title: "An error occured!",
      });
      console.log("an error occured");
    }
  }
  return (
    <div className="container py-14 lg:py-20">
      <div className="grid grid-cols-12 items-center gap-y-5">
        <div className="col-span-12 lg:col-span-6 relative">
          {/* <div className="absolute inset-0 bg-[#D9D9D9] filter blur"></div> */}
          {/* Registration Form */}
          <div className="bg-[#D9D9D9] rounded-xl px-2 md:px-6 py-8 border backdrop-blur">
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="p-3 bg-transparent border border-gray-500 rounded-[.5rem] outline-none peer w-full placeholder-transparent focus:border-primary"
                  placeholder="name"
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute left-3 -top-3 cursor-text  bg-secondary-color px-1 text-base lg:peer-focus:text-base md:peer-focus:text-base peer-focus:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:translate-y-6 peer-placeholder-shown:font-medium peer-placeholder-shown:bg-[#D9D9D9] peer-focus:bg-[#D9D9D9]  peer-focus:-translate-y-0  transition-all duration-200"
                >
                  Name
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="p-3 bg-transparent border border-gray-500 rounded-[.5rem] outline-none peer w-full placeholder-transparent focus:border-primary"
                  placeholder="email"
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 -top-3 cursor-text  bg-secondary-color px-1 text-base lg:peer-focus:text-base md:peer-focus:text-base peer-focus:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:translate-y-6 peer-placeholder-shown:font-medium peer-placeholder-shown:bg-[#D9D9D9] peer-focus:bg-[#D9D9D9]  peer-focus:-translate-y-0  transition-all duration-200"
                >
                  Email
                </label>
              </div>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="p-3 bg-transparent border border-gray-500 rounded-[.5rem] outline-none peer w-full placeholder-transparent focus:border-primary"
                  placeholder="password"
                  required
                />
                <label
                  htmlFor="password"
                  className="absolute left-3 -top-3 cursor-text bg-secondary-color px-1 text-base lg:peer-focus:text-base md:peer-focus:text-base peer-focus:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:translate-y-6 peer-placeholder-shown:font-medium peer-placeholder-shown:bg-[#D9D9D9] peer-focus:bg-[#D9D9D9]  peer-focus:-translate-y-0 transition-all duration-200"
                >
                  Password
                </label>
              </div>
              <div className="relative">
                <input
                  type="number"
                  name="number"
                  id="number"
                  className="p-3 bg-transparent border border-gray-500 rounded-[.5rem] outline-none peer w-full placeholder-transparent focus:border-primary"
                  placeholder="number"
                  required
                />
                <label
                  htmlFor="number"
                  className="absolute left-3 -top-3 cursor-text bg-secondary-color px-1 text-base lg:peer-focus:text-base md:peer-focus:text-base peer-focus:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:translate-y-6 peer-placeholder-shown:font-medium peer-placeholder-shown:bg-[#D9D9D9] peer-focus:bg-[#D9D9D9]  peer-focus:-translate-y-0 transition-all duration-200"
                >
                  Contact Number
                </label>
              </div>
              <Button className="w-full">
                {/* {loading ? "Claiming..." : "Claim your spot now!"} */}
                Signup
              </Button>
            </form>
            <div className="mt-9 flex flex-col items-center relative">
              <span className="w-full border border-gray-500"></span>
              <span className="bg-[#D9D9D9] absolute -translate-y-3 px-2">
                Already have an account?
              </span>
              <Button className="mt-6">
                <Link href="/login">Login</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 relative">
          <h1 className="lg:text-6xl md:text-4xl text-3xl font-semibold lg:m-5 md:m-3 m-2">
            e-Commerce Admin
          </h1>
          <p className="lg:m-5 md:m-3 m-2">
            Create your admin account today to start managing your orders
            easily.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
