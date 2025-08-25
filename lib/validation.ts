import { z } from 'zod';

// Common validation schemas
export const emailSchema = z
  .string()
  .min(1, 'E-posta adresi gereklidir')
  .email('Geçerli bir e-posta adresi giriniz');

export const phoneSchema = z
  .string()
  .min(1, 'Telefon numarası gereklidir')
  .regex(
    /^(\+90|0)?[5][0-9]{9}$/,
    'Geçerli bir Türkiye telefon numarası giriniz'
  );

export const nameSchema = z
  .string()
  .min(2, 'Ad en az 2 karakter olmalıdır')
  .max(50, 'Ad en fazla 50 karakter olabilir')
  .regex(/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/, 'Ad sadece harf içerebilir');

export const companySchema = z
  .string()
  .min(2, 'Şirket adı en az 2 karakter olmalıdır')
  .max(100, 'Şirket adı en fazla 100 karakter olabilir');

export const messageSchema = z
  .string()
  .min(10, 'Mesaj en az 10 karakter olmalıdır')
  .max(1000, 'Mesaj en fazla 1000 karakter olabilir');

export const subjectSchema = z.string().min(1, 'Konu seçimi gereklidir');

// Contact form schema
export const contactFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema.optional(),
  company: companySchema.optional(),
  subject: subjectSchema,
  message: messageSchema,
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Newsletter subscription schema
export const newsletterSchema = z.object({
  email: emailSchema,
  name: nameSchema.optional(),
  consent: z.boolean().refine(val => val === true, {
    message: 'Bülten aboneliği için onay gereklidir',
  }),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;

// Search form schema
export const searchSchema = z.object({
  query: z
    .string()
    .min(1, 'Arama terimi gereklidir')
    .max(100, 'Arama terimi en fazla 100 karakter olabilir'),
  category: z.string().optional(),
  filters: z.record(z.any()).optional(),
});

export type SearchData = z.infer<typeof searchSchema>;

// Product inquiry schema
export const productInquirySchema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema.optional(),
  company: companySchema,
  productId: z.string().min(1, 'Ürün seçimi gereklidir'),
  quantity: z.number().min(1, 'Miktar en az 1 olmalıdır'),
  message: messageSchema.optional(),
});

export type ProductInquiryData = z.infer<typeof productInquirySchema>;

// Support ticket schema
export const supportTicketSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema.optional(),
  company: companySchema.optional(),
  subject: z
    .string()
    .min(5, 'Konu en az 5 karakter olmalıdır')
    .max(100, 'Konu en fazla 100 karakter olabilir'),
  category: z.enum(['technical', 'sales', 'service', 'general'], {
    required_error: 'Kategori seçimi gereklidir',
  }),
  priority: z.enum(['low', 'medium', 'high', 'urgent'], {
    required_error: 'Öncelik seçimi gereklidir',
  }),
  description: z
    .string()
    .min(20, 'Açıklama en az 20 karakter olmalıdır')
    .max(2000, 'Açıklama en fazla 2000 karakter olabilir'),
  attachments: z.array(z.string()).optional(),
});

export type SupportTicketData = z.infer<typeof supportTicketSchema>;

// User registration schema
export const userRegistrationSchema = z
  .object({
    firstName: nameSchema,
    lastName: nameSchema,
    email: emailSchema,
    phone: phoneSchema.optional(),
    company: companySchema.optional(),
    password: z
      .string()
      .min(8, 'Şifre en az 8 karakter olmalıdır')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        'Şifre en az bir büyük harf, bir küçük harf ve bir rakam içermelidir'
      ),
    confirmPassword: z.string().min(1, 'Şifre tekrarı gereklidir'),
    terms: z.boolean().refine(val => val === true, {
      message: 'Kullanım şartlarını kabul etmelisiniz',
    }),
    newsletter: z.boolean().optional(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Şifreler eşleşmiyor',
    path: ['confirmPassword'],
  });

export type UserRegistrationData = z.infer<typeof userRegistrationSchema>;

// User login schema
export const userLoginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, 'Şifre gereklidir'),
  rememberMe: z.boolean().optional(),
});

export type UserLoginData = z.infer<typeof userLoginSchema>;

// Password reset schema
export const passwordResetSchema = z.object({
  email: emailSchema,
});

export type PasswordResetData = z.infer<typeof passwordResetSchema>;

// New password schema
export const newPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, 'Şifre en az 8 karakter olmalıdır')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        'Şifre en az bir büyük harf, bir küçük harf ve bir rakam içermelidir'
      ),
    confirmPassword: z.string().min(1, 'Şifre tekrarı gereklidir'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Şifreler eşleşmiyor',
    path: ['confirmPassword'],
  });

export type NewPasswordData = z.infer<typeof newPasswordSchema>;

