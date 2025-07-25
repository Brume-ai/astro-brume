import {
  BarChart,
  Bell,
  Bot,
  Check,
  List,
  MessageCircleOff,
  MessageSquare,
  Target,
  Users,
  X,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

const Feature180 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-5 pb-20 text-center">
          <Badge variant="outline">How it works</Badge>
          <h2 className="text-3xl font-medium text-pretty md:text-5xl">
            Ce que Brume change dans votre production.
          </h2>
          <p className="text-muted-foreground">
            Moins de tâtonnements, plus de stratégie exécutée.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 md:gap-5">
          <div className="flex flex-col items-center gap-5 md:gap-9">
            <div className="flex items-center gap-3">
              <X className="h-6 text-red-400" />
              <p className="text-xl font-medium">Sans Brume.ai</p>
            </div>
            <div className="h-full w-full rounded-md border p-9">
              <ul className="flex flex-col gap-8 font-medium text-primary/70">
                <li className="flex items-start gap-4">
                  <Users className="h-6 shrink-0" />
                  <p>Générer un contenu à la fois sur ChatGPT, via une discussion fastidieuse</p>
                </li>
                <li className="flex items-start gap-4">
                  <MessageCircleOff className="h-6 shrink-0" />
                  <p>Devoir tout vérifier à la main</p>
                </li>
                <li className="flex items-start gap-4">
                  <List className="h-6 shrink-0" />
                  <p>Contenu impersonnel</p>
                </li>
                <li className="flex items-start gap-4">
                  <MessageSquare className="h-6 shrink-0" />
                  <p>Passer du temps à tout corriger</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 md:gap-9">
            <div className="flex items-center gap-3">
              <Check className="h-6 text-lime-400" />
              <p className="text-xl font-medium">Avec Brume.ai</p>
            </div>
            <div className="w-full rounded-md bg-linear-to-br from-primary via-primary/20 via-30% to-primary p-0.5">
              <div className="rounded-sm bg-background p-9">
                <ul className="flex flex-col gap-8 font-medium">
                  <li className="flex items-start gap-4">
                    <Target className="h-6 shrink-0" />
                    <p>Générer des dizaines de contenus, via une structure réutilisable</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <Bell className="h-6 shrink-0" />
                    <p>Relecture IA intégrée</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <BarChart className="h-6 shrink-0" />
                    <p>Ton de marque intégré</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <Bot className="h-6 shrink-0" />
                    <p>Générer des textes prêts à publier</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature180 };
