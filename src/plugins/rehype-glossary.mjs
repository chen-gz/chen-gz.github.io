import { visit } from 'unist-util-visit';
import { readFileSync } from 'fs';
import path from 'path';
import pluralize from 'pluralize';

export function rehypeGlossary(options = {}) {
  let glossary = options.glossary;
  if (!glossary) {
    try {
      const glossaryPath = path.resolve('./src/data/glossary.json');
      glossary = JSON.parse(readFileSync(glossaryPath, 'utf-8'));
    } catch (e) {
      console.warn('rehype-glossary: Could not load glossary.json', e);
      glossary = [];
    }
  }

  const termMap = new Map();
  const allForms = [];

  const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const addTerm = (form, originalTerm, definition, url) => {
    if (!form || form.trim().length === 0) return;
    const lower = form.toLowerCase();
    if (!termMap.has(lower)) {
        termMap.set(lower, { originalTerm, definition, url });
        allForms.push(form);
    }
  };

  glossary.forEach(entry => {
    const term = entry.term;
    const def = entry.definition;
    const url = entry.url;

    addTerm(term, term, def, url);
    const plural = pluralize(term);
    addTerm(plural, term, def, url);
  });

  allForms.sort((a, b) => b.length - a.length);

  if (allForms.length === 0) {
    return (tree) => {};
  }

  const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`\\b(${allForms.map(t => escapeRegExp(t)).join('|')})\\b`, 'gi');

  return (tree) => {
    visit(tree, 'text', (node, index, parent) => {
      // Check if parent should be excluded
      const isExcludedTag = ['a', 'code', 'pre', 'script', 'style', 'abbr'].includes(parent.tagName);
      const parentClasses = (parent.properties && parent.properties.className && Array.isArray(parent.properties.className))
                            ? parent.properties.className
                            : [];

      const isGlossaryTerm = parentClasses.includes('glossary-term');
      const isMath = parentClasses.some(c => ['math', 'math-inline', 'math-display', 'katex'].includes(c));

      if (isExcludedTag || isGlossaryTerm || isMath) {
        return;
      }

      const value = node.value;
      if (!value) return;

      const matches = [...value.matchAll(pattern)];
      if (matches.length === 0) return;

      const newNodes = [];
      let currentIndex = 0;

      for (const match of matches) {
        const start = match.index;
        const end = start + match[0].length;
        const matchedText = match[0];

        if (start > currentIndex) {
          newNodes.push({ type: 'text', value: value.slice(currentIndex, start) });
        }

        const lookup = termMap.get(matchedText.toLowerCase());
        const definition = lookup ? lookup.definition : "";
        const originalTerm = lookup ? lookup.originalTerm : matchedText;
        const customUrl = lookup ? lookup.url : null;

        const href = customUrl || `/glossary#${slugify(originalTerm)}`;

        newNodes.push({
          type: 'element',
          tagName: 'a',
          properties: {
            href: href,
            className: ['glossary-term'],
            'data-definition': definition,
            'data-term': originalTerm
          },
          children: [{ type: 'text', value: matchedText }]
        });

        currentIndex = end;
      }

      if (currentIndex < value.length) {
        newNodes.push({ type: 'text', value: value.slice(currentIndex) });
      }

      parent.children.splice(index, 1, ...newNodes);

      return index + newNodes.length;
    });
  };
}
