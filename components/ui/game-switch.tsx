"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=checked]:bg-[#010F10] data-[state=unchecked]:bg-[#010F10] focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-[40px] w-[80px] shrink-0 items-center rounded-full border-[1px] data-[state=unchecked]:border-[#263238] data-[state=checked]:border-[#003B3E] shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-background data-[state=unchecked]:bg-[#55656D] data-[state=checked]:bg-[#00F0FF] pointer-events-none block size-[30px] rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[46px] data-[state=unchecked]:translate-x-[2px]"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
