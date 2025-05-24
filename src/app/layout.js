import './globals.css';
import '../components/ui/door.css';
import { Inter } from 'next/font/google';
import DoorWrapper from '@/components/ui/DoorWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Purrgatory NFT',
  description: 'Explore the afterlife with stylish cats.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: 'no'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DoorWrapper>{children}</DoorWrapper>
      </body>
    </html>
  );
}