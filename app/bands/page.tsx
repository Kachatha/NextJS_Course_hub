import CourseCard from "@/components/CourseCard";
import { Band } from "@/type/band";

const favoriteBands: Band[] = [
  {
    id: 1,
    name: "Yented",
    genre: "Neo-Soul / Pop / R&B",
    imageUrl: "/images/bands/Yented.jpg",
    members: [
      { id: 101, name: "เจา (พงษ์ธรณ์ ปะเมโท)", role: "ร้องนำ", imageUrl: "/images/members/jao.jpg" },
      { id: 102, name: "ตูน (ภานุกร มาลา)", role: "กีตาร์", imageUrl: "/images/members/toonY.jpg" },
      { id: 103, name: "กานต์ (ธนกานต์ สุวรรณนาคินทร์)", role: "กีตาร์", imageUrl: "/images/members/kran.jpg" },
      { id: 105, name: "เปรื่อง (เปรื่องวิทย์ พิไลวงศ์ )", role: "เบส", imageUrl: "/images/members/preng.jpg" },
      { id: 106, name: "บิว (วุฒิชัย เขื่อนวิชัย)", role: "กลอง", imageUrl: "/images/members/biw.jpg" },
    ],
  },
  {
    id: 2,
    name: "Three Man Down",
    genre: "Pop Rock / Synth Pop",
    imageUrl: "/images/bands/Three Man Down.jpg",
    members: [
      { id: 201, name: "กิต (กฤตย์ จีรพัฒนานุวงศ์)", role: "ร้องนำ", imageUrl: "/images/members/kit.jpg" },
      { id: 202, name: "ตูน (พีรพล เอี่ยมจำรัส)", role: "กีตาร์", imageUrl: "/images/members/toon_tmd.jpg" },
      { id: 203, name: "เต (เตธนันท์ ภีระจิรเดช)", role: "กลอง", imageUrl: "/images/members/tay.jpg" },
      { id: 204, name: "เส็ง (วิศรุต ปฐมสิริไพศาล)", role: "คีย์บอร์ด", imageUrl: "/images/members/seng.jpg" },
    ],
  },
  {
    id: 3,
    name: "Tattoo Colour",
    genre: "Pop Rock / Indie Pop",
    imageUrl: "/images/bands/Tattoo Colour.jpg",
    members: [
      { id: 301, name: "ดิม (หรินทร์ สุธรรมจารุ)", role: "ร้องนำ", imageUrl: "/images/members/dim.jpg" },
      { id: 302, name: "รัฐ (รัฐ พิธาณสมบัติ)", role: "กีตาร์/ร้องนำ", imageUrl: "/images/members/ruz.jpg" },
      { id: 303, name: "ตั้ม (เอกชัย โชติรุ่งโรจน์)", role: "กลอง", imageUrl: "/images/members/tum.jpg" },
      { id: 304, name: "จั๊ม (ธนบดี ธีรพงศ์ภักดี)", role: "เบส", imageUrl: "/images/members/jumps.jpg" },
    ],
  },
];

export default function BandsPage() {
  return (
    <main className="page">
      <h1>วงดนตรีที่ชื่นชอบ (Favorite Bands)</h1>
      <section className="courseGrid">
        {favoriteBands.map((band) => (
          <CourseCard key={band.id} band={band} />
        ))}
      </section>
    </main>
  );
}