-- ==========================================
-- SUPABASE FULL WEBSITE SEED SCRIPT
-- ==========================================
-- This script will reset your tables and insert 
-- ALL the placeholder data from the website so 
-- everything is managed entirely from Supabase!

-- 1. Clear existing tables (to prevent duplicates)
DROP TABLE IF EXISTS public.items CASCADE;
DROP TABLE IF EXISTS public.categories CASCADE;
DROP TABLE IF EXISTS public.coupons CASCADE;

-- 2. Create Categories Table
CREATE TABLE public.categories (
    id uuid default gen_random_uuid() primary key,
    name text not null,
    type text,
    icon text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Create Items Table (For Daily Deals & Offers)
CREATE TABLE public.items (
    id uuid default gen_random_uuid() primary key,
    category_id uuid references public.categories(id),
    section text not null, -- e.g., 'Daily Deals' or 'Current Offers'
    name text not null,
    description text,
    price numeric not null,
    original_price numeric,
    rating numeric default 5.0,
    img_url text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 4. Create Coupons Table
CREATE TABLE public.coupons (
    id uuid default gen_random_uuid() primary key,
    code text not null unique,
    name text not null,
    description text,
    discount_amount numeric,
    valid_until timestamp with time zone,
    img_url text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 5. Enable Row Level Security (RLS) policies for external reading
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.coupons ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access on categories" ON public.categories FOR SELECT USING (true);
CREATE POLICY "Allow public read access on items" ON public.items FOR SELECT USING (true);
CREATE POLICY "Allow public read access on coupons" ON public.coupons FOR SELECT USING (true);


-- ==========================================
-- INSERTING ALL PLUG-AND-PLAY DATA
-- ==========================================

-- Insert Categories
INSERT INTO public.categories (name, type, icon) VALUES
('Burgers', 'International', '🍔'),
('Pizza', 'International', '🍕'),
('Pasta', 'International', '🍝'),
('Kacchi Biryani', 'Bangladeshi', '🍛'),
('Beef Tehari', 'Bangladeshi', '🥘'),
('Fuchka', 'Bangladeshi', '🧆'),
('Desserts', 'International', '🍰'),
('Coffee', 'International', '☕'),
('Sandwich', 'International', '🥪'),
('Ice Cream', 'International', '🍦'),
('Sushi', 'International', '🍣'),
('Noodles', 'International', '🍜'),
('Breakfast', 'International', '🍳'),
('Fries', 'International', '🍟');

-- Insert Items (Daily Deals)
INSERT INTO public.items (section, name, description, price, original_price, rating, img_url) VALUES
('Daily Deals', 'Kacchi Biryani', 'Authentic dhaka style kacchi with tender mutton', 450, 550, 4.9, 'https://picsum.photos/seed/biryani1/400/400'),
('Daily Deals', 'Chicken Burger', 'Crispy fried chicken with special sauce & cheese', 280, NULL, 4.7, 'https://picsum.photos/seed/burger1/400/400'),
('Daily Deals', 'Fuchka Combo', 'Crispy shells with spicy tamarind water & egg', 150, 200, 4.9, 'https://picsum.photos/seed/fuchka1/400/400'),
('Daily Deals', 'Chocolate Cake', 'Rich dark chocolate moist layers', 220, NULL, 4.8, 'https://picsum.photos/seed/cake1/400/400');

-- Insert Items (Current Offers)
INSERT INTO public.items (section, name, description, price, original_price, rating, img_url) VALUES
('Current Offers', 'Family Biryani Pack', 'Serves 4 - Premium Mutton Kacchi with Borhani', 1500, 1900, 5.0, 'https://picsum.photos/seed/biryani2/400/400'),
('Current Offers', 'Burger Duo', 'Two classic cheeseburgers with large fries', 650, 850, 4.8, 'https://picsum.photos/seed/burger2/400/400'),
('Current Offers', 'Dessert Box', 'Assortment of cakes and pastries', 500, 650, 4.9, 'https://picsum.photos/seed/cake2/400/400'),
('Current Offers', 'Party Pizza Combo', '2 Large pizzas and 2 liter soft drink', 1100, 1400, 4.7, 'https://picsum.photos/seed/pizza2/400/400');

-- Insert Coupons
INSERT INTO public.coupons (name, code, description, img_url) VALUES
('FLAT 50% OFF', 'FIFTYOFF', 'Use CODE: FIFTYOFF (Max discount ৳250, Valid till Nov 30)', 'https://picsum.photos/seed/coupon1/400/400'),
('Free Delivery', 'FREEDEL', 'Use CODE: FREEDEL (On orders above ৳1000)', 'https://picsum.photos/seed/coupon2/400/400'),
('BOGO Burger', 'BOGOBURGER', 'Use CODE: BOGOBURGER (Buy 1 get 1 free on selected items)', 'https://picsum.photos/seed/coupon3/400/400'),
('New User 20%', 'WELCOME20', 'Use CODE: WELCOME20 (First time users only)', 'https://picsum.photos/seed/coupon4/400/400');
