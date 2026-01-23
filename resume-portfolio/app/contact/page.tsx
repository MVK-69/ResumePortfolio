"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <form className="max-w-xl mx-auto p-8 space-y-4">
      <Input placeholder="Your Name" />
      <Input placeholder="Email" />
      <Textarea placeholder="Message" />
      <Button type="submit">Send</Button>
    </form>
  );
}
