"use client";
import React from "react";
import Image from "next/image";

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="flex h-64 w-full items-center justify-center">
        <span className="text-xl font-semibold text-black">Collaborative Editing</span>
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="flex h-64 w-full items-center justify-center">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-64 w-full items-center justify-center">
        <span className="text-xl font-semibold text-black">Version Control</span>
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-64 w-full items-center justify-center">
        <span className="text-xl font-semibold text-black">Running out of content</span>
      </div>
    ),
  },
];

export default function Mobilescroll() {
  return (
    <div className="w-full py-4 space-y-8 bg-white text-black">
      {content.map((item, index) => (
        <div key={index} className="flex flex-col items-center text-center px-4">
          {/* Image / Content Block */}
          <div className="w-full mb-4">{item.content}</div>

          {/* Title */}
          <h2 className="text-2xl font-bold mb-2">{item.title}</h2>

          {/* Description */}
          <p className="text-gray-800 max-w-xl">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
``
