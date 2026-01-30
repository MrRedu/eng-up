'use client';

import * as React from 'react';
import { Typography } from '@/components/ui/typography';
import { NAVIGATION_DATA } from '@/lib/constants';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/separator-component';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Search } from 'lucide-react';

interface TopicStatus {
  title: string;
  url: string;
  group: string;
  category: string;
}

export default function TopicsStatusPage() {
  const [search, setSearch] = React.useState('');
  const [status, setStatus] = React.useState<
    Record<string, { done: boolean; verified: boolean }>
  >({});
  const [isLoaded, setIsLoaded] = React.useState(false);

  // Flatten topics from NAVIGATION_DATA
  const allTopics = React.useMemo(() => {
    const topics: TopicStatus[] = [];

    NAVIGATION_DATA.forEach((group) => {
      group.items.forEach((item) => {
        // Handle items with direct URL (like Inicio, Glosario, Roadmap)
        if (
          item.url &&
          item.url !== '/' &&
          item.url !== '/topics' &&
          item.url !== '/roadmap'
        ) {
          topics.push({
            title: item.title,
            url: item.url,
            group: group.title,
            category: item.title,
          });
        }

        // Handle subItems
        if (item.subItems) {
          item.subItems.forEach((sub) => {
            if ('url' in sub && sub.url) {
              // It's a NavLeaf
              topics.push({
                title: sub.title,
                url: sub.url,
                group: group.title,
                category: item.title,
              });
            } else if ('subItems' in sub && sub.subItems) {
              // It's a NavSubItem (like Presente, Pasado in Tiempos Verbales)
              sub.subItems.forEach((leaf) => {
                topics.push({
                  title: leaf.title,
                  url: leaf.url,
                  group: group.title,
                  category: `${item.title} > ${sub.title}`,
                });
              });
            }
          });
        }
      });
    });

    return topics;
  }, []);

  // Load from localStorage
  React.useEffect(() => {
    const saved = localStorage.getItem('eng-up-topics-progress');
    if (saved) {
      try {
        setStatus(JSON.parse(saved));
      } catch (e) {
        console.error('Error loading progress', e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage
  React.useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('eng-up-topics-progress', JSON.stringify(status));
    }
  }, [status, isLoaded]);

  const toggleStatus = (url: string, field: 'done' | 'verified') => {
    setStatus((prev) => {
      const current = prev[url] || { done: false, verified: false };
      return {
        ...prev,
        [url]: { ...current, [field]: !current[field] },
      };
    });
  };

  const filteredTopics = allTopics.filter(
    (t) =>
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.category.toLowerCase().includes(search.toLowerCase()),
  );

  const stats = {
    total: allTopics.length,
    done: allTopics.filter((t) => status[t.url]?.done).length,
    verified: allTopics.filter((t) => status[t.url]?.verified).length,
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-4 space-y-8 animate-in fade-in duration-500">
      <Typography variant="h1">Estado de Temas</Typography>
      <Typography variant="p" className="text-muted-foreground text-center">
        Control personal del desarrollo y verificación de contenidos.
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4 flex flex-col items-center justify-center space-y-1 bg-primary/5 border-primary/20">
          <Typography variant="h3" className="text-2xl font-bold mt-0!">
            {stats.total}
          </Typography>
          <Typography
            variant="small"
            className="text-muted-foreground uppercase text-[10px] tracking-widest font-bold"
          >
            Total Temas
          </Typography>
        </Card>
        <Card className="p-4 flex flex-col items-center justify-center space-y-1 bg-green-500/5 border-green-500/20">
          <Typography
            variant="h3"
            className="text-2xl font-bold mt-0! text-green-600 dark:text-green-400"
          >
            {stats.done}
          </Typography>
          <Typography
            variant="small"
            className="text-muted-foreground uppercase text-[10px] tracking-widest font-bold"
          >
            Completados
          </Typography>
        </Card>
        <Card className="p-4 flex flex-col items-center justify-center space-y-1 bg-blue-500/5 border-blue-500/20">
          <Typography
            variant="h3"
            className="text-2xl font-bold mt-0! text-blue-600 dark:text-blue-400"
          >
            {stats.verified}
          </Typography>
          <Typography
            variant="small"
            className="text-muted-foreground uppercase text-[10px] tracking-widest font-bold"
          >
            Verificados
          </Typography>
        </Card>
      </div>

      <Separator variant="gradient" />

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar tema o categoría..."
          className="pl-10 h-11 bg-muted/20 border-border/50 focus:border-primary/50 transition-all"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Table className="bg-card">
        <TableHeader className="bg-muted/50">
          <TableRow>
            <TableHead className="w-[40%] text-xs uppercase tracking-wider font-bold">
              Tema
            </TableHead>
            <TableHead className="w-[30%] text-xs uppercase tracking-wider font-bold">
              Categoría
            </TableHead>
            <TableHead className="w-[15%] text-center text-xs uppercase tracking-wider font-bold">
              Hecho
            </TableHead>
            <TableHead className="w-[15%] text-center text-xs uppercase tracking-wider font-bold">
              Verificado
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredTopics.length > 0 ? (
            filteredTopics.map((topic) => (
              <TableRow
                key={topic.url}
                className="hover:bg-muted/30 transition-colors group"
              >
                <TableCell>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm group-hover:text-primary transition-colors">
                      {topic.title}
                    </span>
                    <code className="text-[10px] text-muted-foreground font-mono">
                      {topic.url}
                    </code>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className="text-[10px] font-medium bg-muted/80 text-muted-foreground border-transparent"
                  >
                    {topic.category}
                  </Badge>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-center items-center">
                    <Checkbox
                      checked={status[topic.url]?.done || false}
                      onCheckedChange={() => toggleStatus(topic.url, 'done')}
                      className="h-5 w-5 border-2 data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                    />
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-center items-center">
                    <Checkbox
                      checked={status[topic.url]?.verified || false}
                      onCheckedChange={() =>
                        toggleStatus(topic.url, 'verified')
                      }
                      className="h-5 w-5 border-2 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={4}
                className="h-24 text-center text-muted-foreground"
              >
                No se encontraron temas.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="text-center pt-4">
        <Typography
          variant="small"
          className="text-muted-foreground italic text-xs"
        >
          Nota: Este es un registro útil para el equipo de Eng-Up.
        </Typography>
      </div>
    </div>
  );
}
