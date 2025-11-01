# Clerk Theme Customization Guide

## Quick Reference

### Light Theme
```typescript
// Primary colors
colorPrimary: '#2563EB'     // Blue
colorSuccess: '#10B981'     // Green
colorBackground: '#FFFFFF'  // White
colorInputBackground: '#F9FAFB' // Light gray
```

### Dark Theme
```typescript
// Primary colors
colorPrimary: '#3B82F6'     // Lighter blue
colorSuccess: '#34D399'     // Lighter green
colorBackground: '#1E293B'  // Slate-800
colorInputBackground: '#0F172A' // Slate-900
```

## Key Elements Customized

### 1. Modal Card
- Light: White with gray border
- Dark: Slate-800 with slate-700 border

### 2. Input Fields
- Light: Light gray background, dark text
- Dark: Slate-900 background, white text

### 3. Primary Button
- Both: Gradient from primary to accent
- Hover: Opacity change + shadow increase

### 4. Social Buttons
- Light: White with gray border
- Dark: Slate-900 with slate-600 border

### 5. Links
- Light: Blue (#2563EB)
- Dark: Light blue (#60A5FA)

## How to Modify

### Change Primary Color:
```typescript
// In clerk-theme.ts
variables: {
  colorPrimary: '#YOUR_COLOR',
}
```

### Change Button Style:
```typescript
elements: {
  formButtonPrimary: 'your-custom-classes',
}
```

### Add New Element:
```typescript
elements: {
  yourElement: 'tailwind-classes',
}
```

## Available Clerk Elements

Common elements you can customize:
- `card` - Main modal card
- `headerTitle` - Modal title
- `headerSubtitle` - Modal subtitle
- `formButtonPrimary` - Submit button
- `formFieldInput` - Text inputs
- `formFieldLabel` - Input labels
- `socialButtonsBlockButton` - OAuth buttons
- `footerActionLink` - Footer links
- `dividerLine` - Separator line
- `dividerText` - "Or" text
- `modalCloseButton` - X button
- `alertText` - Alert messages
- `formFieldErrorText` - Error messages

## Responsive Classes

All elements include responsive classes:
```typescript
'text-sm sm:text-base'  // Smaller on mobile
'h-10 sm:h-11'          // Shorter on mobile
'px-3 sm:px-5'          // Less padding on mobile
```

## CSS Overrides

Additional styling in `globals.css`:
```css
[data-theme="dark"] .cl-card {
  @apply bg-slate-800 border-slate-700;
}
```

## Tips

1. **Use Tailwind classes** for consistency
2. **Test both themes** after changes
3. **Check mobile responsiveness**
4. **Maintain contrast ratios** (WCAG AA)
5. **Use CSS variables** from globals.css

## Common Customizations

### Change Border Radius:
```typescript
variables: {
  borderRadius: '1rem', // More rounded
}
```

### Change Font:
```typescript
variables: {
  fontFamily: 'Your Font, sans-serif',
}
```

### Disable Gradient Button:
```typescript
formButtonPrimary: 'bg-[#2563EB] text-white rounded-lg',
```

## Debugging

If styles don't apply:
1. Check Clerk version compatibility
2. Verify element names (check Clerk docs)
3. Use browser DevTools to inspect
4. Check CSS specificity
5. Clear browser cache

## Resources

- Clerk Appearance Docs: https://clerk.com/docs/components/customization/overview
- Tailwind CSS: https://tailwindcss.com/docs
- Color Contrast Checker: https://webaim.org/resources/contrastchecker/

---

**Last Updated:** After dark theme improvements
**Version:** Optimized for Clerk + Next.js 14
