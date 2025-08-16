# BEAM Energy Site

A modern, sustainable energy platform showcasing renewable projects, EV charging networks, fuel stations, and community impact initiatives.

## 🚀 Features

- **City Selector**: Choose your location for localized energy services
- **Renewable Projects**: Solar, wind, and hydroelectric installations
- **EV Charging Network**: Comprehensive electric vehicle infrastructure
- **Fuel Stations**: Modern stations with renewable energy integration
- **Donations & Impact**: Support projects and track environmental impact
- **Interactive Map**: Energy hubs network visualization
- **Stripe Integration**: Secure payment processing for bills and donations
- **Supabase Backend**: Scalable database and authentication
- **Responsive Design**: Mobile-first, modern UI/UX

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Backend**: Supabase (Database, Auth, Real-time)
- **Payments**: Stripe
- **Maps**: Mapbox/Google Maps integration
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account
- Stripe account
- Mapbox or Google Maps API key

## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd energy.beamthinktank.space
npm install
```

### 2. Environment Setup

Copy the environment example file and configure your variables:

```bash
cp env.example .env.local
```

Edit `.env.local` with your actual values:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_access_token
```

### 3. Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🗄️ Database Setup

### Supabase Tables

Create the following tables in your Supabase project:

#### renewable_projects
```sql
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
```

#### ev_charging_stations
```sql
CREATE TABLE ev_charging_stations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  city TEXT NOT NULL,
  coordinates JSONB,
  capacity TEXT,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### fuel_stations
```sql
CREATE TABLE fuel_stations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  city TEXT NOT NULL,
  coordinates JSONB,
  fuel_types TEXT[],
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### donations
```sql
CREATE TABLE donations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  amount DECIMAL(10,2) NOT NULL,
  project_id UUID REFERENCES renewable_projects(id),
  donor_email TEXT,
  stripe_payment_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 🚀 Deployment

### Vercel Deployment

1. **Connect Repository**: Connect your GitHub repo to Vercel
2. **Environment Variables**: Add your environment variables in Vercel dashboard
3. **Deploy**: Vercel will automatically deploy on push to main branch

### Environment Variables in Vercel

Add these environment variables in your Vercel project settings:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `NEXT_PUBLIC_MAPBOX_TOKEN`

### Manual Deployment

```bash
npm run build
npm run start
```

## 🔧 Configuration

### Stripe Setup

1. Create a Stripe account
2. Get your publishable and secret keys
3. Configure webhook endpoints for payment processing

### Map Integration

Choose between Mapbox or Google Maps:

- **Mapbox**: More customizable, better pricing for startups
- **Google Maps**: Familiar interface, extensive features

### Supabase Configuration

1. Create a new Supabase project
2. Enable Row Level Security (RLS)
3. Configure authentication providers
4. Set up storage buckets for media

## 📱 Mobile Optimization

The site is fully responsive with:
- Mobile-first design approach
- Touch-friendly interactions
- Optimized images and assets
- Progressive Web App (PWA) ready

## 🔒 Security Features

- Environment variable protection
- Supabase RLS policies
- Stripe secure payment processing
- Input validation and sanitization
- HTTPS enforcement in production

## 📊 Analytics & Monitoring

- Built-in Next.js analytics
- Error tracking ready
- Performance monitoring
- SEO optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🔮 Future Enhancements

- Real-time energy consumption tracking
- Community solar program management
- Advanced analytics dashboard
- Mobile app development
- AI-powered energy optimization
- Blockchain integration for energy credits

---

**Built with ❤️ for a sustainable energy future**
