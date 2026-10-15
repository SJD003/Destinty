# DESTINTY v2 - نظام البوابات

مشروع مطور بالكامل من الهيكل القديم المسطح الى هيكل حديث احترافي.

## التقنيات
- Next.js 15 (App Router, Static Export)
- TypeScript, Tailwind CSS, Framer Motion
- JSON Data Layer (قابل للتحويل الى Supabase/Prisma)
- GitHub Pages Auto Deploy

## التشغيل محليا
```bash
npm install
npm run dev
```

## الهيكل الجديد
- `src/app/` - صفحات
- `src/components/` - مكونات معاد استخدامها
- `src/data/` - بيانات البوابات
- `public/` - الصور

## النشر
الكود جاهز لـ GitHub Pages عبر .github/workflows/deploy.yml
لو تريد Vercel: احذف basePath من next.config.mjs

## المميزات الجديدة
- تصميم Sci-Fi Glassmorphism
- بوابات بحالة حية (OPEN/CLOSED/UNSTABLE/SEALED)
- صفحات ديناميكية /gates/[id]
- SEO + PWA Ready
- كود نظيف قابل للتوسع

## للانتقال من القديم
انسخ محتوى exc1, exc2, exc3 الى ملفات JSON جديدة في src/data/
