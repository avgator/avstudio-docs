#!/usr/bin/env node

/**
 * Docusaurus Meta Description Auto-Generator (Updated)
 * Adds description frontmatter to markdown files
 * Now supports dynamic tag discovery + fallback generation
 */

const fs = require('fs');
const path = require('path');

// Expanded description map - add your tags here!
const DESCRIPTION_MAP = {
  // Original template tags
  'interface-design': 'Explore interface design guidelines and UI/UX best practices for AV Studio.',
  'cctv': 'CCTV camera integration and configuration guide for AV Studio.',
  'button': 'Master button components in AV Studio. Learn styling and implementation.',
  'internationalization': 'Internationalization guide for AV Studio. Build multi-language applications.',
  'container': 'Container component documentation for AV Studio.',
  'language-codes': 'Reference guide for language codes and localization.',
  'doorbird': 'Doorbird smart door system integration with AV Studio.',
  'getting-started': 'Get started with AV Studio. Step-by-step setup and first steps guide.',
  'troubleshooting': 'AV Studio troubleshooting guide. Find solutions to common issues.',
  'environment': 'Environment configuration and setup for AV Studio.',
  'recovery': 'Data recovery and backup procedures for AV Studio.',
  'about': 'About AV Studio. Learn about the platform and features.',
  'localization': 'Localization documentation for AV Studio. Adapt for different regions.',
  'alignment': 'Alignment and layout techniques in AV Studio.',
  'hardware': 'Hardware requirements and compatibility for AV Studio.',
  'access': 'Access control and permission management in AV Studio.',
  'intercom': 'Intercom system setup and management in AV Studio.',
  'mjpg': 'Motion JPEG (MJPEG) video streaming configuration.',
  '4-series': 'AV Studio 4-Series documentation and features.',
  'creating-projects': 'Create and manage projects in AV Studio.',

  // Your actual tags from documentation
  'knowledge-base': 'Knowledge base articles and guides for AV Studio integration.',
  'ui-components': 'User interface components documentation and usage guides.',
  'avstudio': 'AV Studio core functionality and features documentation.',
  'javascript': 'JavaScript integration and scripting in AV Studio projects.',
  'functions': 'Function documentation and usage in AV Studio.',
  'dynamic-content': 'Dynamic content handling and data binding in AV Studio.',
  'autonomic': 'Autonomic Mirage Media Server integration guide.',
  'media-server': 'Media server integration and configuration.',
  'player': 'Media player component documentation and setup.',
  'media-player': 'Advanced media player features and controls.',
  'mirage': 'Autonomic Mirage Media Server integration.',
  'spotify': 'Spotify integration and music streaming in AV Studio.',
  'tidal': 'Tidal music streaming service integration.',
  'music': 'Music playback and streaming documentation.',
  'streaming-services': 'Third-party streaming service integration.',
  'streaming': 'Streaming audio and video configuration.',
  'polling-data': 'Data polling and real-time updates in AV Studio.',
  'http-request': 'HTTP request configuration and usage.',
  'https': 'HTTPS secure communication setup.',
  'http': 'HTTP communication and API integration.',
  'proxy': 'Proxy configuration and network setup.',
  'api': 'API integration and HTTP/HTTPS communication.',
  'control-system': 'Control system integration and setup.',
  'crestron': 'Crestron control system integration guide.',
  'automation': 'Home automation and system integration.',
  'security': 'Security features and access control.',
  'configuration': 'System configuration and settings.',
  'setup': 'Initial setup and installation guide.',
  'installation': 'Installation procedures and requirements.',
  'tutorial': 'Tutorial and step-by-step guides.',
  'howto': 'How-to guides and best practices.',
  'tips-tricks': 'Tips, tricks, and advanced techniques.',
  'best-practices': 'Best practices and recommendations.',
  'example': 'Code examples and usage demonstrations.',
  'reference': 'Reference documentation and specifications.',
};

const CONFIG = {
  docsDir: 'docs',
  maxDescriptionLength: 160,
  verbose: true,
  generateFallback: true, // Auto-generate for missing tags
};

/**
 * Generate description from tag name if not in map
 */
function generateFallbackDescription(tag) {
  // Convert kebab-case to Title Case
  const titleCase = tag
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Generate contextual descriptions
  const templates = {
    contains: {
      'control': `${titleCase} integration and control system setup for AV Studio.`,
      'server': `${titleCase} configuration and integration guide.`,
      'player': `${titleCase} setup and playback control documentation.`,
      'streaming': `${titleCase} configuration and audio/video streaming setup.`,
      'api': `${titleCase} API integration and HTTP communication guide.`,
      'integration': `${titleCase} integration guide for AV Studio projects.`,
      'setup': `${titleCase} configuration and setup instructions.`,
      'component': `${titleCase} component documentation and usage guide.`,
    },
  };

  // Check templates
  for (const [key, desc] of Object.entries(templates.contains)) {
    if (tag.includes(key)) {
      return desc;
    }
  }

  // Default fallback
  return `Comprehensive guide to ${titleCase.toLowerCase()} in AV Studio documentation.`;
}

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
 * Parse frontmatter from markdown content
 */
function parseFrontmatter(content) {
  if (!content.startsWith('---')) {
    return { frontmatter: null, body: content, endLine: 0 };
  }

  const lines = content.split('\n');
  let endLine = -1;

  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === '---') {
      endLine = i;
      break;
    }
  }

  if (endLine === -1) {
    return { frontmatter: null, body: content, endLine: 0 };
  }

  const frontmatterLines = lines.slice(0, endLine + 1);
  const bodyLines = lines.slice(endLine + 1);

  return {
    frontmatter: frontmatterLines.join('\n'),
    body: bodyLines.join('\n'),
    endLine,
  };
}

