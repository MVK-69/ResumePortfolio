import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">
        Hi, I’m Vinay Kumar 👋
      </h1>
      <p className="text-gray-500">
        Java Developer | Spring Boot | System Design
      </p>

      <Button size="lg">
        View My Projects
      </Button>
    </main>
  );
}
