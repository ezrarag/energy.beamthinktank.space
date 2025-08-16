# BEAM Energy Site - Deployment Guide

## 🚀 Initial Deployment (Current)

The site is now configured for **initial deployment without external dependencies**. This ensures a successful build and deployment.

### What's Included:
- ✅ Complete UI/UX with mock data
- ✅ City selector functionality
- ✅ Services overview
- ✅ Interactive energy hubs map (mock)
- ✅ Statistics and impact metrics
- ✅ Call-to-action sections
- ✅ Responsive design and animations

### What's Disabled (for now):
- ❌ Supabase database integration
- ❌ Stripe payment processing
- ❌ Real map integration
- ❌ User authentication

## 🔧 Adding Advanced Features (After Deployment)

### 1. Re-enable Supabase Integration

```bash
npm install @supabase/supabase-js @supabase/auth-helpers-nextjs @supabase/auth-helpers-react
```

**Update `next.config.js`:**
```javascript
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'maps.googleapis.com'],
  },
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
}
```

### 2. Re-enable Stripe Integration

```bash
npm install stripe @stripe/stripe-js
```

**Update `next.config.js`:**
```javascript
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  },
```

### 3. Re-enable Map Integration

```bash
npm install react-map-gl mapbox-gl
npm install --save-dev @types/mapbox-gl
```

**Update `next.config.js`:**
```javascript
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    NEXT_PUBLIC_MAPBOX_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
  },
```

### 4. Update Vercel Configuration

**Update `vercel.json`:**
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/"
    }
  ],
  "env": {
    "NEXT_PUBLIC_SUPABASE_URL": "@next_public_supabase_url",
    "NEXT_PUBLIC_SUPABASE_ANON_KEY": "@next_public_supabase_anon_key",
    "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY": "@next_public_stripe_publishable_key",
    "NEXT_PUBLIC_MAPBOX_TOKEN": "@next_public_mapbox_token"
  }
}
```

## 🌐 Environment Variables Setup

### In Vercel Dashboard:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add each variable:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `NEXT_PUBLIC_MAPBOX_TOKEN`

### Local Development:
1. Copy `env.example` to `.env.local`
2. Fill in your actual values
3. Restart the development server

## 📊 Database Setup

After enabling Supabase, create these tables:

```sql
-- Renewable Projects
CREATE TABLE renewable_projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  capacity TEXT,
  city TEXT NOT NULL,
  coordinates JSONB,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- EV Charging Stations
CREATE TABLE ev_charging_stations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  city TEXT NOT NULL,
  coordinates JSONB,
  capacity TEXT,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Fuel Stations
CREATE TABLE fuel_stations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  city TEXT NOT NULL,
  coordinates JSONB,
  fuel_types TEXT[],
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Donations
CREATE TABLE donations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  amount DECIMAL(10,2) NOT NULL,
  project_id UUID REFERENCES renewable_projects(id),
  donor_email TEXT,
  stripe_payment_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 🔄 Migration Steps

1. **Deploy initial version** (current state)
2. **Test functionality** with mock data
3. **Add Supabase** - database and auth
4. **Add Stripe** - payment processing
5. **Add Maps** - real location data
6. **Replace mock data** with real queries
7. **Test all features** thoroughly
8. **Deploy final version**

## ✅ Current Status

**Ready for initial deployment!** The site will work perfectly with mock data and can be enhanced incrementally after successful deployment.

---

**Next Step**: Deploy to Vercel and test the basic functionality!
