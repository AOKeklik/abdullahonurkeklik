import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import ButtonPrimary from '../sections-part/ButtonPrimary'

export default function FormRequestResume() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <ButtonPrimary text='Request Resume' />
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Request My Resume</DialogTitle>
                    <DialogDescription>
                        Fill out the form below and I’ll send you my CV.
                    </DialogDescription>
                </DialogHeader>
                <form className="space-y-4">
                    <Input placeholder="Full Name" required />
                    <Input type="email" placeholder="Email Address" required />
                    <Input placeholder="Position / Company" />
                    <Textarea className="mb-7" placeholder="What interests you about my CV?" rows={3} />
                    <ButtonPrimary type="submit" className="w-full" text='Send Request' />
                </form>
            </DialogContent>
        </Dialog>
    )
}
