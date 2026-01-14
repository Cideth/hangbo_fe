"use client";

import { useState } from "react";
import Nav from "@/components/Home/Nav";
import Footer from "@/components/Home/Footer";

import {
  Music,
  Bell,
  Calendar,
  MapPin,
  Plus,
  Settings,
  User,
  Search,
  X,
} from "lucide-react";

interface Artist {
  id: string;
  name: string;
  genre: string;
  spotifyId: string;
  followers: number;
}

interface Concert {
  id: string;
  artistId: string;
  artistName: string;
  title: string;
  venue: string;
  date: string;
  time: string;
  ticketUrl: string;
}

export default function Dashboard() {
  const [myArtists, setMyArtists] = useState<Artist[]>([
    {
      id: "1",
      name: "아이유",
      genre: "K-Pop",
      spotifyId: "3HqSLMAZ3g3d5poNaI7GOU",
      followers: 5200000,
    },
    {
      id: "2",
      name: "NewJeans",
      genre: "K-Pop",
      spotifyId: "6HvZYsbFfjnjFrWF950C9d",
      followers: 4800000,
    },
    {
      id: "3",
      name: "BTS",
      genre: "K-Pop",
      spotifyId: "3Nrfpe0tUJi4K4DXYWgMUX",
      followers: 78000000,
    },
  ]);

  const [upcomingConcerts] = useState<Concert[]>([
    {
      id: "1",
      artistId: "1",
      artistName: "아이유",
      title: "2025 IU Concert",
      venue: "고척스카이돔",
      date: "2025-03-15",
      time: "19:00",
      ticketUrl: "#",
    },
    {
      id: "2",
      artistId: "2",
      artistName: "NewJeans",
      title: "NewJeans Fan Meeting",
      venue: "올림픽공원 체조경기장",
      date: "2025-02-28",
      time: "18:00",
      ticketUrl: "#",
    },
  ]);

  const [showAddArtist, setShowAddArtist] = useState(false);

  const removeArtist = (artistId: string) => {
    if (confirm("정말 이 아티스트를 삭제하시겠습니까?")) {
      setMyArtists(myArtists.filter((artist) => artist.id !== artistId));
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <Nav />

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            안녕하세요! 👋
          </h1>
          <p className="text-gray-600 text-lg">
            {myArtists.length}명의 아티스트를 팔로우 중입니다
          </p>
        </div>

        {/* Upcoming Concerts */}
        {upcomingConcerts.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Calendar className="w-7 h-7 text-purple-600" />
                예정된 공연
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {upcomingConcerts.map((concert) => (
                <div
                  key={concert.id}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-1">
                        {concert.title}
                      </h3>
                      <p className="text-purple-600 font-semibold">
                        {concert.artistName}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {formatDate(concert.date)} {concert.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{concert.venue}</span>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                    예매하기
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* My Artists */}
        <div>
          <div className="flex items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Music className="w-7 h-7 text-purple-600" />내 아티스트
            </h2>
          </div>

          {myArtists.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                아티스트가 없습니다
              </h3>
              <p className="text-gray-600 mb-6">
                좋아하는 아티스트를 추가하고 공연 소식을 받아보세요
              </p>
              <button
                onClick={() => setShowAddArtist(true)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                <Plus className="w-5 h-5" />
                아티스트 추가하기
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {myArtists.map((artist) => (
                <div
                  key={artist.id}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 group relative"
                >
                  <button
                    onClick={() => removeArtist(artist.id)}
                    className="absolute top-3 right-3 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <h3 className="font-bold text-gray-900 text-center mb-1">
                    {artist.name}
                  </h3>
                </div>
              ))}

              {/* Add Artist Card */}
              <button
                onClick={() => setShowAddArtist(true)}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-purple-300 group flex items-center justify-center min-h-[80px]"
              >
                <Plus className="w-8 h-8 text-gray-400 group-hover:text-purple-600 transition-colors" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Add Artist Modal */}
      {showAddArtist && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                아티스트 추가
              </h2>
              <button
                onClick={() => setShowAddArtist(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="아티스트 검색..."
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              />
            </div>
            <p className="text-center text-gray-500">
              검색 기능은 준비 중입니다
            </p>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
