import {
  BezierCurve, BookOpenText, Brain, BracketsCurly, Buildings, Code, Cube,
  FlowArrow, GearSix, PaintBrush, Robot, Sparkle, SquaresFour, Stack,
} from '@phosphor-icons/react';

export const pillars = [
  { id: 'build', number: '01', title: 'Build', strapline: 'Things that work', text: 'Products, internal tools, APIs, automation, and AI applications.', icon: BracketsCurly },
  { id: 'pillar-knowledge', number: '02', title: 'Knowledge', strapline: 'Things we have learned', text: 'Guides, architecture, case studies, engineering notes, and learning assets.', icon: BookOpenText },
  { id: 'design', number: '03', title: 'Design', strapline: 'Systems that create consistency', text: 'Interfaces, brand foundations, components, templates, and visual assets.', icon: BezierCurve },
  { id: 'pillar-lab', number: '04', title: 'Lab', strapline: 'Things we are discovering', text: 'Agents, experiments, prototypes, developer tools, and future ideas.', icon: Sparkle },
];

export const selectedWorks = [
  { title: 'EBS Lite', subtitle: 'Equipment Booking System', pillar: 'Build', description: 'A booking system that makes shared equipment visible, bookable, and accountable.', icon: Buildings },
  { title: 'Nezha Brand System', subtitle: 'Brand Kit + Design System', pillar: 'Design', description: 'One reusable visual foundation for the entire Nezha ecosystem.', icon: PaintBrush },
  { title: 'AI Worker', subtitle: 'AI-assisted productivity experiment', pillar: 'Lab', description: 'Practical agents that help people research, organize, and complete work.', icon: Robot },
  { title: 'Engineering Knowledge Library', subtitle: 'Reusable technical knowledge', pillar: 'Knowledge', description: 'Architecture decisions, guides, and patterns prepared for reuse.', icon: BookOpenText },
];

export const processSteps = [
  { title: 'Problem', text: 'Frame the real constraint.', icon: Brain },
  { title: 'Research', text: 'Understand context and evidence.', icon: BookOpenText },
  { title: 'Design', text: 'Make the system coherent.', icon: BezierCurve },
  { title: 'Build', text: 'Turn the model into software.', icon: Code },
  { title: 'QA', text: 'Test behavior and quality.', icon: GearSix },
  { title: 'Document', text: 'Make decisions transferable.', icon: FlowArrow },
  { title: 'Reuse', text: 'Compound the useful parts.', icon: Stack },
];

export const labExplorations = [
  { title: 'AI agents', icon: Robot },
  { title: 'Automation', icon: GearSix },
  { title: '3D interfaces', icon: Cube },
  { title: 'Prototypes', icon: SquaresFour },
];

const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`;

export const articles = [
  { format: 'Guide', title: 'Designing AI Systems That Deliver Real Business Value', date: 'Jul 28, 2026', readTime: '7 min', image: assetPath('images/article-ai-value-v3.png') },
  { format: 'Architecture note', title: 'From Complexity to Clarity: Building Scalable Business Systems', date: 'Jul 21, 2026', readTime: '6 min', image: assetPath('images/article-systems-clarity-v3.png') },
  { format: 'Case study', title: 'From Automation to Autonomy: A Practical Evolution', date: 'Jul 14, 2026', readTime: '8 min', image: assetPath('images/article-automation-v3.png') },
];
