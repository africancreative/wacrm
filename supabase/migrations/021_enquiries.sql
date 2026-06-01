-- ============================================================
-- 021_enquiries.sql — Contact/enquiry form submissions
--
-- Stores visitor enquiries from the /contact page. Admins review
-- these and initiate accounts manually.
-- ============================================================

CREATE TABLE IF NOT EXISTS enquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL DEFAULT '',
  phone TEXT NOT NULL DEFAULT '',
  message TEXT NOT NULL DEFAULT '',
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'read', 'contacted', 'converted', 'archived')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

-- Only authenticated users (admins) can view enquiries
DROP POLICY IF EXISTS "Admins can view enquiries" ON enquiries;
DROP POLICY IF EXISTS "Anyone can insert enquiries" ON enquiries;

CREATE POLICY "Admins can view enquiries" ON enquiries
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles p
      WHERE p.user_id = auth.uid()
        AND p.email = 'amisi@amisigenuine.com'
    )
  );

CREATE POLICY "Admins can update enquiries" ON enquiries
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM profiles p
      WHERE p.user_id = auth.uid()
        AND p.email = 'amisi@amisigenuine.com'
    )
  );

CREATE POLICY "Anyone can insert enquiries" ON enquiries
  FOR INSERT
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_enquiries_status ON enquiries(status);
CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON enquiries(created_at DESC);

DROP TRIGGER IF EXISTS set_updated_at ON enquiries;
CREATE TRIGGER set_updated_at BEFORE UPDATE ON enquiries
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
