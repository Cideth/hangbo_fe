"use client";

import { useState } from "react";
import Nav from "@/components/Home/Nav";
import Footer from "@/components/Home/Footer";

import { Bell, Trash2, AlertTriangle, X } from "lucide-react";

export default function Settings() {
  const [pushEnabled, setPushEnabled] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteConfirmText, setDeleteConfirmText] = useState("");

  const handleDeleteAccount = () => {
    if (deleteConfirmText === "삭제") {
      // 실제로는 여기서 계정 삭제 API를 호출
      alert("계정이 삭제되었습니다.");
      setShowDeleteModal(false);
    } else {
      alert("'삭제'를 정확히 입력해주세요.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <Nav />

      <div className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            설정
          </h1>
          <p className="text-gray-600 text-lg">
            알림 및 계정 설정을 관리하세요
          </p>
        </div>

        {/* Settings Sections */}
        <div className="space-y-6">
          {/* Push Notification Settings */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Bell className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    푸시 알림
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">
                    좋아하는 아티스트의 새로운 공연 소식을 실시간으로 받아보세요
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2">
                      <span className="text-gray-700">공연 알림</span>
                      <button
                        onClick={() => setPushEnabled(!pushEnabled)}
                        className={`relative w-14 h-7 rounded-full transition-colors ${
                          pushEnabled ? "bg-purple-600" : "bg-gray-300"
                        }`}
                      >
                        <div
                          className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                            pushEnabled ? "translate-x-7" : ""
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Account Deletion */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-red-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Trash2 className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  회원 탈퇴
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  계정을 삭제하면 모든 데이터가 영구적으로 삭제됩니다.
                  <br />이 작업은 되돌릴 수 없습니다.
                </p>
                <button
                  onClick={() => setShowDeleteModal(true)}
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-2.5 rounded-xl font-semibold transition-colors"
                >
                  계정 삭제하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">계정 삭제</h2>
              </div>
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setDeleteConfirmText("");
                }}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                정말로 계정을 삭제하시겠습니까?
              </p>
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
                <ul className="space-y-2 text-sm text-red-800">
                  <li>• 저장된 모든 아티스트 정보가 삭제됩니다</li>
                  <li>• 알림 설정이 모두 제거됩니다</li>
                  <li>• 이 작업은 되돌릴 수 없습니다</li>
                </ul>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                계속하시려면 아래에 <strong>삭제</strong>를 입력하세요
              </p>
              <input
                type="text"
                value={deleteConfirmText}
                onChange={(e) => setDeleteConfirmText(e.target.value)}
                placeholder="삭제"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setDeleteConfirmText("");
                }}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-xl font-semibold transition-colors"
              >
                취소
              </button>
              <button
                onClick={handleDeleteAccount}
                disabled={deleteConfirmText !== "삭제"}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                삭제하기
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
