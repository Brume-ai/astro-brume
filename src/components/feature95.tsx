import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

import { Badge } from "@/components/ui/badge";

const Feature95 = () => {
  return (
    <section className="py-32">
      <div className="lg:container">
        <div className="mb-16 max-w-xl px-8 lg:px-0">
          <Badge variant="outline">Fonctionnement en 4 étapes</Badge>
          <h2 className="mt-6 mb-3 text-2xl font-medium text-balance md:text-4xl">
            Vous avez la stratégie. Brume écrit le reste.
          </h2>
          <p>Deploy a fully optimized system and upgrade your current setup.</p>
        </div>
        <div>
          <Tabs defaultValue="tab-1">
            <TabsList className="relative grid items-start gap-6 lg:grid-cols-4">
              <div className="absolute top-[30px] right-0 left-4 -z-10 hidden h-px bg-input lg:block"></div>
              <TabsTrigger
                value="tab-1"
                className="group pointer-events-none lg:pointer-events-auto"
              >
                <div className="flex gap-4 rounded-md px-8 py-4 text-left hover:bg-muted lg:block lg:px-4">
                  <div className="flex flex-col items-center lg:contents">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full border bg-background font-mono text-xs font-medium lg:group-data-[state=active]:bg-primary lg:group-data-[state=active]:text-background lg:group-data-[state=active]:ring lg:group-data-[state=active]:ring-muted-foreground/40">
                      1
                    </span>
                    <span className="h-full w-px bg-input lg:hidden"></span>
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium lg:mt-4">
                      Structurez
                    </h3>
                    <p className="text-sm">
                      Définissez vos modèles, clusters, templates de pages.
                    </p>
                  </div>
                </div>
                <div className="mt-6 block border bg-muted/50 px-4 py-6 lg:hidden">
                  <div className="aspect-video">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                      alt="placeholder"
                      className="h-full w-full rounded-md border object-cover shadow"
                    />
                  </div>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="tab-2"
                className="group pointer-events-none lg:pointer-events-auto"
              >
                <div className="flex gap-4 rounded-md px-8 py-4 text-left hover:bg-muted lg:block lg:px-4">
                  <div className="flex flex-col items-center lg:contents">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full border bg-background font-mono text-xs font-medium group-data-[state=active]:bg-primary group-data-[state=active]:text-background group-data-[state=active]:ring group-data-[state=active]:ring-muted-foreground/40">
                      2
                    </span>
                    <span className="h-full w-px bg-input lg:hidden"></span>
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium lg:mt-4">
                      Lancez vos agents IA
                    </h3>
                    <p className="text-sm">
                      Angle, ton, mots-clés, cibles, SEO… tout est respecté.
                    </p>
                  </div>
                </div>
                <div className="mt-6 block border bg-muted/50 px-4 py-6 lg:hidden">
                  <div className="aspect-video">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg"
                      alt="placeholder"
                      className="h-full w-full rounded-md border object-cover shadow"
                    />
                  </div>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="tab-3"
                className="group pointer-events-none lg:pointer-events-auto"
              >
                <div className="flex gap-4 rounded-md px-8 py-4 text-left hover:bg-muted lg:block lg:px-4">
                  <div className="flex flex-col items-center lg:contents">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full border bg-background font-mono text-xs font-medium group-data-[state=active]:bg-primary group-data-[state=active]:text-background group-data-[state=active]:ring group-data-[state=active]:ring-muted-foreground/40">
                      3
                    </span>
                    <span className="h-full w-px bg-input lg:hidden"></span>
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium lg:mt-4">
                      Vérifiez ou laissez faire
                    </h3>
                    <p className="text-sm">
                      Chaque texte est relu, corrigé, et vérifiable.
                    </p>
                  </div>
                </div>
                <div className="mt-6 block border bg-muted/50 px-4 py-6 lg:hidden">
                  <div className="aspect-video">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg"
                      alt="placeholder"
                      className="h-full w-full rounded-md border object-cover shadow"
                    />
                  </div>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="tab-4"
                className="group pointer-events-none lg:pointer-events-auto"
              >
                <div className="flex gap-4 rounded-md px-8 py-4 text-left hover:bg-muted lg:block lg:px-4">
                  <div className="flex flex-col items-center lg:contents">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full border bg-background font-mono text-xs font-medium group-data-[state=active]:bg-primary group-data-[state=active]:text-background group-data-[state=active]:ring group-data-[state=active]:ring-muted-foreground/40">
                      4
                    </span>
                    <span className="h-full w-px bg-input lg:hidden"></span>
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium lg:mt-4">
                      Publiez
                    </h3>
                    <p className="text-sm">
                      API, WordPress, Notion, Zapier : Brume s’intègre.
                    </p>
                  </div>
                </div>
                <div className="mt-6 block border bg-muted/50 px-4 py-6 lg:hidden">
                  <div className="aspect-video">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                      alt="placeholder"
                      className="h-full w-full rounded-md border object-cover shadow"
                    />
                  </div>
                </div>
              </TabsTrigger>
            </TabsList>
            <div className="mt-10 hidden rounded-xl border bg-muted/50 p-10 lg:block">
              <TabsContent value="tab-1" className="aspect-video">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                  alt="placeholder"
                  className="h-full w-full rounded-xl border object-cover shadow"
                />
              </TabsContent>
              <TabsContent value="tab-2" className="aspect-video">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg"
                  alt="placeholder"
                  className="h-full w-full rounded-xl border object-cover shadow"
                />
              </TabsContent>
              <TabsContent value="tab-3" className="aspect-video">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg"
                  alt="placeholder"
                  className="h-full w-full rounded-xl border object-cover shadow"
                />
              </TabsContent>
              <TabsContent value="tab-4" className="aspect-video">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                  alt="placeholder"
                  className="h-full w-full rounded-xl border object-cover shadow"
                />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export { Feature95 };
