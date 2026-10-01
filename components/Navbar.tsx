"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { path: "/", label: "หน้าแรก" },
    { path: "/courses", label: "รายวิชาทั้งหมด" },
    { path: "/bands", label: "วงดนตรีที่ชอบ" },
    { path: "/game", label: "เกม" },
    { path: "/about", label: "เกี่ยวกับเรา" },
  ];
return (
    <nav className="sidebar">
      <div className="logo">
        <h2>Student Course<span>Hub</span></h2>
      </div>
      
      <ul className="navList">
        {navItems.map((item) => {
          const isActive = pathname === item.path || (pathname === '/games' && item.path === '/game');
          return (
            <li key={item.path}>
              <Link 
                href={item.path} 
                className={`navLink ${isActive ? "active" : ""}`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <style jsx>{`
        .sidebar {
          width: 260px;
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(20px);
          border-right: 1px solid rgba(255, 255, 255, 0.05);
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          display: flex;
          flex-direction: column;
          padding: 2.5rem 1.5rem;
          z-index: 100;
        }
        .logo h2 {
          color: #ffffff;
          font-size: 2rem;
          margin: 0 0 3rem 0;
          letter-spacing: 1px;
        }
        .logo span { color: #38bdf8; }
        .navList {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .navLink {
          display: block;
          padding: 1rem 1.2rem;
          color: #94a3b8;
          text-decoration: none;
          font-size: 1.05rem;
          font-weight: 500;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .navLink:hover {
          background: rgba(56, 189, 248, 0.1);
          color: #38bdf8;
          transform: translateX(8px);
        }
        .navLink.active {
          background: #38bdf8;
          color: #0f172a;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(56, 189, 248, 0.3);
        }
        @media (max-width: 850px) {
          .sidebar {
            width: 100%;
            height: auto;
            position: relative;
            padding: 1.5rem;
          }
          .logo h2 { margin-bottom: 1.5rem; text-align: center; }
          .navList { flex-direction: row; flex-wrap: wrap; justify-content: center; }
          .navLink { padding: 0.8rem 1rem; }
          .navLink:hover { transform: translateY(-4px); }
        }
      `}</style>
    </nav>
  );
}