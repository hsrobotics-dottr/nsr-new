import { ContactForm, Product } from '@/lib/types';
import { useCallback, useState } from 'react';

export function useProductModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openModal = useCallback((product: Product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setSelectedProduct(null);
  }, []);

  return {
    isOpen,
    selectedProduct,
    openModal,
    closeModal,
  };
}

export function useContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    toggleModal,
    openModal,
    closeModal,
  };
}

export function useContactForm() {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const updateForm = useCallback((updates: Partial<ContactForm>) => {
    setForm(prev => ({ ...prev, ...updates }));
  }, []);

  const resetForm = useCallback(() => {
    setForm({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  }, []);

  return {
    form,
    updateForm,
    resetForm,
  };
}
