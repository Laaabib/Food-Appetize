import { groceryCategories } from '@/lib/menuData';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MenuCard from '@/components/MenuCard';

export function generateStaticParams() {
  return groceryCategories.map((cat) => ({
    slug: cat.slug,
  }));
}

export default async function GroceryCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const category = groceryCategories.find(c => c.slug === resolvedParams.slug);

  if (!category) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-charcoal">
      <Header />
      <div className="pt-[140px] pb-24 px-6 lg:px-14 max-w-7xl mx-auto min-h-[70vh]">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-warm-white capitalize">{category.name}</h1>
          <p className="text-warm-white/60 mt-4 max-w-2xl text-lg">
            Shop premium {category.name.toLowerCase()} delivered to your door.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.items.map(item => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
