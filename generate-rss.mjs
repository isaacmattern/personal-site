import fs from "fs";
import path from "path";
import { allPosts } from "./.contentlayer/generated/index.mjs"; // Adjust the path as needed
import RSS from "rss"; // Make sure to install this package

// Constants
const siteUrl = "https://isaacmattern.com";

// Function to format the date to RFC-822 format for <pubDate>
function formatPubDate(date) {
  const d = new Date(date);
  return d.toUTCString(); // Formats date to RFC-822 format
}

// Initialize the RSS feed
const feed = new RSS({
  title: "Isaac Mattern's Blog Posts",
  description: "Blog posts written by Isaac Mattern",
  feed_url: `${siteUrl}/rss.xml`,
  site_url: siteUrl,
  language: "en",
  copyright: `All rights reserved ${new Date().getFullYear()}`,
  managingEditor: "Isaac Mattern <isaac@mattern.com>",
  webMaster: "Isaac Mattern <isaac@mattern.com>",
  lastBuildDate: new Date(),
});

// Add each post to the feed
allPosts
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .forEach((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: `${siteUrl}${post.url}`,
      date: formatPubDate(post.date), // Correct date format for <pubDate>
    });
  });

// Generate the RSS XML
const rssXml = feed.xml();

// Write the RSS feed to a file
fs.writeFileSync(path.join(process.cwd(), "public", "rss.xml"), rssXml);

console.log("✅ RSS feed generated successfully!");
