# Scroll Lock Implementation

## Overview
Implementasi scroll lock untuk mencegah halaman utama di-scroll ketika modal terbuka, dengan tetap mengizinkan scroll pada konten dalam modal.

## Cara Kerja

### 1. Custom Hook: `useScrollLock`
**File**: `src/hooks/use-scroll-lock.ts`

Hook ini menggunakan Lenis API untuk mengontrol smooth scroll:
- Ketika `isLocked = true`: Memanggil `lenis.stop()` + menambahkan `overflow: hidden` pada body
- Ketika `isLocked = false`: Memanggil `lenis.start()` + menghapus `overflow: hidden` dari body
- Cleanup otomatis saat component unmount

### 2. Integrasi di Modal Components
Hook `useScrollLock` diintegrasikan di semua modal:
- ✅ TaskDetailModal
- ✅ CreateTaskModal
- ✅ EditTaskModal
- ✅ DeleteTaskModal
- ✅ ShareModal
- ✅ TaskSuccessModal

### 3. Penggunaan
```tsx
const MyModal = ({ isOpen, onClose }) => {
  // Lock scroll when modal is open
  useScrollLock(isOpen);
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-1000">
      {/* Modal content */}
    </div>
  );
};
```

## Best Practices

1. **Dual Protection**: Menggunakan Lenis API + CSS overflow-hidden untuk kompatibilitas maksimal
2. **Automatic Cleanup**: useEffect cleanup memastikan scroll di-restore saat modal ditutup
3. **Lenis Integration**: Menggunakan `useLenis()` hook dari lenis/react untuk akses instance
4. **Conditional Check**: Validasi lenis instance tersedia sebelum memanggil API

## Dependencies
- `lenis/react` - untuk `useLenis()` hook
- Lenis Provider harus tersedia di app tree (sudah ada di `app-providers.tsx`)

## Testing
✅ Build sukses tanpa error
✅ TypeScript validation passed
✅ Semua modal sudah terintegrasi
