-- Run this in Supabase SQL Editor to set up the database

-- Profiles table (extends auth.users)
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text not null,
  full_name text not null,
  role text not null check (role in ('student', 'teacher')),
  group_name text,
  created_at timestamptz default now()
);

-- Attempts table (stores exercise results)
create table public.attempts (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles on delete cascade not null,
  exercise_id text not null,
  module text not null,
  score integer not null default 0,
  max_score integer not null,
  answers jsonb,
  transcript text,
  feedback text,
  submitted_at timestamptz default now()
);

-- Row Level Security
alter table public.profiles enable row level security;
alter table public.attempts enable row level security;

-- Profiles: users can read their own, teachers can read all
create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Teachers can view all profiles"
  on public.profiles for select
  using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'teacher')
  );

create policy "Users can insert own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

-- Attempts: students manage their own, teachers read all
create policy "Students manage own attempts"
  on public.attempts for all
  using (auth.uid() = user_id);

create policy "Teachers read all attempts"
  on public.attempts for select
  using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'teacher')
  );