// Profile update schema
export const profileUpdateSchema = z.object({
  firstName: nameSchema,
  lastName: nameSchema,
  email: emailSchema,
  phone: phoneSchema.optional(),
  company: companySchema.optional(),
  position: z
    .string()
    .max(50, 'Pozisyon en fazla 50 karakter olabilir')
    .optional(),
  bio: z
    .string()
    .max(500, 'Biyografi en fazla 500 karakter olabilir')
    .optional(),
});

export type ProfileUpdateData = z.infer<typeof profileUpdateSchema>;

// File upload schema
export const fileUploadSchema = z.object({
  file: z
    .instanceof(File)
    .refine(
      file => file.size <= 10 * 1024 * 1024,
      "Dosya boyutu 10MB'dan küçük olmalıdır"
    )
    .refine(
      file =>
        [
          'image/jpeg',
          'image/png',
          'image/webp',
          'application/pdf',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ].includes(file.type),
      'Sadece JPEG, PNG, WebP, PDF ve Word dosyaları kabul edilir'
    ),
});

export type FileUploadData = z.infer<typeof fileUploadSchema>;

// Validation utility functions
export function validateField<T>(
  schema: z.ZodSchema<T>,
  value: any,
  fieldName: string
): { isValid: boolean; error?: string } {
  try {
    schema.parse(value);
    return { isValid: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const fieldError = error.errors.find(err => err.path.includes(fieldName));
      return {
        isValid: false,
        error: fieldError?.message || `${fieldName} geçersiz`,
      };
    }
    return {
      isValid: false,
      error: `${fieldName} doğrulanamadı`,
    };
  }
}

export function validateForm<T>(
  schema: z.ZodSchema<T>,
  data: any
): { isValid: boolean; errors?: Record<string, string> } {
  try {
    schema.parse(data);
    return { isValid: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      error.errors.forEach(err => {
        const fieldName = err.path.join('.');
        errors[fieldName] = err.message;
      });
      return { isValid: false, errors };
    }
    return {
      isValid: false,
      errors: { general: 'Form doğrulanamadı' },
    };
  }
}

// Custom validation functions
export function validateTurkishPhoneNumber(phone: string): boolean {
  const turkishPhoneRegex = /^(\+90|0)?[5][0-9]{9}$/;
  return turkishPhoneRegex.test(phone);
}

export function validateTurkishTaxNumber(taxNumber: string): boolean {
  const turkishTaxRegex = /^[0-9]{10}$/;
  return turkishTaxRegex.test(taxNumber);
}

export function validateTurkishIdentityNumber(identityNumber: string): boolean {
  const turkishIdentityRegex = /^[1-9][0-9]{10}$/;
  return turkishIdentityRegex.test(identityNumber);
}

export function validateUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function validateFileSize(file: File, maxSizeMB: number): boolean {
  return file.size <= maxSizeMB * 1024 * 1024;
}

export function validateFileType(file: File, allowedTypes: string[]): boolean {
  return allowedTypes.includes(file.type);
}

// Sanitization functions
export function sanitizeString(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

export function sanitizeEmail(email: string): string {
  return email.toLowerCase().trim();
}

export function sanitizePhone(phone: string): string {
  return phone.replace(/\s+/g, '').replace(/[()-]/g, '');
}

export function sanitizeUrl(url: string): string {
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return `https://${url}`;
  }
  return url;
}

// Formatting functions
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 11 && cleaned.startsWith('0')) {
    return `+90 ${cleaned.slice(1, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7, 9)} ${cleaned.slice(9)}`;
  }
  if (cleaned.length === 10) {
    return `+90 ${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6, 8)} ${cleaned.slice(8)}`;
  }
  return phone;
}

export function formatTaxNumber(taxNumber: string): string {
  const cleaned = taxNumber.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6, 9)} ${cleaned.slice(9)}`;
  }
  return taxNumber;
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Error message helpers
export const validationMessages = {
  required: (fieldName: string) => `${fieldName} gereklidir`,
  minLength: (fieldName: string, min: number) =>
    `${fieldName} en az ${min} karakter olmalıdır`,
  maxLength: (fieldName: string, max: number) =>
    `${fieldName} en fazla ${max} karakter olabilir`,
  invalidEmail: 'Geçerli bir e-posta adresi giriniz',
  invalidPhone: 'Geçerli bir telefon numarası giriniz',
  invalidUrl: 'Geçerli bir URL giriniz',
  passwordMismatch: 'Şifreler eşleşmiyor',
  fileTooLarge: (maxSize: string) =>
    `Dosya boyutu ${maxSize}MB'dan küçük olmalıdır`,
  invalidFileType: 'Geçersiz dosya türü',
  termsRequired: 'Kullanım şartlarını kabul etmelisiniz',
  consentRequired: 'Onay gereklidir',
} as const;
