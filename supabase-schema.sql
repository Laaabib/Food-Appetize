-- Copy and paste this entirely into your Supabase SQL Editor to set up your tables!

-- 0. Clear existing tables to prevent "already exists" errors when rerunning
DROP TABLE IF EXISTS public.items CASCADE;
DROP TABLE IF EXISTS public.categories CASCADE;
DROP TABLE IF EXISTS public.coupons CASCADE;

-- 1. Create a Categories Table
CREATE TABLE public.categories (
    id uuid default gen_random_uuid() primary key,
    name text not null,
    type text,
    icon text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Create an Items (Dishes) Table
CREATE TABLE public.items (
    id uuid default gen_random_uuid() primary key,
    category_id uuid references public.categories(id),
    name text not null,
    description text,
    price numeric not null,
    original_price numeric,
    rating numeric default 5.0,
    img_url text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Create a Coupons Table
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

-- 4. Enable Read Access for everyone (RLS Policies)
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.coupons ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access on categories" ON public.categories FOR SELECT USING (true);
CREATE POLICY "Allow public read access on items" ON public.items FOR SELECT USING (true);
CREATE POLICY "Allow public read access on coupons" ON public.coupons FOR SELECT USING (true);

-- Done! Now you can use the "Table Editor" on the left menu of Supabase to insert your own manual rows!
