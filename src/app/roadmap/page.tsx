'use client';

import { Typography } from '@/components/ui/typography';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent } from '@/components/ui/card';
import { NAVIGATION_DATA } from '@/lib/constants';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/separator-component';
import { useState, useEffect } from 'react';

export default function RoadmapPage() {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('eng-up-roadmap');
    if (saved) {
      try {
        setTimeout(() => setCompleted(JSON.parse(saved)), 0);
      } catch (e) {
        console.error('Error parsing roadmap progress', e);
      }
    }
    setTimeout(() => setIsLoaded(true), 0);
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('eng-up-roadmap', JSON.stringify(completed));
    }
  }, [completed, isLoaded]);

  // Extract Verb Tenses section
  const grammarGroup = NAVIGATION_DATA.find(
    (g) => g.title === 'Gramática Central',
  );
  const verbTenses = grammarGroup?.items.find(
    (i) => i.title === 'Tiempos Verbales',
  );

  if (!verbTenses || !verbTenses.subItems) {
    return (
      <div className="p-8 text-center text-muted-foreground">
        Error cargando el roadmap.
      </div>
    );
  }

  // Calculate stats
  const getAllTasks = () => {
    const tasks: { title: string; url: string }[] = [];
    verbTenses.subItems?.forEach((category) => {
      if ('subItems' in category && category.subItems) {
        category.subItems.forEach((task) => {
          tasks.push({ title: task.title, url: task.url });
        });
      }
    });
    return tasks;
  };

  const allTasks = getAllTasks();
  const totalTasks = allTasks.length;
  const completedTasks = allTasks.filter((t) => completed[t.url]).length;
  const progressPercentage =
    totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  const toggleTask = (url: string) => {
    setCompleted((prev) => ({
      ...prev,
      [url]: !prev[url],
    }));
  };

  return (
    <div className="space-y-8 py-8 animate-in fade-in duration-500">
      <div className="space-y-4">
        <div className="flex items-end justify-between">
          <div className="space-y-1">
            <Typography variant="h1" className="text-start">
              Roadmap de Aprendizaje
            </Typography>
            <Typography variant="p" className="text-muted-foreground">
              Sigue tu progreso en los tiempos verbales y domina la base del
              inglés.
            </Typography>
          </div>
          <div className="text-right space-y-1 hidden sm:block">
            <Typography variant="small" className="font-bold text-primary">
              {completedTasks} de {totalTasks} completados
            </Typography>
            <div className="flex justify-end">
              <Badge
                variant="outline"
                className="bg-primary/5 text-primary border-primary/20"
              >
                {Math.round(progressPercentage)}%
              </Badge>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="sm:hidden flex justify-between items-center mb-1">
            <Typography variant="small" className="font-bold text-primary">
              Progreso: {Math.round(progressPercentage)}%
            </Typography>
            <Typography variant="small" className="text-muted-foreground">
              {completedTasks}/{totalTasks}
            </Typography>
          </div>
          <Progress value={progressPercentage} className="h-3" />
        </div>
      </div>

      <Separator variant="gradient" className="my-10" />

      <div className="grid gap-8">
        {verbTenses.subItems.map((category) => {
          if (!('subItems' in category)) return null;

          const categoryTasks = category.subItems || [];
          const completedInCategory = categoryTasks.filter(
            (t) => completed[t.url],
          ).length;

          return (
            <section key={category.title} className="space-y-6">
              <div className="flex items-center gap-3">
                <Typography
                  variant="h2"
                  className="text-2xl font-semibold border-none mt-0"
                >
                  {category.title}
                </Typography>
                <Badge
                  variant="secondary"
                  className="rounded-full px-2 py-0 text-[10px]"
                >
                  {completedInCategory}/{categoryTasks.length}
                </Badge>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {categoryTasks.map((task) => (
                  <Card
                    key={task.url}
                    className={`transition-all duration-200 border-l-[3px] ${
                      completed[task.url]
                        ? 'bg-primary/5 border-primary shadow-sm ring-1 ring-primary/10'
                        : 'hover:border-primary/50'
                    }`}
                  >
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id={task.url}
                          checked={completed[task.url] || false}
                          onCheckedChange={() => toggleTask(task.url)}
                          className="w-5 h-5"
                        />
                        <label
                          htmlFor={task.url}
                          className={`text-sm font-medium leading-none cursor-pointer select-none transition-colors ${
                            completed[task.url]
                              ? 'text-primary'
                              : 'text-foreground'
                          }`}
                        >
                          {task.title}
                        </label>
                      </div>

                      {completed[task.url] && (
                        <Badge
                          variant="outline"
                          className="text-[9px] bg-primary/10 text-primary border-transparent h-5"
                        >
                          ¡Dominado!
                        </Badge>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <Separator />

      <div className="bg-muted/30 p-6 rounded-xl border border-dashed text-center">
        <Typography
          variant="p"
          className="text-muted-foreground text-sm italic"
        >
          "The beautiful thing about learning is that no one can take it away
          from you." — B.B. King
        </Typography>
      </div>
    </div>
  );
}
