import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Historical Events | History Clock',
  description: 'Discover historical events that happened at different hours of the day',
};

export default function HistoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="history-layout">
      {children}
    </div>
  );
} 