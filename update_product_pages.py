import os
import re

def update_product_page(file_path):
    """Ürün sayfasını günceller"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Buton metnini güncelle
        content = re.sub(
            r"contactForConsultation: 'Danışma için Mesaj Bırakın',",
            "contactForConsultation: 'Mesaj bırakın',",
            content
        )

        content = re.sub(
            r"contactForConsultation: 'Leave a Message for Consultation',",
            "contactForConsultation: 'Leave a Message',",
            content
        )

        # İletişim formu zaten varsa ekleme
        if 'Contact Form Modal' in content:
            print(f"OK  | {file_path} - Modal already exists")
            return

        # Gerekli state kontrolü (setIsContactFormOpen) yoksa ekleme yapma
        if 'setIsContactFormOpen(' not in content:
            print(f"SKIP| {file_path} - Missing setIsContactFormOpen state")
            return

        # Footer'dan önce iletişim formunu ekle
        if '<Footer />' in content:
            contact_form = '''

      {/* Contact Form Modal */}
      {isContactFormOpen && (
        <div className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4'>
          <div className='bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto'>
            <div className='p-6 border-b border-gray-200'>
              <div className='flex items-center justify-between'>
                <h3 className='text-2xl font-bold text-gray-800'>
                  İletişim Formu
                </h3>
                <button
                  onClick={() => setIsContactFormOpen(false)}
                  className='p-2 hover:bg-gray-100 rounded-full transition-colors'
                >
                  <svg
                    className='w-6 h-6 text-gray-600'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>
              <p className='text-gray-600 mt-2'>
                Bu ürün hakkında bilgi almak için formu doldurun.
              </p>
            </div>

            <div className='p-6'>
              <form className='space-y-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Ad Soyad *
                    </label>
                    <input
                      type='text'
                      required
                      className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      placeholder='Adınız ve soyadınız'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      E-posta *
                    </label>
                    <input
                      type='email'
                      required
                      className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      placeholder='E-posta adresiniz'
                    />
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Telefon
                    </label>
                    <input
                      type='tel'
                      className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      placeholder='Telefon numaranız'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Şirket
                    </label>
                    <input
                      type='text'
                      className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      placeholder='Şirket adınız'
                    />
                  </div>
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Mesaj *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder='Bu ürün hakkında bilgi almak istiyorum...'
                  ></textarea>
                </div>

                <div className='flex gap-3 pt-4'>
                  <Button
                    type='submit'
                    className='flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold'
                  >
                    <MessageCircle className='w-5 h-5 mr-2' />
                    Mesaj Gönder
                  </Button>
                  <Button
                    type='button'
                    variant='outline'
                    onClick={() => setIsContactFormOpen(false)}
                    className='px-6 py-3 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg'
                  >
                    İptal
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <Footer />'''

            content = content.replace('<Footer />', contact_form)
            print(f"UPD | {file_path} - Modal injected")
        else:
            print(f"WARN| {file_path} - Footer not found")
            return

        # Dosyayı kaydet
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)

    except Exception as e:
        print(f"ERR | {file_path} - {e}")

def main():
    """Ana fonksiyon"""
    products_dir = 'app/products'

    # Tüm ürün sayfalarını bul
    product_pages = []

    for root, dirs, files in os.walk(products_dir):
        for file in files:
            if file == 'page.tsx':
                file_path = os.path.join(root, file)
                product_pages.append(file_path)

    print(f"Found {len(product_pages)} product pages")

    # Her sayfayı güncelle
    for page in product_pages:
        update_product_page(page)

    print("All product pages processed")

if __name__ == '__main__':
    main()
