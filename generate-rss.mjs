import fs from "fs";
import path from "path";
import { allPosts } from "./.contentlayer/generated/index.mjs";
import RSS from "rss";

const siteUrl = "https://isaacmattern.com";

// Function to format the date to 'YYYY-MM-DD' (without time)
function formatDateWithoutTime(date) {
  const d = new Date(date);
  return d.toISOString().split("T")[0]; // Extracts 'YYYY-MM-DD'
}

// Create an RSS feed object
const feed = new RSS({
  title: "Isaac Mattern's Blog Posts",
  description: "Blog posts written by Isaac Mattern",
  feed_url: `${siteUrl}/rss.xml`,
  site_url: siteUrl,
  image_url: `${siteUrl}/favicon.ico`,
  language: "en",
  copyright: `All rights reserved ${new Date().getFullYear()}`,
});

// Manually build each item (post)
let xmlItems = allPosts
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .map((post) => {
    return `
      <item>
        <title>${post.title}</title>
        <link>${siteUrl}${post.url}</link>
        <description>${post.description}</description>
        <guid isPermaLink="true">${siteUrl}${post.url}</guid>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      </item>
    `;
  })
  .join("\n");

// Manually wrap the items inside the RSS structure
const rssXml = `
<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>${feed.title}</title>
    <description>${feed.description}</description>
    <link>${feed.site_url}</link>
    <image>
      <url>${feed.image_url}</url>
      <title>${feed.title}</title>
      <link>${feed.site_url}</link>
    </image>
    <language>${feed.language}</language>
    <copyright>${feed.copyright}</copyright>
    ${xmlItems}
  </channel>
</rss>
`;

// Write the RSS feed to a file
fs.writeFileSync(path.join(process.cwd(), "public", "rss.xml"), rssXml);

console.log("✅ RSS feed generated successfully!");
