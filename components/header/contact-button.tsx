"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react"
import { useHeader } from "@/hooks/use-header"

export default function ContactButton() {
  const {
    t,
    isContactOpen,
    setIsContactOpen,
    isContactFormOpen,
    setIsContactFormOpen,
    contactForm,
    setContactForm,
    handleContactSubmit,
  } = useHeader()

  return (
    <>
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2 bg-transparent">
            <Phone className="w-4 h-4" />
            {t.contact.title}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{t.contact.title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
              <MessageCircle className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium text-green-900">WhatsApp</p>
                <p className="text-sm text-green-700">+90 555 123 45 67</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <Phone className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium text-blue-900">Telefon</p>
                <p className="text-sm text-blue-700">+90 212 123 45 67</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
              <Mail className="w-5 h-5 text-purple-600" />
              <div>
                <p className="font-medium text-purple-900">E-posta</p>
                <p className="text-sm text-purple-700">info@huashu.com.tr</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
              <MapPin className="w-5 h-5 text-orange-600" />
              <div>
                <p className="font-medium text-orange-900">Adres</p>
                <p className="text-sm text-orange-700">İstanbul, Türkiye</p>
              </div>
            </div>
            <Button
              onClick={() => {
                setIsContactOpen(false)
                setIsContactFormOpen(true)
              }}
              className="w-full"
            >
              {t.contact.form.send}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isContactFormOpen} onOpenChange={setIsContactFormOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{t.contact.title}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">{t.contact.form.name}</label>
              <Input
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                placeholder={t.contact.form.namePlaceholder}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">{t.contact.form.email}</label>
              <Input
                type="email"
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                placeholder={t.contact.form.emailPlaceholder}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">{t.contact.form.phone}</label>
              <Input
                value={contactForm.phone}
                onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                placeholder={t.contact.form.phonePlaceholder}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">{t.contact.form.message}</label>
              <Textarea
                rows={4}
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                placeholder={t.contact.form.messagePlaceholder}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              {t.contact.form.send}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
