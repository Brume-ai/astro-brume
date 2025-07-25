import { Linkedin } from "lucide-react";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import vincent from '../assets/vincent.jpeg';

interface AuthorBoxProps {
  showDescription?: boolean;
  className?: string;
}

const AuthorBox = ({ showDescription = false, className = "" }: AuthorBoxProps) => {
  return (
    <div className={`bg-muted flex flex-col gap-4 rounded-lg p-5 ${className}`}>
      <Author />
      {showDescription && (
        <p>
          Développeur passionné d'IA, j'ai créé Brume pour aider les marketeurs à produire des contenus par centaines, sans compromis sur la qualité.
        </p>
      )}
      <div className="flex items-center gap-2.5">
        <Button asChild size="icon">
          <a href="https://www.linkedin.com/in/vincent-lahaye/">
            <Linkedin />
          </a>
        </Button>
      </div>
    </div>
  );
};

const Author = () => {
  return (
    <div className="flex items-center gap-2.5">
      <Avatar className="size-12 border">
        <img src={vincent.src} alt="Vincent Lahaye" />
      </Avatar>
      <div>
        <div className="text-sm font-normal leading-normal">Vincent Lahaye</div>
        <div className="text-muted-foreground text-sm font-normal leading-normal">
          Fondateur de Brume
        </div>
      </div>
    </div>
  );
};

export { AuthorBox, Author };
