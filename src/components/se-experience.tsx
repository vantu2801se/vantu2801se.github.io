"use client";
import React, { useState } from "react";
import useTranslate from "@/hooks/useTranslate";

import img1 from "../assets/image/example/example_1.jpeg";
import img2 from "../assets/image/example/example_2.jpeg";
import img3 from "../assets/image/example/example_3.jpeg";
import img4 from "../assets/image/example/example_4.jpeg";

export default function SoftwareExperience() {
  const { t } = useTranslate();
  const [showAll, setShowAll] = useState(false);

  const images = [img1, img2, img3, img4];

  const experiences = [
    {
      timeline: t("experience_timeline_1"),
      domain: t("experience_domain_1"),
      details: [
        t("experience_timeline_1_do_1"),
        t("experience_timeline_1_do_2"),
        t("experience_timeline_1_do_3"), // ← giữ nguyên text
        t("experience_timeline_1_do_4"),
      ],
    },
    {
      timeline: t("experience_timeline_2"),
      domain: t("experience_domain_2"),
      details: [
        t("experience_timeline_2_do_1"),
        t("experience_timeline_2_do_2"),
        t("experience_timeline_2_do_3"),
        t("experience_timeline_2_do_4"),
        t("experience_timeline_2_do_5"),
        t("experience_timeline_2_do_6"),
      ],
    },
    {
      timeline: t("experience_timeline_3"),
      domain: t("experience_domain_3"),
      details: [
        t("experience_timeline_3_do_1"),
        t("experience_timeline_3_do_2"),
      ],
    },
  ];

  return (
    <div className="flex flex-col select-text gap-4 max-w-[800px]">
      <h3 className="text-xl font-bold">{t("experience_title")}</h3>

      {experiences.map((exp, expIndex) => (
        <div key={expIndex} className="flex flex-col gap-1">
          <h4 className="text-lg font-bold">{exp.timeline}</h4>
          <p className="text-base italic">{exp.domain}</p>

        <ul className="list-disc pl-6 sm:pl-8 md:pl-10 break-words">
        {exp.details.map((item, detailIndex) => (
            <React.Fragment key={detailIndex}>
            {/* Item text vẫn là li bình thường */}
            <li className="text-lg">{item}</li>

            {/* Gallery hiển thị NGAY SAU item thứ 3 */}
            {expIndex === 0 && detailIndex === 2 && (
                <li className="list-none pl-0 mt-2">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors w-fit"
                >
                    {showAll ? "Thu gọn ảnh" : "Hiển thị tất cả ảnh"}
                </button>

                {showAll && (
                    <div className="grid grid-cols-2 gap-2 mt-2">
                    {images.map((img, i) => (
                        <img
                        key={i}
                        src={img.src}
                        alt={`image-${i}`}
                        className="rounded"
                        />
                    ))}
                    </div>
                )}
                </li>
            )}
            </React.Fragment>
        ))}
        </ul>

        </div>
      ))}
    </div>
  );
}
