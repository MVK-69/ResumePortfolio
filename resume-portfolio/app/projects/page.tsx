import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";


export default function Projects() {
  return (
    <section className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Resume Portfolio</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">
            A full-stack portfolio with system design principles.
          </p>
          <div className="flex gap-2 mt-4">
            <Badge>Next.js</Badge>
            <Badge>Spring Boot</Badge>
            <Badge>PostgreSQL</Badge>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span className="text-sm text-gray-500">View Project</span>
            <ExternalLink className="w-4 h-4" />
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
