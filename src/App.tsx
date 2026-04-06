import { Phone, Mail, MapPin, Award, BookOpen, Briefcase, CheckCircle2, MessageSquare, ChevronRight, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const whatsappNumber = "201007859968";
  const email = "Salahatass2000@gmail.com";

  const services = [
    { title: "تقييم الحالات العضلية والهيكلية", desc: "فحص دقيق وشامل لتحديد مصدر الألم ووضع خطة علاجية مخصصة." },
    { title: "تأهيل الحالات العصبية", desc: "برامج متقدمة لمرضى الشلل وإصابات الجهاز العصبي لاستعادة الحركة." },
    { title: "العلاج اليدوي وإدارة الألم", desc: "تقنيات يدوية حديثة لتخفيف الآلام المزمنة وتحسين مرونة المفاصل." },
    { title: "التمارين العلاجية المنزلية", desc: "تصميم برامج تمارين يمكن القيام بها في المنزل لضمان استمرارية التحسن." }
  ];

  const experience = [
    {
      role: "أخصائي علاج طبيعي",
      org: "وزارة الصحة، الأونروا، مركز الأطراف الصناعية",
      period: "2006 – 2014",
      location: "غزة، فلسطين",
      details: [
        "تصميم وتنفيذ برامج تأهيل فردية لحالات الشلل والإصابات المعقدة.",
        "تطبيق تقنيات العلاج اليدوي والشد (Traction).",
        "التثقيف الصحي للمرضى ومقدمي الرعاية."
      ]
    }
  ];

  const skills = ["التقييم الوظيفي", "تخطيط العلاج", "العلاج اليدوي", "تأهيل الحالات العصبية", "العمل الجماعي", "Microsoft Office"];

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-medical-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">S</div>
              <span className="text-xl font-bold text-gray-900 hidden sm:block">صلاح السويركي</span>
            </div>
            <div className="flex gap-4 sm:gap-8 text-sm font-medium">
              <a href="#about" className="hover:text-medical-primary transition-colors">عني</a>
              <a href="#services" className="hover:text-medical-primary transition-colors">خدماتي</a>
              <a href="#cv" className="hover:text-medical-primary transition-colors">السيرة الذاتية</a>
              <a href="#contact" className="bg-medical-primary text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all">احجز موعداً</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                استعد حركتك، <br />
                <span className="text-medical-primary">وحسّن جودة حياتك</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
                أخصائي علاج طبيعي بخبرة تزيد عن 10 سنوات في التأهيل الحركي المتقدم. أساعدك على إدارة الألم واستعادة وظائف جسمك بأحدث الممارسات العلمية.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a 
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-medical-accent text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-green-100"
                >
                  <MessageSquare size={20} />
                  استشارة عبر واتساب
                </a>
                <a 
                  href="#cv"
                  className="flex items-center gap-2 border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all"
                >
                  عرض الملف المهني
                </a>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-medical-primary" />
                  <span>+10 سنوات خبرة</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-medical-primary" />
                  <span>ممارسات مبنية على الدليل</span>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 lg:mt-0 relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10 border-8 border-white">
                <img 
                  src="/Salah.jpg" 
                  alt="صلاح السويركي" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to professional placeholder if image is not yet uploaded
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1559839734-2b71f173681c?auto=format&fit=crop&q=80&w=1000";
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-medical-secondary rounded-full -z-0 blur-3xl opacity-50"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-blue-100 rounded-full -z-0 blur-3xl opacity-50"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-medical-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900">كيف يمكنني مساعدتك؟</h2>
            <p className="mt-4 text-gray-600">أقدم حلولاً علاجية متكاملة مصممة خصيصاً لتناسب احتياجات كل مريض.</p>
          </div>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-medical-secondary rounded-xl flex items-center justify-center text-medical-primary mb-6">
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section id="cv" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-gray-900">الملف المهني</h2>
              <p className="mt-4 text-gray-600">نظرة شاملة على المسيرة الأكاديمية والعملية.</p>
              
              <div className="mt-10 space-y-8">
                <div>
                  <div className="flex items-center gap-3 text-medical-primary mb-4">
                    <BookOpen size={20} />
                    <h3 className="font-bold text-lg">التعليم</h3>
                  </div>
                  <div className="border-r-2 border-medical-secondary pr-6 py-2">
                    <p className="font-bold text-gray-900">بكالوريوس العلاج الطبيعي</p>
                    <p className="text-gray-500 text-sm">جامعة الأزهر – غزة | 2006</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 text-medical-primary mb-4">
                    <Award size={20} />
                    <h3 className="font-bold text-lg">المهارات</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 mt-16 lg:mt-0">
              <div className="flex items-center gap-3 text-medical-primary mb-8">
                <Briefcase size={24} />
                <h3 className="font-bold text-2xl text-gray-900">الخبرة العملية</h3>
              </div>
              <div className="space-y-12">
                {experience.map((exp, i) => (
                  <div key={i} className="relative pr-8 border-r-2 border-gray-100">
                    <div className="absolute top-0 right-[-9px] w-4 h-4 bg-medical-primary rounded-full border-4 border-white shadow-sm"></div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{exp.role}</h4>
                        <p className="text-medical-primary font-medium">{exp.org}</p>
                      </div>
                      <div className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-lg">
                        {exp.period}
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm mb-4 flex items-center gap-2">
                      <MapPin size={14} /> {exp.location}
                    </p>
                    <ul className="space-y-3">
                      {exp.details.map((detail, j) => (
                        <li key={j} className="flex items-start gap-3 text-gray-600 text-sm">
                          <ChevronRight size={16} className="text-medical-primary mt-0.5 shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold">هل أنت جاهز لبدء رحلة التعافي؟</h2>
              <p className="mt-6 text-gray-400 text-lg">
                لا تتردد في التواصل معي للحصول على استشارة أولية أو لحجز موعد في العيادة بالقاهرة.
              </p>
              
              <div className="mt-12 space-y-6">
                <a href={`tel:01007859968`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-medical-primary transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">اتصل مباشرة</p>
                    <p className="text-lg font-bold">01007859968</p>
                  </div>
                </a>
                <a href={`mailto:${email}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-medical-primary transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">البريد الإلكتروني</p>
                    <p className="text-lg font-bold">{email}</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">الموقع</p>
                    <p className="text-lg font-bold">القاهرة، مصر</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 lg:mt-0 bg-white rounded-3xl p-8 lg:p-10 text-gray-900">
              <h3 className="text-2xl font-bold mb-6">أرسل رسالة سريعة</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">الاسم</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-medical-primary focus:border-transparent outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">رقم الهاتف</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-medical-primary focus:border-transparent outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">الرسالة</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-medical-primary focus:border-transparent outline-none transition-all"></textarea>
                </div>
                <button className="w-full bg-medical-primary text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
                  إرسال الطلب
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-medical-primary/5 -skew-x-12 translate-x-1/4"></div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} صلاح السويركي. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-medical-primary transition-colors"><ExternalLink size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
