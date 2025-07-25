import { Separator } from "@/components/ui/separator";
import jerome from '../assets/jerome.jpg';
import victor from '../assets/victor.jpg';
import goodflair from '../assets/logo-goodflair.png';
import khosi from '../assets/logo-khosi.png';

const Casestudies2 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col gap-6 text-center">
          <p className="font-medium">4500+ Satisfied Customers</p>
          <h2 className="text-4xl font-medium md:text-5xl">
            Real results from real users
          </h2>
        </div>
        <div className="mt-20">
          <div className="grid gap-16 lg:grid-cols-3 xl:gap-24">
            <div className="flex flex-col gap-10 border-border sm:flex-row lg:col-span-2 lg:border-r lg:pr-16 xl:pr-24">
              <img
                src={jerome.src}
                alt="placeholder"
                className="aspect-29/35 h-full w-full max-w-60 rounded-2xl object-cover"
              />
              <div className="flex h-full flex-col justify-between gap-10">
                <q className="sm:text-xl">
                  Brume est un excellent outil pour générer des contenus d'une grande qualité, faisant économiser un temps précieux à nos équipes de rédacteur.
                </q>
                <div className="flex items-end justify-between gap-6">
                  <div className="flex flex-col gap-1">
                    <p className="text-lg font-semibold text-primary">
                      Jérôme Brisseau
                    </p>
                    <p className="text-muted-foreground">CEO & Co-founder</p>
                  </div>
                  <img
                    src={goodflair.src}
                    alt="logo Goodflair"
                    className="h-10"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-10 self-center lg:flex-col">
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-medium text-primary sm:text-5xl">
                  +20%
                </p>
                <p className="font-semibold text-primary">
                  de trafic organique
                </p>
                <p className="text-muted-foreground">par mois</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-medium text-primary sm:text-5xl">
                  x10
                </p>
                <p className="font-semibold text-primary">de pages publiées </p>
                <p className="text-muted-foreground">par mois</p>
              </div>
            </div>
          </div>
          <Separator className="my-20" />
          <div className="grid gap-16 lg:grid-cols-3 xl:gap-24">
            <div className="flex flex-col gap-10 border-border sm:flex-row lg:col-span-2 lg:border-r lg:pr-16 xl:pr-24">
              <img
                src={victor.src}
                alt="placeholder"
                className="aspect-29/35 h-full w-full max-w-60 rounded-2xl object-cover"
              />
              <div className="flex h-full flex-col justify-between gap-10">
                <q className="sm:text-xl">
                  Plateforme très intuitive qui permet de produire des contenus web uniques, de qualité et ultra personnalisés.
                </q>
                <div className="flex items-end justify-between gap-6">
                  <div className="flex flex-col gap-1">
                    <p className="text-lg font-semibold text-primary">
                      Victor Lerat
                    </p>
                    <p className="text-muted-foreground">Co-fondateur KHUMBU · KHOSI · alfie</p>
                  </div>
                  <img
                    src={khosi.src}
                    alt="logo"
                    className="h-24"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-10 self-center lg:flex-col">
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-medium text-primary sm:text-5xl">
                  4.2x
                </p>
                <p className="font-semibold text-primary">Team Efficiency</p>
                <p className="text-muted-foreground">
                  Proven productivity gains
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-medium text-primary sm:text-5xl">
                  72%
                </p>
                <p className="font-semibold text-primary">Reduced Task Time</p>
                <p className="text-muted-foreground">Across all projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Casestudies2 };
