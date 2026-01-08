import { visit } from 'unist-util-visit';
import { terms } from '../data/terms.mjs';

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export default function rehypeGlossary() {
  return (tree) => {
    // console.log("RehypeGlossary running...");
    visit(tree, 'text', (node, index, parent) => {
      if (parent && parent.type === 'element') {
        const tag = parent.tagName;
        if (['a', 'code', 'pre', 'script', 'style', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tag)) {
          return;
        }
      }

      const text = node.value;
      const sortedTerms = terms.sort((a, b) => b.term.length - a.term.length);

      let matches = [];
      for (const { term, url } of sortedTerms) {
        const regex = new RegExp(`\\b${escapeRegExp(term)}\\b`, 'g');
        let match;
        while ((match = regex.exec(text)) !== null) {
            matches.push({ start: match.index, end: match.index + term.length, term, url });
        }
      }

      if (matches.length === 0) return;

      matches.sort((a, b) => a.start - b.start || (b.end - a.end));

      const nonOverlapping = [];
      let lastEnd = 0;
      for (const m of matches) {
        if (m.start >= lastEnd) {
            nonOverlapping.push(m);
            lastEnd = m.end;
        }
      }

      if (nonOverlapping.length === 0) return;

      const children = [];
      let cursor = 0;

      for (const m of nonOverlapping) {
        if (m.start > cursor) {
            children.push({ type: 'text', value: text.slice(cursor, m.start) });
        }

        children.push({
            type: 'element',
            tagName: 'a',
            properties: { href: m.url },
            children: [{ type: 'text', value: text.slice(m.start, m.end) }]
        });
        cursor = m.end;
      }

      if (cursor < text.length) {
        children.push({ type: 'text', value: text.slice(cursor) });
      }

      // Log what we are doing
      console.log(`Replacing text node "${text}" with ${children.length} nodes:`);
      children.forEach(c => {
          if(c.type === 'text') console.log(` - Text: "${c.value}"`);
          else console.log(` - Element: <${c.tagName} href="${c.properties.href}">`);
      });

      parent.children.splice(index, 1, ...children);

      return index + children.length;
    });
  };
}
