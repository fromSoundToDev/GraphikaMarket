import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
  forwardRef,
} from "react";
import { Slot } from "@radix-ui/react-slot";
import { PanelLeft } from "lucide-react";
import { useIsMobile } from "../../hooks/use-mobile";
import { cn } from "../../lib/utils";
import { Button } from "../../components/ui/button";
import { Sheet, SheetContent } from "../../components/ui/sheet";
import { Skeleton } from "../../components/ui/skeleton";
import { Tooltip,TooltipContent,TooltipTrigger } from "../../components/ui/tooltip";

// Constantes simples
const SIDEBAR_COOKIE_NAME = "sidebar:state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

// Contexte Sidebar
const SidebarContext = React.createContext(null);

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context)
    throw new Error("useSidebar must be used within SidebarProvider");
  return context;
}

// Provider Sidebar
export const SidebarProvider = forwardRef(
  (
    {
      defaultOpen = true,
      open: openProp,
      onOpenChange,
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const isMobile = useIsMobile();
    const [openMobile, setOpenMobile] = useState(false);
    const [internalOpen, setInternalOpen] = useState(defaultOpen);
    const open = openProp !== undefined ? openProp : internalOpen;

    const setOpen = useCallback(
      (value) => {
        const newState = typeof value === "function" ? value(open) : value;
        if (onOpenChange) onOpenChange(newState);
        else setInternalOpen(newState);
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${newState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
      },
      [onOpenChange, open]
    );

    const toggleSidebar = useCallback(() => {
      if (isMobile) setOpenMobile((o) => !o);
      else setOpen((o) => !o);
    }, [isMobile, setOpen]);

    useEffect(() => {
      const handler = (e) => {
        if (e.key === SIDEBAR_KEYBOARD_SHORTCUT && (e.ctrlKey || e.metaKey)) {
          e.preventDefault();
          toggleSidebar();
        }
      };
      window.addEventListener("keydown", handler);
      return () => window.removeEventListener("keydown", handler);
    }, [toggleSidebar]);

    const state = open ? "expanded" : "collapsed";

    const contextValue = useMemo(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
    );

    return (
      <SidebarContext.Provider value={contextValue}>
        <div
          style={{
            "--sidebar-width": SIDEBAR_WIDTH,
            "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
            ...style,
          }}
          className={cn("flex min-h-screen w-full", className)}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </SidebarContext.Provider>
    );
  }
);
SidebarProvider.displayName = "SidebarProvider";

// Sidebar lui-même
export const Sidebar = forwardRef(
  (
    {
      side = "left",
      variant = "sidebar",
      collapsible = "offcanvas",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

    if (collapsible === "none") {
      return (
        <div
          className={cn(
            "flex h-full w-[var(--sidebar-width)] flex-col bg-gray-800 text-white",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      );
    }

    if (isMobile) {
      return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
          <SheetContent
            data-sidebar="sidebar"
            data-mobile="true"
            className="w-[var(--sidebar-width)] bg-gray-800 p-0 text-white"
            style={{ "--sidebar-width": SIDEBAR_WIDTH_MOBILE }}
            side={side}
          >
            <div className="flex flex-col h-full w-full">{children}</div>
          </SheetContent>
        </Sheet>
      );
    }

    return (
      <div
        ref={ref}
        className="hidden md:block text-white"
        data-state={state}
        data-collapsible={state === "collapsed" ? collapsible : ""}
        data-variant={variant}
        data-side={side}
      >
        <div
          className={cn(
            "duration-200 relative h-screen w-[var(--sidebar-width)] bg-transparent transition-width ease-linear",
            side === "left" ? "left-0" : "right-0",
            className
          )}
        />
        <div
          className={cn(
            "fixed inset-y-0 z-10 hidden h-screen w-[var(--sidebar-width)] md:flex",
            side === "left" ? "left-0" : "right-0",
            "bg-gray-800 p-2",
            className
          )}
          {...props}
        >
          <div
            data-sidebar="sidebar"
            className="flex flex-col h-full w-full bg-gray-900 rounded-lg shadow-lg"
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
);
Sidebar.displayName = "Sidebar";

// SidebarTrigger
export const SidebarTrigger = forwardRef(
  ({ className, onClick, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();
    return (
      <Button
        ref={ref}
        variant="ghost"
        size="icon"
        className={cn("h-7 w-7", className)}
        onClick={(e) => {
          if (onClick) onClick(e);
          toggleSidebar();
        }}
        {...props}
      >
        <PanelLeft />
        <span className="sr-only">Toggle Sidebar</span>
      </Button>
    );
  }
);
SidebarTrigger.displayName = "SidebarTrigger";

// SidebarRail
export const SidebarRail = forwardRef(({ className, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();
  return (
    <button
      ref={ref}
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "absolute inset-y-0 hidden w-4 -translate-x-1/2 transition-all ease-linear sm:flex",
        className
      )}
      {...props}
    />
  );
});
SidebarRail.displayName = "SidebarRail";

export const SidebarInset = React.forwardRef(({ className = "", ...props }, ref) => (
  <main
    ref={ref}
    className={`relative flex min-h-screen flex-1 flex-col bg-background ${className}`}
    {...props}
  />
));
SidebarInset.displayName = "SidebarInset";

export const SidebarInput = React.forwardRef(({ className = "", ...props }, ref) => (
  <input
    ref={ref}
    data-sidebar="input"
    className={`h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring ${className}`}
    {...props}
  />
));
SidebarInput.displayName = "SidebarInput";

export const SidebarHeader = React.forwardRef(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="header"
    className={`flex flex-col gap-2 p-2 ${className}`}
    {...props}
  />
));
SidebarHeader.displayName = "SidebarHeader";

export const SidebarFooter = React.forwardRef(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="footer"
    className={`flex flex-col gap-2 p-2 ${className}`}
    {...props}
  />
));
SidebarFooter.displayName = "SidebarFooter";

export const SidebarSeparator = React.forwardRef(
  ({ className = "", ...props }, ref) => (
    <hr
      ref={ref}
      data-sidebar="separator"
      className={`mx-2 w-auto bg-sidebar-border ${className}`}
      {...props}
    />
  )
);
SidebarSeparator.displayName = "SidebarSeparator";

export const SidebarContent = React.forwardRef(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="content"
    className={`flex min-h-0 flex-1 flex-col gap-2 overflow-auto ${className}`}
    {...props}
  />
));
SidebarContent.displayName = "SidebarContent";

export const SidebarGroup = React.forwardRef(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="group"
    className={`relative flex w-full min-w-0 flex-col p-2 ${className}`}
    {...props}
  />
));
SidebarGroup.displayName = "SidebarGroup";

export const SidebarGroupLabel = React.forwardRef(
  ({ className = "", asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : "div";
    return (
      <Comp
        ref={ref}
        data-sidebar="group-label"
        className={`duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opacity] ease-linear focus-visible:ring-2 ${className}`}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
SidebarGroupLabel.displayName = "SidebarGroupLabel";

export const SidebarGroupAction = React.forwardRef(
  ({ className = "", asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : "button";
    return (
      <Comp
        ref={ref}
        data-sidebar="group-action"
        className={`absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 ${className}`}
        {...props}
      />
    );
  }
);
SidebarGroupAction.displayName = "SidebarGroupAction";

export const SidebarGroupContent = React.forwardRef(
  ({ className = "", ...props }, ref) => (
    <div
      ref={ref}
      data-sidebar="group-content"
      className={`w-full text-sm ${className}`}
      {...props}
    />
  )
);
SidebarGroupContent.displayName = "SidebarGroupContent";

export const SidebarMenu = React.forwardRef(({ className = "", ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu"
    className={`flex w-full min-w-0 flex-col gap-1 ${className}`}
    {...props}
  />
));
SidebarMenu.displayName = "SidebarMenu";

export const SidebarMenuItem = React.forwardRef(
  ({ className = "", ...props }, ref) => (
    <li
      ref={ref}
      data-sidebar="menu-item"
      className={`group/menu-item relative ${className}`}
      {...props}
    />
  )
);
SidebarMenuItem.displayName = "SidebarMenuItem";

export const SidebarMenuButton = React.forwardRef(function SidebarMenuButton(
  props,
  ref
) {
  const {
    asChild = false,
    isActive = false,
    variant = "default",
    size = "default",
    tooltip,
    className,
    ...rest
  } = props;

  const sidebarMenuButtonVariants = ({
    variant = "default",
    size = "default",
  }) => {
    const base =
      "flex items-center gap-2 rounded-md text-sidebar-foreground outline-none ring-sidebar-ring transition-colors duration-200";

    const variants = {
      default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
      ghost: "bg-transparent hover:bg-sidebar-muted",
    };

    const sizes = {
      default: "h-8 px-2 text-sm",
      sm: "h-7 px-2 text-xs",
    };

    return cn(
      base,
      variants[variant] || variants.default,
      sizes[size] || sizes.default
    );
  };
  const Comp = asChild ? Slot : "button";
  const { isMobile, state } = useSidebar();

  const button = (
    <Comp
      ref={ref}
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...rest}
    />
  );

  if (!tooltip) return button;

  const tooltipProps =
    typeof tooltip === "string" ? { children: tooltip } : tooltip;

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== "collapsed" || isMobile}
        {...tooltipProps}
      />
    </Tooltip>
  );
});
SidebarMenuButton.displayName = "SidebarMenuButton";

export const SidebarMenuAction = React.forwardRef(function SidebarMenuAction(
  props,
  ref
) {
  const { className, asChild = false, showOnHover = false, ...rest } = props;
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-action"
      className={cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className
      )}
      {...rest}
    />
  );
});
SidebarMenuAction.displayName = "SidebarMenuAction";

export const SidebarMenuBadge = React.forwardRef(function SidebarMenuBadge(
  props,
  ref
) {
  const { className, ...rest } = props;

  return (
    <div
      ref={ref}
      data-sidebar="menu-badge"
      className={cn(
        "absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...rest}
    />
  );
});
SidebarMenuBadge.displayName = "SidebarMenuBadge";

export const SidebarMenuSkeleton = React.forwardRef(function SidebarMenuSkeleton(
  { className, showIcon = false, ...props },
  ref
) {
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);

  return (
    <div
      ref={ref}
      data-sidebar="menu-skeleton"
      className={cn("rounded-md h-8 flex gap-2 px-2 items-center", className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="size-4 rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="h-4 flex-1 max-w-[--skeleton-width]"
        data-sidebar="menu-skeleton-text"
        style={{ "--skeleton-width": width }}
      />
    </div>
  );
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";

export const SidebarMenuSub = React.forwardRef(function SidebarMenuSub(
  { className, ...props },
  ref
) {
  return (
    <ul
      ref={ref}
      data-sidebar="menu-sub"
      className={cn(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  );
});
SidebarMenuSub.displayName = "SidebarMenuSub";

export const SidebarMenuSubItem = React.forwardRef(function SidebarMenuSubItem(
  props,
  ref
) {
  return <li ref={ref} {...props} />;
});
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";

export const SidebarMenuSubButton = React.forwardRef(function SidebarMenuSubButton(
  { asChild = false, size = "md", isActive, className, ...props },
  ref
) {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  );
});
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";