/**
 * Extract tags from frontmatter
 */
function extractTags(frontmatter) {
  if (!frontmatter) return [];

  // Match tags: [tag1, tag2] or tags: ['tag1', 'tag2'] or tags: ["tag1", "tag2"]
  // Also matches YAML array format with dashes
  const match = frontmatter.match(/tags\s*:\s*\n([\s\S]*?)(?=\n[a-z]|\n---)/i) ||
    frontmatter.match(/tags\s*:\s*\[(.*?)\]/s);

  if (!match) return [];

  let tagsText = match[1] || match[0];

  return tagsText
    .split(/[,\n-]/)
    .map(tag => tag.trim().replace(/^["'\[\]]*|["'\[\]]*$/g, ''))
    .filter(tag => tag.length > 0 && tag !== 'tags');
}

/**
 * Check if frontmatter already has description
 */
function hasDescription(frontmatter) {
  if (!frontmatter) return false;
  return /description\s*:/.test(frontmatter);
}

/**
 * Get description for tag
 */
function getDescriptionForTag(tag) {
  // First check the map
  if (DESCRIPTION_MAP[tag]) {
    return DESCRIPTION_MAP[tag];
  }

  // If not found and fallback enabled, generate one
  if (CONFIG.generateFallback) {
    return generateFallbackDescription(tag);
  }

  return null;
}

/**
 * Truncate description to max length
 */
function truncateDescription(desc, maxLength = CONFIG.maxDescriptionLength) {
  if (desc.length > maxLength) {
    return desc.substring(0, maxLength - 3) + '...';
  }
  return desc;
}

/**
 * Add description to frontmatter
 */
function addDescriptionToFrontmatter(frontmatter, description) {
  if (!frontmatter) return null;

  const lines = frontmatter.split('\n');
  const lastLine = lines[lines.length - 1];

  // Insert before the closing ---
  if (lastLine.trim() === '---') {
    lines.splice(lines.length - 1, 0, `description: "${description}"`);
    return lines.join('\n');
  }

  return frontmatter;
}

/**
 * Process a single markdown file
 */
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const { frontmatter, body } = parseFrontmatter(content);

    if (!frontmatter) {
      if (CONFIG.verbose) {
        console.log(`⚠️  ${filePath} - No frontmatter found`);
      }
      return { status: 'skipped', reason: 'no-frontmatter' };
    }

    if (hasDescription(frontmatter)) {
      if (CONFIG.verbose) {
        // console.log(`ℹ️  ${filePath} - Already has description`);
      }
      return { status: 'skipped', reason: 'has-description' };
    }

    const tags = extractTags(frontmatter);
    if (tags.length === 0) {
      if (CONFIG.verbose) {
        // console.log(`ℹ️  ${filePath} - No tags found`);
      }
      return { status: 'skipped', reason: 'no-tags' };
    }

    const firstTag = tags[0];
    const description = getDescriptionForTag(firstTag);

    if (!description) {
      if (CONFIG.verbose) {
        console.log(`⚠️  ${filePath} - No description for tag: ${firstTag}`);
      }
      return { status: 'skipped', reason: 'no-template' };
    }

    const truncatedDesc = truncateDescription(description);
    const updatedFrontmatter = addDescriptionToFrontmatter(frontmatter, truncatedDesc);

    if (!updatedFrontmatter) {
      return { status: 'error', reason: 'failed-to-add-description' };
    }

    const updatedContent = updatedFrontmatter + '\n' + body;
    fs.writeFileSync(filePath, updatedContent, 'utf-8');

    console.log(`✅ ${filePath}`);
    console.log(`   📌 Tag: ${firstTag.padEnd(25)} | 📝 Length: ${truncatedDesc.length} chars`);

    return {
      status: 'updated',
      tag: firstTag,
      description: truncatedDesc,
    };
  } catch (error) {
    console.error(`❌ Error processing ${filePath}: ${error.message}`);
    return { status: 'error', reason: error.message };
  }
}

/**
 * Main execution
 */
function main() {
  console.log('🚀 Starting Meta Description Auto-Generator\n');
  console.log(`📁 Scanning directory: ${CONFIG.docsDir}\n`);

  const files = findMarkdownFiles(CONFIG.docsDir);

  if (files.length === 0) {
    console.error(`❌ No markdown files found in ${CONFIG.docsDir}`);
    process.exit(1);
  }

  console.log(`Found ${files.length} markdown files`);
  console.log(`Generating fallback descriptions: ${CONFIG.generateFallback ? 'ON ✓' : 'OFF'}\n`);
  console.log('─'.repeat(80));

  let stats = {
    total: files.length,
    updated: 0,
    skipped: 0,
    errors: 0,
  };

  files.forEach(file => {
    const result = processFile(file);
    if (result.status === 'updated') {
      stats.updated++;
    } else if (result.status === 'skipped') {
      stats.skipped++;
    } else if (result.status === 'error') {
      stats.errors++;
    }
  });

  console.log('\n' + '─'.repeat(80));
  console.log('\n📊 Summary:');
  console.log(`  ✅ Updated: ${stats.updated}`);
  console.log(`  ℹ️  Skipped: ${stats.skipped}`);
  console.log(`  ❌ Errors:  ${stats.errors}`);
  console.log(`  📝 Total:   ${stats.total}\n`);

  if (stats.updated > 0) {
    console.log('✨ Successfully added descriptions!\n');
  } else {
    console.log('ℹ️  No new descriptions added (all files already have descriptions or no tags found)\n');
  }

  process.exit(stats.errors > 0 ? 1 : 0);
}

// Run the script
main();
