'use client';

import type React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import {
  AlertCircle,
  Calendar,
  CheckCircle,
  Clock,
  GraduationCap,
  Headphones,
  HelpCircle,
  Mail,
  MapPin,
  MessageCircle,
  Monitor,
  Phone,
  PhoneCall,
  Settings,
  Shield,
  Star,
  Users,
  Wrench,
} from 'lucide-react';
import { useState } from 'react';

import { useLanguage } from '@/contexts/language-context';
import dynamic from 'next/dynamic';

// Lazy load heavy components
const Header = dynamic(
  () => import('@/components/header').then(mod => ({ default: mod.Header })),
  {
    ssr: false,
    loading: () => <div className='h-20 bg-gray-900' />,
  }
);

const Footer = dynamic(
  () => import('@/components/footer').then(mod => ({ default: mod.Footer })),
  {
    ssr: false,
    loading: () => null,
  }
);

const translations = {
  tr: {
    hero: {
      title: 'Teknik Destek Merkezi',
      description:
        '7/24 uzman desteği ile robotlarınızın kesintisiz çalışmasını sağlıyoruz',
      callButton: 'Hemen Ara: 0850 123 45 67',
      whatsappButton: 'WhatsApp Destek',
    },
    stats: {
      support247: '7/24',
      supportDesc: 'Kesintisiz Destek',
      experts: '50+',
      expertsDesc: 'Uzman Teknisyen',
      responseTime: '<2 Saat',
      responseDesc: 'Ortalama Yanıt Süresi',
    },
    tabs: {
      contact: 'İletişim',
      faq: 'SSS',
      docs: 'Dokümantasyon',
      service: 'Servis Talebi',
    },
    contact: {
      formTitle: 'Destek Talebi Oluştur',
      formDescription:
        'Teknik sorunlarınız için detaylı bilgi verin, en kısa sürede size dönüş yapalım.',
      quickContact: 'Hızlı İletişim',
      quickContactDesc: 'Acil durumlar için doğrudan iletişim kanalları',
      emergency: 'Acil Durum Hattı',
      emergencyPhone: '0850 911 ROBOT (76268)',
      active247: '7/24 Aktif',
      whatsapp: 'WhatsApp Destek',
      whatsappPhone: '+90 555 123 45 67',
      quickResponse: 'Hızlı Yanıt',
      emailSupport: 'E-posta Destek',
      emailAddress: 'destek@robotikfirma.com',
      within24h: '24 Saat İçinde',
      remoteSupport: 'Uzaktan Destek',
      remoteDesc: 'TeamViewer / AnyDesk',
      instantSolution: 'Anında Çözüm',
      supportHours: 'Destek Saatleri',
      weekdays: 'Pazartesi - Cuma',
      saturday: 'Cumartesi',
      sunday: 'Pazar',
      emergencyOnly: 'Sadece Acil',
      emergency247: 'Acil Durum',
      form: {
        name: 'Ad Soyad',
        email: 'E-posta',
        phone: 'Telefon',
        company: 'Şirket',
        robotModel: 'Robot Modeli',
        serialNumber: 'Seri Numarası',
        issueType: 'Sorun Türü',
        priority: 'Öncelik',
        description: 'Sorun Açıklaması',
        submit: 'Destek Talebi Gönder',
        selectModel: 'Model seçin',
        selectIssue: 'Sorun türü seçin',
        selectPriority: 'Öncelik seçin',
        descriptionPlaceholder: 'Sorunu detaylı olarak açıklayın...',
        required: '*',
        models: {
          '6-axis-pro': '6 Eksen Pro Serisi',
          'scara-x1': 'SCARA X1 Serisi',
          'delta-speed': 'Delta Speed Serisi',
          'cobot-safe': 'Cobot Safe Serisi',
          other: 'Diğer',
        },
        issues: {
          hardware: 'Donanım Arızası',
          software: 'Yazılım Sorunu',
          calibration: 'Kalibrasyon',
          maintenance: 'Bakım',
          training: 'Eğitim',
          other: 'Diğer',
        },
        priorities: {
          critical: 'Kritik (Üretim Durdu)',
          high: 'Yüksek',
          medium: 'Orta',
          low: 'Düşük',
        },
      },
    },
    faq: {
      title: 'Sık Sorulan Sorular',
      description: 'En çok merak edilen konularda hazırladığımız yanıtlar',
      questions: {
        robotNotWorking: {
          question: 'Robotum çalışmıyor, ne yapmalıyım?',
          answer: {
            intro: 'İlk olarak şu kontrolleri yapın:',
            steps: [
              'Güç kablosunun bağlı olduğundan emin olun',
              'Acil durdurma butonunun basılı olmadığını kontrol edin',
              'Kontrol panelindeki hata kodlarını not alın',
              'Robot çevresinde engel olmadığından emin olun',
            ],
            conclusion:
              'Bu adımlar sorunu çözmezse, hata kodları ile birlikte bize ulaşın.',
          },
        },
        calibration: {
          question: 'Robot kalibrasyonu ne sıklıkla yapılmalı?',
          answer: {
            intro: 'Kalibrasyon sıklığı kullanım yoğunluğuna bağlıdır:',
            intensive: 'Yoğun kullanım (24/7): Ayda 1 kez',
            normal: 'Normal kullanım (8-16 saat/gün): 3 ayda 1 kez',
            light: 'Hafif kullanım: 6 ayda 1 kez',
            conclusion:
              'Hassasiyet gerektiren işlemlerde daha sık kalibrasyon önerilir.',
          },
        },
        softwareUpdate: {
          question: 'Yazılım güncellemesi nasıl yapılır?',
          answer: {
            intro: 'Yazılım güncellemesi için:',
            steps: [
              'Robot Studio yazılımını açın',
              'Ayarlar > Güncelleme menüsüne gidin',
              'Güncellemeleri Kontrol Et butonuna tıklayın',
              'Mevcut güncellemeleri indirin ve yükleyin',
              'Robot yeniden başlatın',
            ],
            warning: '⚠️ Güncelleme öncesi mevcut ayarlarınızı yedekleyin.',
          },
        },
        spareParts: {
          question: 'Yedek parça temini ne kadar sürer?',
          answer: {
            intro: 'Yedek parça temin süreleri:',
            inStock: 'Stokta bulunan parçalar: 1-2 iş günü',
            supplier: 'Tedarikçiden gelecek parçalar: 5-10 iş günü',
            custom: 'Özel üretim parçalar: 2-4 hafta',
            conclusion: 'Acil durumlar için ekspres kargo seçeneği mevcuttur.',
          },
        },
        training: {
          question: 'Operatör eğitimi nasıl alınır?',
          answer: {
            intro: 'Eğitim seçeneklerimiz:',
            basic: 'Temel Operatör Eğitimi: 2 gün (Merkezimizde)',
            advanced: 'İleri Seviye Programlama: 3 gün (Merkezimizde)',
            onsite: 'Sahada Eğitim: Firmanızda özel eğitim',
            online: 'Online Eğitim: Video konferans ile',
            conclusion: 'Eğitim sonunda sertifika verilir.',
          },
        },
        warranty: {
          question: 'Garanti kapsamı nedir?',
          answer: {
            intro: 'Garanti kapsamımız:',
            standard: 'Standart Garanti: 2 yıl (parça + işçilik)',
            extended: 'Genişletilmiş Garanti: 5 yıla kadar uzatılabilir',
            coverage: 'Kapsam: Üretim hatası kaynaklı arızalar',
            excluded: 'Kapsam Dışı: Yanlış kullanım, dış etken hasarları',
            conclusion: 'Garanti detayları için satış sözleşmenizi inceleyin.',
          },
        },
      },
    },
    docs: {
      userManuals: {
        title: 'Kullanım Kılavuzları',
        description: 'Robot modellerine göre detaylı kullanım kılavuzları',
        download: 'İndir',
        models: {
          '6-axis-pro': '6 Eksen Pro Serisi',
          'scara-x1': 'SCARA X1 Serisi',
          'delta-speed': 'Delta Speed Serisi',
        },
      },
      technical: {
        title: 'Teknik Dokümantasyon',
        description: 'Kurulum, bakım ve onarım kılavuzları',
        installation: 'Kurulum Kılavuzu',
        maintenance: 'Bakım Kılavuzu',
        troubleshooting: 'Arıza Giderme',
      },
      software: {
        title: 'Yazılım İndirmeleri',
        description: 'Robot Studio ve yardımcı yazılımlar',
        robotStudio: 'Robot Studio v3.2',
        simulation: 'Simülasyon Paketi',
        calibration: 'Kalibrasyon Aracı',
      },
      videos: {
        title: 'Video Eğitimler',
        description: 'Adım adım video eğitim serileri',
        basicUsage: 'Temel Kullanım',
        programming: 'Programlama',
        maintenance: 'Bakım İşlemleri',
        watch: 'İzle',
      },
      safety: {
        title: 'Güvenlik Kılavuzları',
        description: 'İş güvenliği ve risk değerlendirme',
        safetyRules: 'Güvenlik Kuralları',
        riskAssessment: 'Risk Değerlendirme',
        emergencyPlan: 'Acil Durum Planı',
      },
      training: {
        title: 'Eğitim Materyalleri',
        description: 'Operatör ve teknisyen eğitim kaynakları',
        basic: 'Temel Eğitim',
        advanced: 'İleri Seviye',
        certification: 'Sertifika Sınavı',
      },
    },
    service: {
      title: 'Servis Randevusu Al',
      description:
        'Sahada servis, atölye onarımı veya uzaktan destek için randevu oluşturun.',
      options: {
        title: 'Servis Seçenekleri',
        description: 'Size en uygun servis türünü seçin',
        field: {
          title: 'Sahada Servis',
          description: 'Teknisyenlerimiz firmanızda servis hizmeti verir',
          duration: '2-4 saat',
          badge: 'Hızlı Çözüm',
        },
        workshop: {
          title: 'Atölye Onarımı',
          description: 'Robotunuzu atölyemizde detaylı onarım yapıyoruz',
          duration: '3-7 gün',
          badge: 'Kapsamlı',
        },
        remote: {
          title: 'Uzaktan Destek',
          description: 'İnternet üzerinden anında destek alın',
          duration: '15-30 dk',
          badge: 'Anında',
        },
      },
      maintenance: {
        title: 'Bakım Paketleri',
        description: 'Düzenli bakım ile robotunuzun ömrünü uzatın',
        standard: {
          title: 'Standart Bakım',
          frequency: 'Yıllık',
          features: [
            'Genel kontrol ve temizlik',
            'Yazılım güncellemesi',
            'Temel kalibrasyon',
          ],
        },
        premium: {
          title: 'Premium Bakım',
          frequency: '6 Aylık',
          recommended: 'Önerilen',
          features: [
            'Tüm standart bakım hizmetleri',
            'Detaylı performans analizi',
            'Öngörülü bakım raporu',
            '7/24 öncelikli destek',
          ],
        },
      },
      form: {
        name: 'Ad Soyad',
        email: 'E-posta',
        phone: 'Telefon',
        company: 'Şirket',
        address: 'Adres',
        robotModel: 'Robot Modeli',
        serialNumber: 'Seri Numarası',
        serviceType: 'Servis Türü',
        preferredDate: 'Tercih Edilen Tarih',
        description: 'Servis Açıklaması',
        submit: 'Servis Randevusu Oluştur',
        addressPlaceholder: 'Servis adresi...',
        descriptionPlaceholder:
          'Yapılacak işlemleri detaylı olarak açıklayın...',
        selectModel: 'Model seçin',
        selectService: 'Servis türü seçin',
        required: '*',
        serviceTypes: {
          field: 'Sahada Servis',
          workshop: 'Atölye Onarımı',
          remote: 'Uzaktan Destek',
          maintenance: 'Periyodik Bakım',
          calibration: 'Kalibrasyon',
          training: 'Eğitim',
        },
      },
    },
  },
  en: {
    hero: {
      title: 'Technical Support Center',
      description:
        'Ensuring uninterrupted operation of your robots with 24/7 expert support',
      callButton: 'Call Now: 0850 123 45 67',
      whatsappButton: 'WhatsApp Support',
    },
    stats: {
      support247: '24/7',
      supportDesc: 'Continuous Support',
      experts: '50+',
      expertsDesc: 'Expert Technicians',
      responseTime: '<2 Hours',
      responseDesc: 'Average Response Time',
    },
    tabs: {
      contact: 'Contact',
      faq: 'FAQ',
      docs: 'Documentation',
      service: 'Service Request',
    },
    contact: {
      formTitle: 'Create Support Request',
      formDescription:
        "Provide detailed information about your technical issues, we'll get back to you as soon as possible.",
      quickContact: 'Quick Contact',
      quickContactDesc: 'Direct communication channels for emergencies',
      emergency: 'Emergency Hotline',
      emergencyPhone: '0850 911 ROBOT (76268)',
      active247: '24/7 Active',
      whatsapp: 'WhatsApp Support',
      whatsappPhone: '+90 555 123 45 67',
      quickResponse: 'Quick Response',
      emailSupport: 'Email Support',
      emailAddress: 'support@roboticcompany.com',
      within24h: 'Within 24 Hours',
      remoteSupport: 'Remote Support',
      remoteDesc: 'TeamViewer / AnyDesk',
      instantSolution: 'Instant Solution',
      supportHours: 'Support Hours',
      weekdays: 'Monday - Friday',
      saturday: 'Saturday',
      sunday: 'Sunday',
      emergencyOnly: 'Emergency',
      emergency247: 'Emergency',
      form: {
        name: 'Full Name',
        email: 'Email',
        phone: 'Phone',
        company: 'Company',
        robotModel: 'Robot Model',
        serialNumber: 'Serial Number',
        issueType: 'Issue Type',
        priority: 'Priority',
        description: 'Issue Description',
        submit: 'Submit Support Request',
        selectModel: 'Select model',
        selectIssue: 'Select issue type',
        selectPriority: 'Select priority',
        descriptionPlaceholder: 'Describe the issue in detail...',
        required: '*',
        models: {
          '6-axis-pro': '6-Axis Pro Series',
          'scara-x1': 'SCARA X1 Series',
          'delta-speed': 'Delta Speed Series',
          'cobot-safe': 'Cobot Safe Series',
          other: 'Other',
        },
        issues: {
          hardware: 'Hardware Failure',
          software: 'Software Issue',
          calibration: 'Calibration',
          maintenance: 'Maintenance',
          training: 'Training',
          other: 'Other',
        },
        priorities: {
          critical: 'Critical (Production Stopped)',
          high: 'High',
          medium: 'Medium',
          low: 'Low',
        },
      },
    },
    faq: {
      title: 'Frequently Asked Questions',
      description: 'Answers to the most commonly asked questions',
      questions: {
        robotNotWorking: {
          question: 'My robot is not working, what should I do?',
          answer: {
            intro: 'First, perform these checks:',
            steps: [
              'Make sure the power cable is connected',
              'Check that the emergency stop button is not pressed',
              'Note the error codes on the control panel',
              'Ensure there are no obstacles around the robot',
            ],
            conclusion:
              "If these steps don't solve the problem, contact us with the error codes.",
          },
        },
        calibration: {
          question: 'How often should robot calibration be performed?',
          answer: {
            intro: 'Calibration frequency depends on usage intensity:',
            intensive: 'Intensive use (24/7): Once a month',
            normal: 'Normal use (8-16 hours/day): Once every 3 months',
            light: 'Light use: Once every 6 months',
            conclusion:
              'More frequent calibration is recommended for precision-requiring operations.',
          },
        },
        softwareUpdate: {
          question: 'How to perform software updates?',
          answer: {
            intro: 'For software updates:',
            steps: [
              'Open Robot Studio software',
              'Go to Settings > Update menu',
              'Click Check for Updates button',
              'Download and install available updates',
              'Restart the robot',
            ],
            warning: '⚠️ Back up your current settings before updating.',
          },
        },
        spareParts: {
          question: 'How long does spare parts supply take?',
          answer: {
            intro: 'Spare parts supply times:',
            inStock: 'Parts in stock: 1-2 business days',
            supplier: 'Parts from supplier: 5-10 business days',
            custom: 'Custom manufactured parts: 2-4 weeks',
            conclusion: 'Express shipping option is available for emergencies.',
          },
        },
        training: {
          question: 'How to get operator training?',
          answer: {
            intro: 'Our training options:',
            basic: 'Basic Operator Training: 2 days (At our center)',
            advanced: 'Advanced Programming: 3 days (At our center)',
            onsite: 'On-site Training: Custom training at your company',
            online: 'Online Training: Via video conference',
            conclusion: 'Certificate is provided after training.',
          },
        },
        warranty: {
          question: 'What is the warranty coverage?',
          answer: {
            intro: 'Our warranty coverage:',
            standard: 'Standard Warranty: 2 years (parts + labor)',
            extended: 'Extended Warranty: Can be extended up to 5 years',
            coverage: 'Coverage: Manufacturing defect-related failures',
            excluded: 'Excluded: Misuse, external damage',
            conclusion:
              'Please review your sales contract for warranty details.',
          },
        },
      },
    },
    docs: {
      userManuals: {
        title: 'User Manuals',
        description: 'Detailed user manuals by robot models',
        download: 'Download',
        models: {
          '6-axis-pro': '6-Axis Pro Series',
          'scara-x1': 'SCARA X1 Series',
          'delta-speed': 'Delta Speed Series',
        },
      },
      technical: {
        title: 'Technical Documentation',
        description: 'Installation, maintenance and repair manuals',
        installation: 'Installation Manual',
        maintenance: 'Maintenance Manual',
        troubleshooting: 'Troubleshooting',
      },
      software: {
        title: 'Software Downloads',
        description: 'Robot Studio and auxiliary software',
        robotStudio: 'Robot Studio v3.2',
        simulation: 'Simulation Package',
        calibration: 'Calibration Tool',
      },
      videos: {
        title: 'Video Tutorials',
        description: 'Step-by-step video tutorial series',
        basicUsage: 'Basic Usage',
        programming: 'Programming',
        maintenance: 'Maintenance Operations',
        watch: 'Watch',
      },
      safety: {
        title: 'Safety Manuals',
        description: 'Occupational safety and risk assessment',
        safetyRules: 'Safety Rules',
        riskAssessment: 'Risk Assessment',
        emergencyPlan: 'Emergency Plan',
      },
      training: {
        title: 'Training Materials',
        description: 'Operator and technician training resources',
        basic: 'Basic Training',
        advanced: 'Advanced Level',
        certification: 'Certification Exam',
      },
    },
    service: {
      title: 'Schedule Service Appointment',
      description:
        'Create an appointment for on-site service, workshop repair, or remote support.',
      options: {
        title: 'Service Options',
        description: 'Choose the most suitable service type for you',
        field: {
          title: 'On-site Service',
          description: 'Our technicians provide service at your company',
          duration: '2-4 hours',
          badge: 'Quick Solution',
        },
        workshop: {
          title: 'Workshop Repair',
          description:
            'We perform detailed repair of your robot in our workshop',
          duration: '3-7 days',
          badge: 'Comprehensive',
        },
        remote: {
          title: 'Remote Support',
          description: 'Get instant support over the internet',
          duration: '15-30 min',
          badge: 'Instant',
        },
      },
      maintenance: {
        title: 'Maintenance Packages',
        description: "Extend your robot's lifespan with regular maintenance",
        standard: {
          title: 'Standard Maintenance',
          frequency: 'Annual',
          features: [
            'General inspection and cleaning',
            'Software update',
            'Basic calibration',
          ],
        },
        premium: {
          title: 'Premium Maintenance',
          frequency: '6 Monthly',
          recommended: 'Recommended',
          features: [
            'All standard maintenance services',
            'Detailed performance analysis',
            'Predictive maintenance report',
            '24/7 priority support',
          ],
        },
      },
      form: {
        name: 'Full Name',
        email: 'Email',
        phone: 'Phone',
        company: 'Company',
        address: 'Address',
        robotModel: 'Robot Model',
        serialNumber: 'Serial Number',
        serviceType: 'Service Type',
        preferredDate: 'Preferred Date',
        description: 'Service Description',
        submit: 'Create Service Appointment',
        addressPlaceholder: 'Service address...',
        descriptionPlaceholder:
          'Describe the operations to be performed in detail...',
        selectModel: 'Select model',
        selectService: 'Select service type',
        required: '*',
        serviceTypes: {
          field: 'On-site Service',
          workshop: 'Workshop Repair',
          remote: 'Remote Support',
          maintenance: 'Periodic Maintenance',
          calibration: 'Calibration',
          training: 'Training',
        },
      },
    },
  },
};

