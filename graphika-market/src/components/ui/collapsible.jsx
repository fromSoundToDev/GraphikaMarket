import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

const Collapsible = (props) => <CollapsiblePrimitive.Root {...props} />

const CollapsibleTrigger = (props) => <CollapsiblePrimitive.Trigger {...props} />

const CollapsibleContent = (props) => <CollapsiblePrimitive.Content {...props} />

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
