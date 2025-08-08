import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

export function Dialog({ children }) {
  return <DialogPrimitive.Root>{children}</DialogPrimitive.Root>
}

export function DialogTrigger({ children }) {
  return <DialogPrimitive.Trigger>{children}</DialogPrimitive.Trigger>
}

export function DialogPortal({ children }) {
  return <DialogPrimitive.Portal>{children}</DialogPrimitive.Portal>
}

export function DialogClose({ children, className }) {
  return (
    <DialogPrimitive.Close className={className}>
      {children}
    </DialogPrimitive.Close>
  )
}

export function DialogOverlay({ className }) {
  return (
    <DialogPrimitive.Overlay
      className={`fixed inset-0 z-50 bg-black/80 ${
        className || ""
      }`}
    />
  )
}

export function DialogContent({ children, className }) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        className={`fixed left-1/2 top-1/2 z-50 w-full max-w-lg transform -translate-x-1/2 -translate-y-1/2 gap-4 border bg-white p-6 shadow-lg duration-200 sm:rounded-lg ${
          className || ""
        }`}
      >
        {children}
        <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

export function DialogHeader({ children, className }) {
  return (
    <div className={`flex flex-col space-y-1.5 text-center sm:text-left ${className || ""}`}>
      {children}
    </div>
  )
}

export function DialogFooter({ children, className }) {
  return (
    <div className={`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 ${className || ""}`}>
      {children}
    </div>
  )
}

export function DialogTitle({ children, className }) {
  return (
    <DialogPrimitive.Title className={`text-lg font-semibold ${className || ""}`}>
      {children}
    </DialogPrimitive.Title>
  )
}

export function DialogDescription({ children, className }) {
  return (
    <DialogPrimitive.Description className={`text-sm text-gray-500 ${className || ""}`}>
      {children}
    </DialogPrimitive.Description>
  )
}
