-- =======================================================================
-- GRACE Multidisciplinary Therapy Centre & Hearing Care Database Schema
-- Supabase Postgres Migration with Row-Level Security (RLS)
-- =======================================================================

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. APPOINTMENTS TABLE
CREATE TABLE IF NOT EXISTS public.appointments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  request_number VARCHAR(30) UNIQUE NOT NULL,
  patient_name VARCHAR(150) NOT NULL,
  guardian_name VARCHAR(150),
  phone VARCHAR(30) NOT NULL,
  email VARCHAR(255) NOT NULL,
  service_requested VARCHAR(100) NOT NULL,
  preferred_date DATE NOT NULL,
  preferred_time_slot VARCHAR(50) NOT NULL,
  attendance_mode VARCHAR(30) NOT NULL DEFAULT 'in-person' CHECK (attendance_mode IN ('in-person', 'online-teletherapy')),
  message TEXT,
  status VARCHAR(30) NOT NULL DEFAULT 'Pending' CHECK (status IN ('Pending', 'Contacted', 'Confirmed', 'Completed', 'Cancelled')),
  staff_notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Index for fast queries
CREATE INDEX IF NOT EXISTS idx_appointments_status ON public.appointments (status);
CREATE INDEX IF NOT EXISTS idx_appointments_created_at ON public.appointments (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_appointments_service ON public.appointments (service_requested);

-- 2. GENERAL INQUIRIES TABLE
CREATE TABLE IF NOT EXISTS public.inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(150) NOT NULL,
  phone VARCHAR(30) NOT NULL,
  email VARCHAR(255) NOT NULL,
  service_interest VARCHAR(100),
  message TEXT NOT NULL,
  status VARCHAR(30) NOT NULL DEFAULT 'New' CHECK (status IN ('New', 'Contacted', 'Resolved')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON public.inquiries (created_at DESC);

-- =======================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- =======================================================================

-- Enable RLS
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- 1. Public Insertion: Anyone can submit an appointment request, but cannot view anyone else's data
CREATE POLICY "Public can submit appointment requests"
  ON public.appointments
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- 2. Strict Access: Public cannot read or list records directly
CREATE POLICY "Public cannot view appointment records"
  ON public.appointments
  FOR SELECT
  TO anon
  USING (false);

-- 3. Authenticated Staff: Can read, update, and manage appointment requests
CREATE POLICY "Staff can view all appointments"
  ON public.appointments
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Staff can update appointments"
  ON public.appointments
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Inquiries policies
CREATE POLICY "Public can submit contact inquiries"
  ON public.inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Public cannot view contact inquiries"
  ON public.inquiries
  FOR SELECT
  TO anon
  USING (false);

CREATE POLICY "Staff can view inquiries"
  ON public.inquiries
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Staff can update inquiries"
  ON public.inquiries
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
