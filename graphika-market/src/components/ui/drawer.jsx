import { Drawer as DrawerPrimitive } from "vaul"
import { cn } from "../../lib/utils"

export function Drawer({ shouldScaleBackground = true, ...props }) {
  return <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
}

export const DrawerTrigger = DrawerPrimitive.Trigger
export const DrawerPortal = DrawerPrimitive.Portal
export const DrawerClose = DrawerPrimitive.Close

export function DrawerOverlay({ className, ...props }) {
  return (
    <DrawerPrimitive.Overlay
      className={cn("fixed inset-0 z-50 bg-black/80", className)}
      {...props}
    />
  )
}

export function DrawerContent({ className, children, ...props }) {
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
          className
        )}
        {...props}
      >
        <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
}

export function DrawerHeader({ className, ...props }) {
  return (
    <div className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)} {...props} />
  )
}

export function DrawerFooter({ className, ...props }) {
  return (
    <div className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />
  )
}

export function DrawerTitle({ className, ...props }) {
  return (
    <DrawerPrimitive.Title
      className={cn("text-lg font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  )
}

export function DrawerDescription({ className, ...props }) {
  return (
    <DrawerPrimitive.Description
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}