export default function SupportPage() {
  const { currentLang } = useLanguage();
  const t = translations[currentLang];

  const [supportForm, setSupportForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    robotModel: '',
    serialNumber: '',
    issueType: '',
    priority: '',
    description: '',
  });

  const [serviceForm, setServiceForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    robotModel: '',
    serialNumber: '',
    serviceType: '',
    preferredDate: '',
    description: '',
  });

  const handleSupportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderimi işlemi burada yapılacak
  };

  const handleServiceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Servis formu gönderimi işlemi burada yapılacak
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />

      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white pt-32 pb-16'>
        <div className='absolute inset-0 bg-black/20'></div>
        <div className='container mx-auto max-w-8xl relative z-10'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>
              {t.hero.title}
            </h1>
            <p className='text-xl md:text-2xl text-blue-100 mb-8'>
              {t.hero.description}
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                size='lg'
                className='bg-white text-blue-600 hover:bg-gray-100'
              >
                <Phone className='w-5 h-5 mr-2' />
                {t.hero.callButton}
              </Button>
              <Button
                size='lg'
                variant='outline'
                className='border-white text-white hover:bg-white hover:text-blue-600 bg-transparent'
              >
                <MessageCircle className='w-5 h-5 mr-2' />
                {t.hero.whatsappButton}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-12 bg-white'>
        <div className='container mx-auto max-w-8xl'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <div className='inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4'>
                <Clock className='w-8 h-8 text-blue-600' />
              </div>
              <h3 className='text-3xl font-bold text-gray-900 mb-2'>
                {t.stats.support247}
              </h3>
              <p className='text-gray-600'>{t.stats.supportDesc}</p>
            </div>
            <div className='text-center'>
              <div className='inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4'>
                <Users className='w-8 h-8 text-green-600' />
              </div>
              <h3 className='text-3xl font-bold text-gray-900 mb-2'>
                {t.stats.experts}
              </h3>
              <p className='text-gray-600'>{t.stats.expertsDesc}</p>
            </div>
            <div className='text-center'>
              <div className='inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4'>
                <Headphones className='w-8 h-8 text-orange-600' />
              </div>
              <h3 className='text-3xl font-bold text-gray-900 mb-2'>
                {t.stats.responseTime}
              </h3>
              <p className='text-gray-600'>{t.stats.responseDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className='py-16'>
        <div className='container mx-auto max-w-8xl'>
          <Tabs defaultValue='contact' className='w-full'>
            <TabsList className='grid w-full grid-cols-3 mb-8'>
              <TabsTrigger value='contact' className='flex items-center gap-2'>
                <Phone className='w-4 h-4' />
                {t.tabs.contact}
              </TabsTrigger>
              <TabsTrigger value='faq' className='flex items-center gap-2'>
                <HelpCircle className='w-4 h-4' />
                {t.tabs.faq}
              </TabsTrigger>
              <TabsTrigger value='service' className='flex items-center gap-2'>
                <Wrench className='w-4 h-4' />
                {t.tabs.service}
              </TabsTrigger>
            </TabsList>

            {/* İletişim Tab */}
            <TabsContent value='contact' className='space-y-8'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {/* İletişim Formu */}
                <Card>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                      <Mail className='w-5 h-5' />
                      {t.contact.formTitle}
                    </CardTitle>
                    <CardDescription>
                      {t.contact.formDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form
                      action='https://hook.eu2.make.com/u0og4qi3l5yru52fyhv8i64w3jwg9flz'
                      method='POST'
                      className='space-y-4'
                    >
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                          <label className='text-sm font-medium mb-2 block'>
                            {t.contact.form.name} {t.contact.form.required}
                          </label>
                          <Input name='name' required />
                        </div>
                        <div>
                          <label className='text-sm font-medium mb-2 block'>
                            {t.contact.form.email} {t.contact.form.required}
                          </label>
                          <Input type='email' name='email' required />
                        </div>
                      </div>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                          <label className='text-sm font-medium mb-2 block'>
                            {t.contact.form.phone}
                          </label>
                          <Input name='phone' />
                        </div>
                        <div>
                          <label className='text-sm font-medium mb-2 block'>
                            {t.contact.form.company}
                          </label>
                          <Input name='company' />
                        </div>
                      </div>

                      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                          <label className='text-sm font-medium mb-2 block'>
                            {t.contact.form.issueType} {t.contact.form.required}
                          </label>
                          <Select name='issueType'>
                            <SelectTrigger>
                              <SelectValue
                                placeholder={t.contact.form.selectIssue}
                              />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value='hardware'>
                                {t.contact.form.issues.hardware}
                              </SelectItem>
                              <SelectItem value='software'>
                                {t.contact.form.issues.software}
                              </SelectItem>
                              <SelectItem value='calibration'>
                                {t.contact.form.issues.calibration}
                              </SelectItem>
                              <SelectItem value='maintenance'>
                                {t.contact.form.issues.maintenance}
                              </SelectItem>
                              <SelectItem value='training'>
                                {t.contact.form.issues.training}
                              </SelectItem>
                              <SelectItem value='other'>
                                {t.contact.form.issues.other}
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className='text-sm font-medium mb-2 block'>
                            {t.contact.form.priority} {t.contact.form.required}
                          </label>
                          <Select name='priority'>
                            <SelectTrigger>
                              <SelectValue
                                placeholder={t.contact.form.selectPriority}
                              />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value='critical'>
                                {t.contact.form.priorities.critical}
                              </SelectItem>
                              <SelectItem value='high'>
                                {t.contact.form.priorities.high}
                              </SelectItem>
                              <SelectItem value='medium'>
                                {t.contact.form.priorities.medium}
                              </SelectItem>
                              <SelectItem value='low'>
                                {t.contact.form.priorities.low}
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div>
                        <label className='text-sm font-medium mb-2 block'>
                          {t.contact.form.description} {t.contact.form.required}
                        </label>
                        <Textarea
                          name='description'
                          rows={4}
                          placeholder={t.contact.form.descriptionPlaceholder}
                          required
                        />
                      </div>
                      <Button type='submit' className='w-full'>
                        {t.contact.form.submit}
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* İletişim Seçenekleri */}
                <div className='space-y-6'>
                  <Card>
                    <CardHeader>
                      <CardTitle>{t.contact.quickContact}</CardTitle>
                      <CardDescription>
                        {t.contact.quickContactDesc}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className='space-y-4'>
                      <div className='flex items-center gap-4 p-4 bg-red-50 rounded-lg border border-red-200'>
                        <div className='flex-shrink-0'>
                          <PhoneCall className='w-6 h-6 text-red-600' />
                        </div>
                        <div className='flex-1'>
                          <h4 className='font-semibold text-red-900'>
                            {t.contact.emergency}
                          </h4>
                          <p className='text-red-700'>
                            {t.contact.emergencyPhone}
                          </p>
                          <Badge variant='destructive' className='mt-1'>
                            {t.contact.active247}
                          </Badge>
                        </div>
                      </div>

                      <div className='flex items-center gap-4 p-4 bg-green-50 rounded-lg border border-green-200'>
                        <div className='flex-shrink-0'>
                          <MessageCircle className='w-6 h-6 text-green-600' />
                        </div>
                        <div className='flex-1'>
                          <h4 className='font-semibold text-green-900'>
                            {t.contact.whatsapp}
                          </h4>
                          <p className='text-green-700'>
                            {t.contact.whatsappPhone}
                          </p>
                          <Badge
                            variant='secondary'
                            className='mt-1 bg-green-100 text-green-800'
                          >
                            {t.contact.quickResponse}
                          </Badge>
                        </div>
                      </div>

                      <div className='flex items-center gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200'>
                        <div className='flex-shrink-0'>
                          <Mail className='w-6 h-6 text-blue-600' />
                        </div>
                        <div className='flex-1'>
                          <h4 className='font-semibold text-blue-900'>
                            {t.contact.emailSupport}
                          </h4>
                          <p className='text-blue-700'>
                            {t.contact.emailAddress}
                          </p>
                          <Badge
                            variant='secondary'
                            className='mt-1 bg-blue-100 text-blue-800'
                          >
                            {t.contact.within24h}
                          </Badge>
                        </div>
                      </div>

                      <div className='flex items-center gap-4 p-4 bg-purple-50 rounded-lg border border-purple-200'>
                        <div className='flex-shrink-0'>
                          <Monitor className='w-6 h-6 text-purple-600' />
                        </div>
                        <div className='flex-1'>
                          <h4 className='font-semibold text-purple-900'>
                            {t.contact.remoteSupport}
                          </h4>
                          <p className='text-purple-700'>
                            {t.contact.remoteDesc}
                          </p>
                          <Badge
                            variant='secondary'
                            className='mt-1 bg-purple-100 text-purple-800'
                          >
                            {t.contact.instantSolution}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>{t.contact.supportHours}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className='space-y-3'>
                        <div className='flex justify-between items-center'>
                          <span className='font-medium'>
                            {t.contact.weekdays}
                          </span>
                          <span className='text-green-600 font-semibold'>
                            08:00 - 18:00
                          </span>
                        </div>
                        <div className='flex justify-between items-center'>
                          <span className='font-medium'>
                            {t.contact.saturday}
                          </span>
                          <span className='text-orange-600 font-semibold'>
                            09:00 - 15:00
                          </span>
                        </div>
                        <div className='flex justify-between items-center'>
                          <span className='font-medium'>
                            {t.contact.sunday}
                          </span>
                          <span className='text-red-600 font-semibold'>
                            {t.contact.emergencyOnly}
                          </span>
                        </div>
                        <div className='pt-2 border-t'>
                          <div className='flex justify-between items-center'>
                            <span className='font-medium'>
                              {t.contact.emergency247}
                            </span>
                            <Badge className='bg-red-600'>24/7</Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* SSS Tab */}
            <TabsContent value='faq'>
              <Card>
                <CardHeader>
                  <CardTitle>{t.faq.title}</CardTitle>
                  <CardDescription>{t.faq.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='item-1'>
                      <AccordionTrigger className='text-left'>
                        <div className='flex items-center gap-2'>
                          <AlertCircle className='w-4 h-4 text-red-500' />
                          {t.faq.questions.robotNotWorking.question}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className='text-gray-600'>
                        <div className='space-y-3'>
                          <p>{t.faq.questions.robotNotWorking.answer.intro}</p>
                          <ul className='list-disc list-inside space-y-1 ml-4'>
                            {t.faq.questions.robotNotWorking.answer.steps.map(
                              (step, index) => (
                                <li key={index}>{step}</li>
                              )
                            )}
                          </ul>
                          <p>
                            {t.faq.questions.robotNotWorking.answer.conclusion}
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value='item-2'>
                      <AccordionTrigger className='text-left'>
                        <div className='flex items-center gap-2'>
                          <Settings className='w-4 h-4 text-blue-500' />
                          {t.faq.questions.calibration.question}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className='text-gray-600'>
                        <div className='space-y-3'>
                          <p>{t.faq.questions.calibration.answer.intro}</p>
                          <ul className='list-disc list-inside space-y-1 ml-4'>
                            <li>
                              <strong>
                                {currentLang === 'tr'
                                  ? 'Yoğun kullanım (24/7):'
                                  : 'Intensive use (24/7):'}
                              </strong>{' '}
                              {t.faq.questions.calibration.answer.intensive}
                            </li>
                            <li>
                              <strong>
                                {currentLang === 'tr'
                                  ? 'Normal kullanım (8-16 saat/gün):'
                                  : 'Normal use (8-16 hours/day):'}
                              </strong>{' '}
                              {t.faq.questions.calibration.answer.normal}
                            </li>
                            <li>
                              <strong>
                                {currentLang === 'tr'
                                  ? 'Hafif kullanım:'
                                  : 'Light use:'}
                              </strong>{' '}
                              {t.faq.questions.calibration.answer.light}
                            </li>
                          </ul>
                          <p>{t.faq.questions.calibration.answer.conclusion}</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value='item-3'>
                      <AccordionTrigger className='text-left'>
                        <div className='flex items-center gap-2'>
                          <Wrench className='w-4 h-4 text-green-500' />
                          {t.faq.questions.softwareUpdate.question}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className='text-gray-600'>
                        <div className='space-y-3'>
                          <p>{t.faq.questions.softwareUpdate.answer.intro}</p>
                          <ol className='list-decimal list-inside space-y-1 ml-4'>
                            {t.faq.questions.softwareUpdate.answer.steps.map(
                              (step, index) => (
                                <li key={index}>{step}</li>
                              )
                            )}
                          </ol>
                          <p className='text-amber-600 font-medium'>
                            {t.faq.questions.softwareUpdate.answer.warning}
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value='item-4'>
                      <AccordionTrigger className='text-left'>
                        <div className='flex items-center gap-2'>
                          <Wrench className='w-4 h-4 text-orange-500' />
                          {t.faq.questions.spareParts.question}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className='text-gray-600'>
                        <div className='space-y-3'>
                          <p>{t.faq.questions.spareParts.answer.intro}</p>
                          <ul className='list-disc list-inside space-y-1 ml-4'>
                            <li>
                              <strong>
                                {currentLang === 'tr'
                                  ? 'Stokta bulunan parçalar:'
                                  : 'Parts in stock:'}
                              </strong>{' '}
                              {t.faq.questions.spareParts.answer.inStock}
                            </li>
                            <li>
                              <strong>
                                {currentLang === 'tr'
                                  ? 'Tedarikçiden gelecek parçalar:'
                                  : 'Parts from supplier:'}
                              </strong>{' '}
                              {t.faq.questions.spareParts.answer.supplier}
                            </li>
                            <li>
                              <strong>
                                {currentLang === 'tr'
                                  ? 'Özel üretim parçalar:'
                                  : 'Custom manufactured parts:'}
                              </strong>{' '}
                              {t.faq.questions.spareParts.answer.custom}
                            </li>
                          </ul>
                          <p>{t.faq.questions.spareParts.answer.conclusion}</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value='item-5'>
                      <AccordionTrigger className='text-left'>
                        <div className='flex items-center gap-2'>
                          <GraduationCap className='w-4 h-4 text-purple-500' />
                          {t.faq.questions.training.question}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className='text-gray-600'>
                        <div className='space-y-3'>
                          <p>{t.faq.questions.training.answer.intro}</p>
                          <ul className='list-disc list-inside space-y-1 ml-4'>
                            <li>
                              <strong>
                                {currentLang === 'tr'
                                  ? 'Temel Operatör Eğitimi:'
                                  : 'Basic Operator Training:'}
                              </strong>{' '}
                              {t.faq.questions.training.answer.basic}
                            </li>
                            <li>
                              <strong>
                                {currentLang === 'tr'
                                  ? 'İleri Seviye Programlama:'
                                  : 'Advanced Programming:'}
                              </strong>{' '}
                              {t.faq.questions.training.answer.advanced}
                            </li>
                            <li>
                              <strong>
                                {currentLang === 'tr'
                                  ? 'Sahada Eğitim:'
                                  : 'On-site Training:'}
                              </strong>{' '}
                              {t.faq.questions.training.answer.onsite}
                            </li>
                            <li>
                              <strong>
                                {currentLang === 'tr'
                                  ? 'Online Eğitim:'
                                  : 'Online Training:'}
                              </strong>{' '}
                              {t.faq.questions.training.answer.online}
                            </li>
                          </ul>
                          <p>{t.faq.questions.training.answer.conclusion}</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value='item-6'>
                      <AccordionTrigger className='text-left'>
                        <div className='flex items-center gap-2'>
                          <Shield className='w-4 h-4 text-green-600' />
                          {t.faq.questions.warranty.question}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className='text-gray-600'>
                        <div className='space-y-3'>
                          <p>{t.faq.questions.warranty.answer.intro}</p>
                          <ul className='list-disc list-inside space-y-1 ml-4'>
                            <li>
                              <strong>
                                {currentLang === 'tr'
                                  ? 'Standart Garanti:'
                                  : 'Standard Warranty:'}
                              </strong>{' '}
                              {t.faq.questions.warranty.answer.standard}
                            </li>
                            <li>
                              <strong>
                                {currentLang === 'tr'
                                  ? 'Genişletilmiş Garanti:'
                                  : 'Extended Warranty:'}
                              </strong>{' '}
                              {t.faq.questions.warranty.answer.extended}
                            </li>
                            <li>
                              <strong>
                                {currentLang === 'tr' ? 'Kapsam:' : 'Coverage:'}
                              </strong>{' '}
                              {t.faq.questions.warranty.answer.coverage}
                            </li>
                            <li>
                              <strong>
                                {currentLang === 'tr'
                                  ? 'Kapsam Dışı:'
                                  : 'Excluded:'}
                              </strong>{' '}
                              {t.faq.questions.warranty.answer.excluded}
                            </li>
                          </ul>
                          <p>{t.faq.questions.warranty.answer.conclusion}</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Servis Talebi Tab */}
            <TabsContent value='service'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {/* Servis Randevu Formu */}
                <Card>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                      <Calendar className='w-5 h-5' />
                      {t.service.title}
                    </CardTitle>
                    <CardDescription>{t.service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form
                      action='https://hook.eu2.make.com/u0og4qi3l5yru52fyhv8i64w3jwg9flz'
                      method='POST'
                      className='space-y-4'
                    >
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                          <label className='text-sm font-medium mb-2 block'>
                            {t.service.form.name} {t.service.form.required}
                          </label>
                          <Input name='name' required />
                        </div>
                        <div>
                          <label className='text-sm font-medium mb-2 block'>
                            {t.service.form.email} {t.service.form.required}
                          </label>
                          <Input type='email' name='email' required />
                        </div>
                      </div>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                          <label className='text-sm font-medium mb-2 block'>
                            {t.service.form.phone} {t.service.form.required}
                          </label>
                          <Input name='phone' required />
                        </div>
                        <div>
                          <label className='text-sm font-medium mb-2 block'>
                            {t.service.form.company}
                          </label>
                          <Input name='company' />
                        </div>
                      </div>
                      <div>
                        <label className='text-sm font-medium mb-2 block'>
                          {t.service.form.address} {t.service.form.required}
                        </label>
                        <Textarea
                          name='address'
                          rows={2}
                          placeholder={t.service.form.addressPlaceholder}
                          required
                        />
                      </div>

                      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                          <label className='text-sm font-medium mb-2 block'>
                            {t.service.form.serviceType}{' '}
                            {t.service.form.required}
                          </label>
                          <Select name='serviceType'>
                            <SelectTrigger>
                              <SelectValue
                                placeholder={t.service.form.selectService}
                              />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value='field'>
                                {t.service.form.serviceTypes.field}
                              </SelectItem>
                              <SelectItem value='workshop'>
                                {t.service.form.serviceTypes.workshop}
                              </SelectItem>
                              <SelectItem value='remote'>
                                {t.service.form.serviceTypes.remote}
                              </SelectItem>
                              <SelectItem value='maintenance'>
                                {t.service.form.serviceTypes.maintenance}
                              </SelectItem>
                              <SelectItem value='calibration'>
                                {t.service.form.serviceTypes.calibration}
                              </SelectItem>
                              <SelectItem value='training'>
                                {t.service.form.serviceTypes.training}
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className='text-sm font-medium mb-2 block'>
                            {t.service.form.preferredDate}
                          </label>
                          <Input type='date' name='preferredDate' />
                        </div>
                      </div>
                      <div>
                        <label className='text-sm font-medium mb-2 block'>
                          {t.service.form.description}
                        </label>
                        <Textarea
                          name='description'
                          rows={4}
                          placeholder={t.service.form.descriptionPlaceholder}
                        />
                      </div>
                      <Button type='submit' className='w-full'>
                        {t.service.form.submit}
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Servis Seçenekleri */}
                <div className='space-y-6'>
                  <Card>
                    <CardHeader>
                      <CardTitle>{t.service.options.title}</CardTitle>
                      <CardDescription>
                        {t.service.options.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className='space-y-4'>
                      <div className='p-4 border rounded-lg hover:bg-gray-50 transition-colors'>
                        <div className='flex items-start gap-3'>
                          <MapPin className='w-5 h-5 text-blue-600 mt-1' />
                          <div className='flex-1'>
                            <h4 className='font-semibold text-gray-900'>
                              {t.service.options.field.title}
                            </h4>
                            <p className='text-sm text-gray-600 mt-1'>
                              {t.service.options.field.description}
                            </p>
                            <div className='flex items-center gap-4 mt-2'>
                              <Badge variant='secondary'>
                                {t.service.options.field.badge}
                              </Badge>
                              <span className='text-sm text-gray-500'>
                                {t.service.options.field.duration}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='p-4 border rounded-lg hover:bg-gray-50 transition-colors'>
                        <div className='flex items-start gap-3'>
                          <Wrench className='w-5 h-5 text-green-600 mt-1' />
                          <div className='flex-1'>
                            <h4 className='font-semibold text-gray-900'>
                              {t.service.options.workshop.title}
                            </h4>
                            <p className='text-sm text-gray-600 mt-1'>
                              {t.service.options.workshop.description}
                            </p>
                            <div className='flex items-center gap-4 mt-2'>
                              <Badge variant='secondary'>
                                {t.service.options.workshop.badge}
                              </Badge>
                              <span className='text-sm text-gray-500'>
                                {t.service.options.workshop.duration}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='p-4 border rounded-lg hover:bg-gray-50 transition-colors'>
                        <div className='flex items-start gap-3'>
                          <Monitor className='w-5 h-5 text-purple-600 mt-1' />
                          <div className='flex-1'>
                            <h4 className='font-semibold text-gray-900'>
                              {t.service.options.remote.title}
                            </h4>
                            <p className='text-sm text-gray-600 mt-1'>
                              {t.service.options.remote.description}
                            </p>
                            <div className='flex items-center gap-4 mt-2'>
                              <Badge variant='secondary'>
                                {t.service.options.remote.badge}
                              </Badge>
                              <span className='text-sm text-gray-500'>
                                {t.service.options.remote.duration}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>{t.service.maintenance.title}</CardTitle>
                      <CardDescription>
                        {t.service.maintenance.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className='space-y-4'>
                      <div className='p-4 border rounded-lg'>
                        <div className='flex items-center justify-between mb-2'>
                          <h4 className='font-semibold'>
                            {t.service.maintenance.standard.title}
                          </h4>
                          <Badge variant='outline'>
                            {t.service.maintenance.standard.frequency}
                          </Badge>
                        </div>
                        <ul className='text-sm text-gray-600 space-y-1'>
                          {t.service.maintenance.standard.features.map(
                            (feature, index) => (
                              <li
                                key={index}
                                className='flex items-center gap-2'
                              >
                                <CheckCircle className='w-4 h-4 text-green-500' />
                                {feature}
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      <div className='p-4 border-2 border-blue-200 rounded-lg bg-blue-50'>
                        <div className='flex items-center justify-between mb-2'>
                          <h4 className='font-semibold text-blue-900'>
                            {t.service.maintenance.premium.title}
                          </h4>
                          <Badge className='bg-blue-600'>
                            {t.service.maintenance.premium.frequency}
                          </Badge>
                        </div>
                        <ul className='text-sm text-blue-800 space-y-1'>
                          {t.service.maintenance.premium.features.map(
                            (feature, index) => (
                              <li
                                key={index}
                                className='flex items-center gap-2'
                              >
                                <CheckCircle className='w-4 h-4 text-blue-600' />
                                {feature}
                              </li>
                            )
                          )}
                        </ul>
                        <div className='mt-3'>
                          <Badge
                            variant='secondary'
                            className='bg-blue-100 text-blue-800'
                          >
                            <Star className='w-3 h-3 mr-1' />
                            {t.service.maintenance.premium.recommended}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      <Footer />
    </div>
  );
}
