"use client";

import { useState } from "react";
import Image from "next/image";

export type Course = {
  id: number;
  code: string;
  title: string;
  credits: number;
  isOpen: boolean;
};

export type Member = {
  id: number;
  name: string;
  role: string;
  imageUrl?: string;
};

export type Band = {
  id: number;
  name: string;
  genre: string;
  imageUrl?: string;
  members: Member[];
};

type CourseCardProps = {
  course?: Course;
  band?: Band;
};

export default function CourseCard({ course, band }: CourseCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isFollowed, setIsFollowed] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  // ---------------------------------
  // 📚 การ์ดสำหรับ "รายวิชา (Course)"
  // ---------------------------------
  if (course) {
    return (
      <article className="glass-card course-variant">
        <div className="card-header">
          <span className="badge-code">{course.code}</span>
          <span className={`status-dot ${course.isOpen ? "open" : "closed"}`}></span>
        </div>
        
        <h2 className="course-title">{course.title}</h2>
        
        <div className="course-footer">
          <div className="credits">
            <span>🎓</span> {course.credits} หน่วยกิต
          </div>
          <div className={`status-text ${course.isOpen ? "text-open" : "text-closed"}`}>
            {course.isOpen ? "✅ เปิดลงทะเบียน" : "⛔ ปิดลงทะเบียน"}
          </div>
        </div>

        <style jsx>{`
          .glass-card {
            background: rgba(30, 41, 59, 0.6);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 20px;
            padding: 24px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 200px;
          }
          .glass-card:hover {
            transform: translateY(-8px);
            border-color: rgba(56, 189, 248, 0.5);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4), 0 0 25px rgba(56, 189, 248, 0.2);
          }
          .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
          }
          .badge-code {
            background: linear-gradient(135deg, #38bdf8, #2563eb);
            color: white;
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 700;
            letter-spacing: 0.5px;
            box-shadow: 0 4px 15px rgba(37, 99, 235, 0.4);
          }
          .status-dot {
            width: 14px;
            height: 14px;
            border-radius: 50%;
            box-shadow: 0 0 12px currentColor;
          }
          .status-dot.open { color: #4ade80; background: #4ade80; }
          .status-dot.closed { color: #f87171; background: #f87171; }
          
          .course-title {
            color: #f8fafc;
            font-size: 1.5rem;
            margin: 0 0 25px 0;
            font-weight: 600;
            line-height: 1.4;
          }
          
          .course-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            padding-top: 16px;
            font-size: 0.95rem;
          }
          .credits { color: #cbd5e1; display: flex; align-items: center; gap: 8px; font-weight: 500; }
          .text-open { color: #4ade80; font-weight: 600; }
          .text-closed { color: #f87171; font-weight: 600; }
        `}</style>
      </article>
    );
  }

  // ---------------------------------
  // 🎸 การ์ดสำหรับ "วงดนตรี (Band)"
  // ---------------------------------
  if (band) {
    return (
      <article className="glass-card band-variant">
        {band.imageUrl && (
          <div className="cover-wrapper">
            <Image src={band.imageUrl} alt={band.name} fill className="band-img" />
            <div className="cover-overlay"></div>
            <span className="genre-badge">{band.genre}</span>
          </div>
        )}
        
        <div className="band-content">
          <h2 className="band-name">{band.name}</h2>
          
          <div className="action-row">
            <button 
              onClick={() => { setIsLiked(!isLiked); setLikeCount(isLiked ? likeCount - 1 : likeCount + 1); }} 
              className={`action-btn ${isLiked ? 'liked' : ''}`}
            >
              {isLiked ? "💖 ถูกใจแล้ว" : "🤍 ถูกใจ"} {likeCount > 0 && <span className="count-badge">{likeCount}</span>}
            </button>
            <button 
              onClick={() => setIsFollowed(!isFollowed)} 
              className={`action-btn ${isFollowed ? 'followed' : ''}`}
            >
              {isFollowed ? "✅ กำลังติดตาม" : "➕ ติดตาม"}
            </button>
          </div>

          <div className="members-area">
            <h3 className="members-title">สมาชิกวง</h3>
            <ul className="members-list">
              {band.members.map((member) => (
                <li key={member.id} className="member-row">
                  {member.imageUrl ? (
                    <div className="avatar-wrapper">
                      <Image src={member.imageUrl} alt={member.name} width={45} height={45} className="avatar-img" />
                    </div>
                  ) : (
                    <div className="avatar-fallback">🎤</div>
                  )}
                  <div className="member-details">
                    <div className="member-name">{member.name}</div>
                    <div className="member-role">{member.role}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <style jsx>{`
          .glass-card {
            background: rgba(15, 23, 42, 0.7);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 24px;
            overflow: hidden;
            transition: all 0.3s ease;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          }
          .glass-card:hover {
            transform: translateY(-8px);
            border-color: rgba(139, 92, 246, 0.5);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(139, 92, 246, 0.2);
          }
          
          .cover-wrapper {
            position: relative;
            width: 100%;
            height: 240px;
            overflow: hidden;
          }
          :global(.band-img) {
            object-fit: cover;
            transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .glass-card:hover :global(.band-img) {
            transform: scale(1.08);
          }
          .cover-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, #0f172a, transparent 70%);
          }
          .genre-badge {
            position: absolute;
            top: 16px;
            right: 16px;
            background: rgba(0, 0, 0, 0.65);
            backdrop-filter: blur(10px);
            color: #f8fafc;
            padding: 6px 14px;
            border-radius: 12px;
            font-size: 0.85rem;
            font-weight: 600;
            border: 1px solid rgba(255, 255, 255, 0.15);
          }

          .band-content { padding: 0 24px 24px 24px; position: relative; z-index: 2; margin-top: -30px; }
          .band-name {
            color: #ffffff;
            font-size: 2rem;
            margin: 0 0 20px 0;
            font-weight: 800;
            text-shadow: 0 2px 10px rgba(0,0,0,0.5);
          }

          .action-row { display: flex; gap: 12px; margin-bottom: 24px; }
          .action-btn {
            flex: 1;
            padding: 12px;
            border-radius: 14px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(255, 255, 255, 0.03);
            color: #cbd5e1;
            font-family: inherit;
            font-weight: 600;
            font-size: 0.95rem;
            cursor: pointer;
            transition: all 0.2s ease;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 6px;
          }
          .action-btn:hover { background: rgba(255, 255, 255, 0.1); }
          .action-btn.liked { 
            background: rgba(239, 68, 68, 0.15); border-color: rgba(239, 68, 68, 0.3); color: #fca5a5; 
          }
          .action-btn.followed { 
            background: rgba(139, 92, 246, 0.2); border-color: rgba(139, 92, 246, 0.4); color: #ddd6fe; 
          }
          .count-badge {
            background: rgba(255,255,255,0.2);
            padding: 2px 8px;
            border-radius: 10px;
            font-size: 0.8rem;
          }

          .members-area {
            background: rgba(255, 255, 255, 0.03);
            border-radius: 18px;
            padding: 20px;
            border: 1px solid rgba(255, 255, 255, 0.03);
          }
          .members-title {
            color: #94a3b8;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            margin: 0 0 16px 0;
            font-weight: 600;
          }
          .members-list {
            list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px;
          }
          .member-row {
            display: flex; align-items: center; gap: 14px;
            padding: 8px;
            border-radius: 12px;
            transition: background 0.2s;
          }
          .member-row:hover { background: rgba(255, 255, 255, 0.05); }
          
          .avatar-wrapper {
            width: 46px; height: 46px; border-radius: 50%; overflow: hidden;
            border: 2px solid rgba(255, 255, 255, 0.15);
          }
          :global(.avatar-img) { object-fit: cover; }
          .avatar-fallback {
            width: 46px; height: 46px; border-radius: 50%; background: #334155;
            display: flex; align-items: center; justify-content: center; font-size: 1.2rem;
          }
          
          .member-details { flex: 1; }
          .member-name { color: #f8fafc; font-size: 1.05rem; font-weight: 500; }
          .member-role { color: #94a3b8; font-size: 0.85rem; margin-top: 2px; }
        `}</style>
      </article>
    );
  }

  return null;
}