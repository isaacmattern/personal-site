import fs from "fs";
import path from "path";
import { allPosts } from "./.contentlayer/generated/index.mjs"; // Relative path, for some reason contentlayer/generated doesn't work.
import RSS from "rss";

const siteUrl = "https://isaacmattern.com";

// Function to format the date to 'YYYY-MM-DD' (without time)
function formatDateWithoutTime(date) {
  const d = new Date(date);
  return d.toISOString().split("T")[0]; // Extracts 'YYYY-MM-DD'
}

const feed = new RSS({
  title: "Isaac Mattern's Blog Posts",
  description: "Blog posts written by Isaac Mattern",
  feed_url: `${siteUrl}/rss.xml`,
  site_url: siteUrl,
  image_url: `${siteUrl}/favicon.ico`,
  language: "en",
  copyright: `All rights reserved ${new Date().getFullYear()}`,
});

allPosts
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .forEach((post) => {
    feed.item({
      title: post.title,
      id: `${siteUrl}${post.url}`,
      link: `${siteUrl}${post.url}`,
      description: post.description,
      guid: {
        _content: `${siteUrl}${post.url}`,
        isPermaLink: true,
      },
      date: formatDateWithoutTime(post.date),
    });
  });

// Generate the RSS XML
const rss = feed.xml();

// Write the RSS feed to a file
fs.writeFileSync(path.join(process.cwd(), "public", "rss.xml"), rss);

console.log("✅ RSS feed generated successfully!");
