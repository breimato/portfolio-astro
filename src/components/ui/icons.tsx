// Este archivo hace de puente entre lucide-react y los archivos Astro
import React from 'react';
import * as LucideIcons from 'lucide-react';

// Exportamos todos los iconos de lucide-react como componentes React
export const Icons = LucideIcons;

// Para facilitar las importaciones, también exportamos directamente los iconos más utilizados
export const {
  Github,
  ExternalLink,
  Mail,
  Phone,
  Linkedin,
  ArrowLeft,
  ArrowRight,
  Building,
  Calendar,
  CheckCircle2,
  List,
  Trophy,
  Terminal,
  Briefcase,
  // Añade aquí más iconos según los necesites
} = LucideIcons;
