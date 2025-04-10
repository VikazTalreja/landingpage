import React from "react";
import { useId } from "react";

export default function FeaturesSectionDemo() {
  return (
    <div className="py-20 lg:py-40">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto px-4">
        {grid.map((feature, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 rounded-3xl overflow-hidden"
          >
            <Grid index={index} size={20} />
            <p className="text-base font-bold text-white relative z-20">
              {feature.title}
            </p>
            <p className="text-neutral-400 mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "HIPAA and SOC2 Compliant",
    description:
      "Our applications are HIPAA and SOC2 compliant, your data is safe with us, always.",
  },
  {
    title: "Automated Social Media Posting",
    description:
      "Schedule and automate your social media posts across multiple platforms to save time and maintain a consistent online presence.",
  },
  {
    title: "Advanced Analytics",
    description:
      "Gain insights into your social media performance with detailed analytics and reporting tools to measure engagement and ROI.",
  },
  {
    title: "Content Calendar",
    description:
      "Plan and organize your social media content with an intuitive calendar view, ensuring you never miss a post.",
  },
  {
    title: "Audience Targeting",
    description:
      "Reach the right audience with advanced targeting options, including demographics, interests, and behaviors.",
  },
  {
    title: "Social Listening",
    description:
      "Monitor social media conversations and trends to stay informed about what your audience is saying and respond in real-time.",
  },
  {
    title: "Customizable Templates",
    description:
      "Create stunning social media posts with our customizable templates, designed to fit your brand's unique style and voice.",
  },
  {
    title: "Collaboration Tools",
    description:
      "Work seamlessly with your team using our collaboration tools, allowing you to assign tasks, share drafts, and provide feedback in real-time.",
  },
];

// Pre-generated patterns to ensure hydration consistency
const predefinedPatterns = [
  [[7, 2], [8, 5], [9, 3], [10, 1], [7, 6]],
  [[8, 3], [9, 4], [10, 2], [7, 1], [8, 6]],
  [[9, 5], [10, 3], [7, 4], [8, 2], [9, 1]],
  [[10, 4], [7, 5], [8, 1], [9, 2], [10, 6]],
  [[7, 3], [8, 4], [9, 6], [10, 5], [7, 2]],
  [[8, 5], [9, 1], [10, 3], [7, 6], [8, 2]],
  [[9, 4], [10, 6], [7, 3], [8, 1], [9, 5]],
  [[10, 2], [7, 4], [8, 6], [9, 3], [10, 1]],
];

export const Grid = ({
  pattern,
  size,
  index = 0,
}: {
  pattern?: number[][];
  size?: number;
  index?: number;
}) => {
  // Use predefined pattern based on index for consistent server/client rendering
  const p = pattern ?? predefinedPatterns[index % predefinedPatterns.length];
  
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: number[], index: number) => (
            <rect
              strokeWidth="0"
              key={`${index}-${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}