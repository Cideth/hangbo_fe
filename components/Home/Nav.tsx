"use client";

import Link from "next/link";
import { Music, Bell, Settings, User, LogIn } from "lucide-react";
import { useState } from "react";

interface NavProps {
  isLoggedIn?: boolean;
}

export default function Nav({ isLoggedIn = false }: NavProps) {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <Music className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">
              Concert Alert
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-2">
            {isLoggedIn ? (
              <>
                {/* Logged In Menu */}
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-700 font-medium"
                >
                  <Music className="w-5 h-5" />
                  <span className="hidden sm:inline">대시보드</span>
                </Link>

                <button
                  aria-label="알림"
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative"
                >
                  <Bell className="w-5 h-5 text-gray-600" aria-hidden="true" />
                  <span
                    aria-hidden="true"
                    className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"
                  />
                </button>

                <Link
                  href="/setting"
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Settings className="w-5 h-5 text-gray-600" />
                </Link>

                {/* User Profile Dropdown */}
                <div className="relative">
                  <button
                    aria-label="사용자 메뉴 열기"
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <User
                      className="w-5 h-5 text-gray-600"
                      aria-hidden="true"
                    />
                  </button>

                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2">
                      <Link
                        href="/profile"
                        className="block px-4 py-2 hover:bg-gray-50 transition-colors text-gray-700"
                        onClick={() => setShowUserMenu(false)}
                      >
                        프로필
                      </Link>
                      <Link
<<<<<<< HEAD
                        href="/settings"
                        aria-label="설정"
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
=======
                        href="/setting"
                        className="block px-4 py-2 hover:bg-gray-50 transition-colors text-gray-700"
                        onClick={() => setShowUserMenu(false)}
>>>>>>> f60e3965961944745b83468c48f291469f351875
                      >
                        <Settings
                          className="w-5 h-5 text-gray-600"
                          aria-hidden="true"
                        />
                      </Link>
                      <hr className="my-2 border-gray-200" />
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors text-red-600"
                        onClick={() => {
                          setShowUserMenu(false);
                          // 로그아웃 로직
                        }}
                      >
                        로그아웃
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                {/* Not Logged In Menu */}
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-700 font-medium"
                >
                  <Music className="w-5 h-5" />
                  <span className="hidden sm:inline">대시보드</span>
                </Link>

                <Link
                  href="/setting"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-700 font-medium"
                >
                  <Settings className="w-5 h-5" />
                  <span className="hidden sm:inline">설정</span>
                </Link>

                <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all">
                  <LogIn className="w-5 h-5" />
                  <span className="hidden sm:inline">로그인</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
