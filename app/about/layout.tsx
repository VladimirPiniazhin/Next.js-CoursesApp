import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "About Title",
  description: "About Description",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div style={{
      backgroundColor: 'darkgreen',
      padding: '10px',
      borderRadius: '10px',
    }}>
      {children}
    </div>
  );
}
