#!/usr/bin/env node

/**
 * Docusaurus Tag Discovery Script
 * Scans all markdown files and extracts unique tags to find which ones are missing descriptions
 */

const fs = require('fs');
const path = require('path');

const CONFIG = {
  docsDir: 'docs',
  verbose: true,
};

/**
 * Find all markdown files recursively
 */
function findMarkdownFiles(dir) {
  let files = [];

  if (!fs.existsSync(dir)) {
    console.error(`❌ Directory not found: ${dir}`);
    return files;
  }

  const items = fs.readdirSync(dir);

  items.forEach(item => {
    if (item.startsWith('.') || item === 'node_modules') {
      return;
    }

    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files = files.concat(findMarkdownFiles(fullPath));
    } else if (item.endsWith('.md') || item.endsWith('.mdx')) {
      files.push(fullPath);
    }
  });

  return files;
}

/**
 * Extract tags from markdown frontmatter
 */
function extractTags(content) {
  const tagsMatch = content.match(/tags\s*:\s*\n([\s\S]*?)(?=\n[a-z]|\n---)/i);
  if (!tagsMatch) return [];

  const tagsText = tagsMatch[1];
  return tagsText
    .split('\n')
    .map(line => line.replace(/^[-\s]*/, '').trim())
    .filter(tag => tag.length > 0 && !tag.startsWith('#'));
}

/**
 * Extract description from frontmatter
 */
function hasDescription(content) {
  return /description\s*:/.test(content);
}

/**
 * Main execution
 */
function main() {
  console.log('🔍 Scanning documentation for tags...\n');

  const files = findMarkdownFiles(CONFIG.docsDir);

  if (files.length === 0) {
    console.error(`❌ No markdown files found in ${CONFIG.docsDir}`);
    process.exit(1);
  }

  console.log(`Found ${files.length} markdown files\n`);

  const tagStats = {};
  const filesWithoutDescription = [];

  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    const tags = extractTags(content);
    const hasDesc = hasDescription(content);

    if (tags.length > 0 && !hasDesc) {
      filesWithoutDescription.push({ file, tags });
    }

    tags.forEach(tag => {
      if (!tagStats[tag]) {
        tagStats[tag] = { count: 0, examples: [] };
      }
      tagStats[tag].count++;
      if (tagStats[tag].examples.length < 2) {
        tagStats[tag].examples.push(file);
      }
    });
  });

  // Sort by frequency
  const sortedTags = Object.entries(tagStats)
    .sort((a, b) => b[1].count - a[1].count)
    .map(([tag, data]) => ({ tag, ...data }));

  console.log('═'.repeat(70));
  console.log('📊 TAG STATISTICS\n');

  sortedTags.forEach(({ tag, count, examples }) => {
    console.log(`${tag.padEnd(30)} → Used in ${count} file(s)`);
  });

  console.log('\n' + '═'.repeat(70));
  console.log('📋 FILES WITHOUT DESCRIPTIONS\n');

  if (filesWithoutDescription.length === 0) {
    console.log('✅ All files have descriptions!\n');
  } else {
    filesWithoutDescription.forEach(({ file, tags }) => {
      console.log(`${file}`);
      console.log(`   Tags: ${tags.join(', ')}`);
    });
    console.log(`\n⚠️  Found ${filesWithoutDescription.length} files without descriptions\n`);
  }

  console.log('═'.repeat(70));
  console.log('MAPPING FOR add-descriptions.js\n');
  console.log('Copy this into your DESCRIPTION_MAP:\n');
  console.log('```javascript');
  console.log('const DESCRIPTION_MAP = {');

  sortedTags.forEach(({ tag }) => {
    console.log(`  '${tag}': 'Add description for ${tag} here',`);
  });

  console.log('};');
  console.log('```\n');

  // Save to JSON
  const reportFile = 'tag-discovery-report.json';
  fs.writeFileSync(
    reportFile,
    JSON.stringify(
      {
        totalFiles: files.length,
        totalTags: sortedTags.length,
        filesWithoutDescription: filesWithoutDescription.length,
        tags: sortedTags,
        filesNeedingDescriptions: filesWithoutDescription,
      },
      null,
      2
    ),
    'utf-8'
  );

  console.log(`💾 Report saved to ${reportFile}`);
  console.log('\n✨ Complete!\n');
}

main();
