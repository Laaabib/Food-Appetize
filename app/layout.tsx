import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/components/CartProvider';
import { WishlistProvider } from '@/components/WishlistProvider';
import CartSidebar from '@/components/CartSidebar';
import WishlistSidebar from '@/components/WishlistSidebar';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'FoodAppetize - Premium Food Delivery',
  description: 'Delicious meals from FoodAppetize delivered to your doorstep. Premium international and Bangladeshi cuisine.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-charcoal text-warm-white selection:bg-orange selection:text-white" suppressHydrationWarning>
        <WishlistProvider>
          <CartProvider>
            {children}
            <CartSidebar />
            <WishlistSidebar />
          </CartProvider>
        </WishlistProvider>
      </body>
    </html>
  );
}
