import { User, Pencil, Mail, MessageSquare } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import ButtonPrimary from "../sections-part/ButtonPrimary"

export default function FormContact() {
    return (
        <form className="space-y-5 max-w-[35rem] mx-auto">
            <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-300 w-5 h-5" />
                <Input
                    type="text"
                    placeholder="Full Name"
                    className="pl-10 !text-base"
                />
            </div>

            <div className="relative">
                <Pencil className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-300 w-5 h-5" />
                <Input
                    type="text"
                    placeholder="Subject"
                    className="pl-10 !text-base"
                />
            </div>

            <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-300 w-5 h-5" />
                <Input
                    type="email"
                    placeholder="Email"
                    className="pl-10 !text-base"
                />
            </div>

            <div className="relative">
                <MessageSquare className="absolute left-3 top-4 text-red-300 w-5 h-5" />
                <Textarea
                placeholder="Message"
                className="pl-10 pt-3 !text-base"
                rows={5}
                />
            </div>

            <div className="text-right">
                <ButtonPrimary 
                    text='Send Message' 
                    type="submit"
                />
            </div>
        </form>
    )
}
