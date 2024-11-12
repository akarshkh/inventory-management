"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/state";
import { Bell, Menu, Moon, Settings, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  };

  return (
    <div className="flex justify-between items-center w-full mb-7">
      {/* LEFT SIDE */}
      <div className="flex justify-between items-center gap-5">
        <button
          className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4" />
        </button>

        <div className="relative">
          <input
            type="search"
            placeholder="Start type to search groups & products"
            className="pl-10 pr-4 py-2 w-50 md:w-60 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500"
          />

          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-non">
            <Bell className="text-gray-500" size={20} />
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex justify-between items-center gap-5">
        <div className="hidden md:flex justify-between items-center gap-5">
          <div>
            <button onClick={toggleDarkMode}>
              {isDarkMode ? (
                <Sun className="cursor-pointer text-gray-500" size={24} />
              ) : (
                <Moon className="cursor-pointer text-gray-500" size={24} />
              )}
            </button>
          </div>
          <div className="relative">
            <Bell className="cursor-pointer text-gray-500" size={24} />
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full">
              3
            </span>
          </div>
          <hr className="w-0 h-7 border border-solid border-l border-gray-300 mx-3" />
          <div className="flex items-center gap-3 cursor-pointer">
            <Image
              src="data:image/jpeg;base64,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"
              alt="Profile"
              width={50}
              height={50}
              className="rounded-full h-full object-cover"
            />
            <span className="font-semibold">JOVAC</span>
          </div>
        </div>
        <Link href="/settings">
          <Settings className="cursor-pointer text-gray-500" size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
