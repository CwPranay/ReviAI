export const clerkAppearance = {
  baseTheme: undefined,
  variables: {
    colorPrimary: '#2563EB',
    colorSuccess: '#10B981',
    colorDanger: '#EF4444',
    colorWarning: '#F59E0B',
    colorTextOnPrimaryBackground: '#FFFFFF',
    colorBackground: '#FFFFFF',
    colorInputBackground: '#F9FAFB',
    colorInputText: '#111827',
    colorText: '#111827',
    colorTextSecondary: '#6B7280',
    borderRadius: '0.75rem',
    fontFamily: 'Inter, system-ui, sans-serif',
  },
  elements: {
    // Root card
    rootBox: 'mx-auto',
    card: 'shadow-2xl border border-gray-200 rounded-2xl bg-white',
    
    // Header
    headerTitle: 'text-2xl font-bold text-gray-900',
    headerSubtitle: 'text-gray-600',
    
    // Form elements
    formButtonPrimary: 
      'bg-gradient-to-r from-[#2563EB] to-[#10B981] hover:opacity-90 transition-all duration-200 shadow-sm hover:shadow-md rounded-lg h-11 font-medium text-white',
    formFieldInput: 
      'rounded-lg border-gray-300 bg-white text-gray-900 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all placeholder:text-gray-400',
    formFieldLabel: 'font-medium text-gray-700',
    formFieldInputShowPasswordButton: 'text-gray-500 hover:text-gray-700',
    
    // Footer
    footerActionLink: 'text-[#2563EB] hover:text-[#1d4ed8] font-medium',
    footerActionText: 'text-gray-600',
    
    // Social buttons
    socialButtonsBlockButton: 
      'border-gray-300 hover:bg-gray-50 transition-all rounded-lg text-gray-700',
    socialButtonsBlockButtonText: 'font-medium text-gray-700',
    socialButtonsIconButton: 'text-gray-700',
    
    // Divider
    dividerLine: 'bg-gray-200',
    dividerText: 'text-gray-500',
    
    // Modal
    modalContent: 'rounded-2xl bg-white',
    modalCloseButton: 'text-gray-400 hover:text-gray-600',
    
    // Other elements
    identityPreviewText: 'text-gray-700',
    identityPreviewEditButton: 'text-[#2563EB] hover:text-[#1d4ed8]',
    formResendCodeLink: 'text-[#2563EB] hover:text-[#1d4ed8]',
    otpCodeFieldInput: 'border-gray-300 text-gray-900',
  },
};

export const clerkDarkAppearance = {
  baseTheme: 'dark' as any,
  variables: {
    colorPrimary: '#3B82F6',
    colorSuccess: '#34D399',
    colorDanger: '#F87171',
    colorWarning: '#FBBF24',
    colorTextOnPrimaryBackground: '#FFFFFF',
    colorBackground: '#1E293B',
    colorInputBackground: '#0F172A',
    colorInputText: '#F1F5F9',
    colorText: '#F1F5F9',
    colorTextSecondary: '#94A3B8',
    borderRadius: '0.75rem',
    fontFamily: 'Inter, system-ui, sans-serif',
  },
  elements: {
    // Root card - Dark slate background
    rootBox: 'mx-auto',
    card: 'shadow-2xl border border-slate-700 rounded-2xl bg-slate-800',
    
    // Header - Bright white text
    headerTitle: 'text-2xl font-bold text-white',
    headerSubtitle: 'text-slate-300',
    
    // Form elements - Better contrast
    formButtonPrimary: 
      'bg-gradient-to-r from-[#3B82F6] to-[#34D399] hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl rounded-lg h-11 font-medium text-white',
    formFieldInput: 
      'rounded-lg border-slate-600 bg-slate-900 text-white focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/30 transition-all placeholder:text-slate-500',
    formFieldLabel: 'font-medium text-slate-200',
    formFieldInputShowPasswordButton: 'text-slate-400 hover:text-slate-200',
    
    // Footer - Better link visibility
    footerActionLink: 'text-[#60A5FA] hover:text-[#93C5FD] font-medium',
    footerActionText: 'text-slate-300',
    
    // Social buttons - Better contrast
    socialButtonsBlockButton: 
      'border-slate-600 bg-slate-900 hover:bg-slate-700 transition-all rounded-lg text-white',
    socialButtonsBlockButtonText: 'font-medium text-white',
    socialButtonsIconButton: 'text-white',
    
    // Divider
    dividerLine: 'bg-slate-700',
    dividerText: 'text-slate-400',
    
    // Modal - Consistent dark background
    modalContent: 'rounded-2xl bg-slate-800',
    modalCloseButton: 'text-slate-400 hover:text-white',
    modalBackdrop: 'bg-black/60 backdrop-blur-sm',
    
    // Other elements - Better visibility
    identityPreviewText: 'text-slate-200',
    identityPreviewEditButton: 'text-[#60A5FA] hover:text-[#93C5FD]',
    formResendCodeLink: 'text-[#60A5FA] hover:text-[#93C5FD]',
    otpCodeFieldInput: 'border-slate-600 bg-slate-900 text-white',
    
    // Alert/Error messages
    alertText: 'text-slate-200',
    formFieldErrorText: 'text-red-400',
    formFieldSuccessText: 'text-green-400',
    formFieldWarningText: 'text-yellow-400',
    
    // Badges
    badge: 'bg-slate-700 text-slate-200',
    
    // Navbar in modal
    navbarButton: 'text-slate-300 hover:text-white',
    navbarButtonIcon: 'text-slate-300',
  },
};
