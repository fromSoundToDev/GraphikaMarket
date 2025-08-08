import * as Dropdown from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"
import { cn } from "../../lib/utils"

export const DropdownMenu = Dropdown.Root
export const DropdownMenuTrigger = Dropdown.Trigger
export const DropdownMenuGroup = Dropdown.Group
export const DropdownMenuPortal = Dropdown.Portal
export const DropdownMenuSub = Dropdown.Sub
export const DropdownMenuRadioGroup = Dropdown.RadioGroup

export function DropdownMenuSubTrigger({ className, inset, children, ...props }) {
  return (
    <Dropdown.SubTrigger
      className={cn(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        inset && "pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto h-4 w-4" />
    </Dropdown.SubTrigger>
  )
}

export function DropdownMenuSubContent({ className, ...props }) {
  return (
    <Dropdown.SubContent
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  )
}

export function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
  return (
    <Dropdown.Portal>
      <Dropdown.Content
        sideOffset={sideOffset}
        className={cn(
          "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props}
      />
    </Dropdown.Portal>
  )
}

export function DropdownMenuItem({ className, inset, ...props }) {
  return (
    <Dropdown.Item
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  )
}

export function DropdownMenuCheckboxItem({ className, children, checked, ...props }) {
  return (
    <Dropdown.CheckboxItem
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <Dropdown.ItemIndicator>
          <Check className="h-4 w-4" />
        </Dropdown.ItemIndicator>
      </span>
      {children}
    </Dropdown.CheckboxItem>
  )
}

export function DropdownMenuRadioItem({ className, children, ...props }) {
  return (
    <Dropdown.RadioItem
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <Dropdown.ItemIndicator>
          <Circle className="h-2 w-2 fill-current" />
        </Dropdown.ItemIndicator>
      </span>
      {children}
    </Dropdown.RadioItem>
  )
}

export function DropdownMenuLabel({ className, inset, ...props }) {
  return (
    <Dropdown.Label
      className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
      {...props}
    />
  )
}

export function DropdownMenuSeparator({ className, ...props }) {
  return <Dropdown.Separator className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
}

export function DropdownMenuShortcut({ className, ...props }) {
  return (
    <span className={cn("ml-auto text-xs tracking-widest opacity-60", className)} {...props} />
  )
}
