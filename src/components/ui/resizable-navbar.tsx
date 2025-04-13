"use client";
import { cn } from "@/lib/utils";
import { IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import React, { useRef, useState } from "react";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      // Changed to fixed position
      className={cn("fixed inset-x-0 top-3 z-40 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(12px)" : "none",
        boxShadow: visible
          ? "0 4px 30px rgba(0, 0, 0, 0.15), 0 1px 1px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(34, 42, 53, 0.06), 0 0 4px rgba(34, 42, 53, 0.1)"
          : "none",
        width: visible ? "60%" : "100%",
        y: visible ? 8 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 30,
      }}
      style={{
        minWidth: visible ? "600px" : "700px",
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-bg-[#2d1a5b] px-3 py-2 lg:flex dark:bg-bg-[#2d1a5b]",
        visible && "bg-[#0a2532] shadow-xl shadow-black/20",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  return (
    <div
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-1 font-medium mr-7 text-base text-white transition duration-200 lg:flex",
        className,
      )}
    >
      {items.map((item, idx) => (
        <Link
          onClick={onItemClick}
          className="relative px-5 py-2.5 text-white hover:text-gray-200 transition-colors"
          key={`link-${idx}`}
          href={item.link}
        >
          <span className="relative z-20">{item.name}</span>
        </Link>
      ))}
    </div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(12px)" : "none",
        boxShadow: visible
          ? "0 4px 30px rgba(0, 0, 0, 0.15), 0 1px 1px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(34, 42, 53, 0.06), 0 0 4px rgba(34, 42, 53, 0.1)"
          : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "16px" : "20px",
        paddingLeft: visible ? "16px" : "20px",
        borderRadius: visible ? "16px" : "2rem",
        y: visible ? 8 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 30,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-4 py-4 lg:hidden",
        visible && "bg-[#2d1a5b] shadow-lg shadow-black/20",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between py-1",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
           "absolute inset-x-0 top-16 z-50 text-black flex w-full flex-col items-start justify-start gap-5 rounded-lg px-6 py-8 shadow-[0_4px_30px_rgba(0,0,0,0.15),_0_1px_1px_rgba(0,0,0,0.08),_0_0_0_1px_rgba(34,42,53,0.06),_0_0_4px_rgba(34,42,53,0.1)] dark:bg-neutral-950 bg-white",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <IconX className="text-black dark:text-white w-7 h-7" onClick={onClick} />
  ) : (
    <svg
      onClick={onClick}
      className="w-7 h-7 text-white dark:text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <line x1="4" y1="8" x2="20" y2="8" />
      <line x1="4" y1="16" x2="20" y2="16" />
    </svg>
  );
};

export const NavbarLogo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 mr-4 flex items-center space-x-2 px-3 py-1.5 text-lg font-semibold text-white"
    >
      {/* <Image
        src="/globe.svg"
        alt="logo"
        width={36}
        height={36}
      /> */}
      <span className="font-semibold text-white text-2xl md:text-3xl">Meresu</span>
    </Link>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const getVariant = (variant: string) => {
    switch (variant) {
      case "primary":
        return "bg-black text-white border-transparent shadow-md hover:shadow-lg";
      case "secondary":
        return "bg-white text-black border-gray-300 shadow-md hover:shadow-lg";
      case "dark":
        return "bg-neutral-800 text-white border-transparent shadow-md hover:shadow-lg";
      case "gradient":
        return "bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-transparent shadow-md hover:shadow-lg";
      default:
        return "bg-black text-white border-transparent shadow-md hover:shadow-lg";
    }
  };

  const baseClasses =
    "relative inline-flex h-11 items-center justify-center rounded-full border px-6 py-2 text-base font-semibold transition-all focus:outline-none";

  if (typeof children !== "undefined") {
    return (
      <Tag
        {...props}
        href={href}
        className={cn(
          baseClasses,
          getVariant(variant),
          className
        )}
      >
        {children}
      </Tag>
    );
  }

  return null;
};
