/**
 * Docusaurus Plugin: Tag Meta Descriptions
 * Injects meta descriptions into tag pages after build
 */

const fs = require("fs");
const path = require("path");
const glob = require("glob");

module.exports = function (context, options) {
  return {
    name: "docusaurus-plugin-tag-descriptions",
    
    async postBuild({ siteDir, outDir }) {
      console.log("🔧 [tag-descriptions] Processing tag pages...");

      try {
        // Find all tag HTML files
        const tagFiles = glob.sync(path.join(outDir, "tags/**/*.html"));
        
        if (tagFiles.length === 0) {
          console.log("⚠️  No tag pages found");
          return;
        }

        let processedCount = 0;

        for (const tagFile of tagFiles) {
          let html = fs.readFileSync(tagFile, "utf-8");

          // Extract tag name from URL path
          // e.g., /tags/javascript/ → "javascript"
          const tagMatch = tagFile.match(/tags[/\\]([^/\\]+)[/\\]index\.html/);
          if (!tagMatch) continue;

          const tagName = tagMatch[1];
          const description = generateTagDescription(tagName);

          // Check if meta description already exists
          if (html.includes('<meta name="description"')) {
            // Replace existing description
            html = html.replace(
              /<meta name="description" content="[^"]*"/,
              `<meta name="description" content="${escapeHtml(description)}"`
            );
          } else {
            // Add new description after <head>
            html = html.replace(
              /<head[^>]*>/i,
              `$&\n    <meta name="description" content="${escapeHtml(description)}" />`
            );
          }

          fs.writeFileSync(tagFile, html, "utf-8");
          processedCount++;
          console.log(`  ✓ ${tagName}`);
        }

        console.log(`✅ Updated ${processedCount} tag pages with meta descriptions`);
      } catch (error) {
        console.error("❌ Error processing tag descriptions:", error);
        throw error;
      }
    },
  };
};

/**
 * Generate SEO-friendly description for a tag
 */
function generateTagDescription(tagName) {
  const descriptions = {
    javascript: "JavaScript documentation, tutorials, and examples. Learn JavaScript fundamentals, advanced patterns, and best practices.",
    typescript: "TypeScript documentation and guides. Master TypeScript types, interfaces, and advanced features.",
    react: "React documentation, components, hooks, and patterns. Build modern UIs with React.",
    vue: "Vue.js documentation and tutorials. Learn Vue 3 composition API and component development.",
    nodejs: "Node.js guides and tutorials. Build scalable server-side applications.",
    python: "Python documentation and code examples. Learn Python programming and best practices.",
    css: "CSS styling guides, techniques, and modern features. Master responsive design and CSS Grid.",
    html: "HTML documentation and semantic markup guides. Learn HTML best practices.",
    database: "Database tutorials and guides. SQL, NoSQL, and database design patterns.",
    api: "API documentation and REST/GraphQL guides. Learn API design and implementation.",
  };

  // If we have a predefined description, use it
  if (descriptions[tagName.toLowerCase()]) {
    return descriptions[tagName.toLowerCase()];
  }

  // Otherwise generate a generic one
  const formatted = tagName
    .replace(/([A-Z])/g, " $1")
    .replace(/[-_]/g, " ")
    .trim()
    .toLowerCase();

  return `${formatted} documentation and guides. Browse articles, tutorials, and resources about ${formatted}.`;
}

/**
 * Escape HTML special characters in descriptions
 */
function escapeHtml(text) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}