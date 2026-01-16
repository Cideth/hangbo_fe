import Link from "next/link";
import { Bell, Music } from "lucide-react";
import ArtistSearch from "@/components/Search/ArtistSearch";
import Features from "@/components/Home/Features";

export default function Hero() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Bell className="w-4 h-4" />
            <span>놓치지 마세요!</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            좋아하는 아티스트의
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              콘서트 알림
            </span>
            을 받아보세요
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            한국에서 열리는 콘서트 정보를 실시간으로 받아보고,
            <br className="hidden md:block" />
            티켓 오픈을 절대 놓치지 마세요.
          </p>

          <ArtistSearch />

          <div className="mt-12">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all"
            >
              <Music className="w-5 h-5" />내 아티스트 관리하기
            </Link>
          </div>
          <Features />
        </div>
      </div>
    </main>
  );
}
