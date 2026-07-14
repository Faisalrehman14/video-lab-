import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "outlineDark" | "ghost" | "phone";
  className?: string;
};

const styles: Record<NonNullable<Props["variant"]>, string> = {
  primary: "btn-primary",
  outline: "btn-outline",
  outlineDark: "btn-outline-dark",
  ghost: "btn-ghost",
  phone: "btn-phone",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: Props) {
  return (
    <Link href={href} className={`${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
