import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MenuIcon, Paperclip } from "lucide-react"

export default function ResumeHeader() {
  return (
    <header>
      <div className="flex items-center justify-between border bg-gray-50/95 px-4 py-2 dark:bg-zinc-900/95">
        <Avatar className="h-8 w-8 border border-border">
          <AvatarImage src="/profile.jpg" alt="Your Name" />
          <AvatarFallback>SS</AvatarFallback>
        </Avatar>
        <div className="block sm:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" />}>
              <MenuIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuItem>Github</DropdownMenuItem>
                <DropdownMenuItem>LinkedIn</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuItem>Email</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Download Resume</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="hidden flex-row gap-10 sm:flex">
          <p>Email</p>
          <p>Phone</p>
          <p>LinkedIn</p>
          <p>GitHub</p>
          <div className="flex items-center gap-2">
            <Paperclip className="mt-1 text-muted-foreground" size={15} />
            <p>Resume</p>
          </div>
        </div>
      </div>
    </header>
  )
}
