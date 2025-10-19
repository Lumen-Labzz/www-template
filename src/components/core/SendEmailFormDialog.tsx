import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Send } from "lucide-react";

const SendEmailFormDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center justify-center size-12">
        <Send className="size-8" />
      </DialogTrigger>

      <DialogContent>
        <form>
          <DialogHeader>
            <DialogTitle>Send us a message!</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SendEmailFormDialog;
