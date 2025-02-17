// Define Library
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

// Main function to fetch Ollama models
async function getOllamaModels() {
  const ollamaLibUri = "https://ollama.com/library";
  const modelData = [];

  const { data: html } = await axios.get(ollamaLibUri);
  const $ = cheerio.load(html);

  // Extract model links
  const modelLinks = $('a[href^="/library/"]').toArray();

  for (const link of modelLinks) {
    const modelName = $(link).attr("href").split("/").pop().trim();
    const modelDetails = await getModelDetails(modelName);
    const modelTags = await getModelTags(modelName);

    // Combine model information
    modelData.push({
      name: modelName,
      link: `https://ollama.com/library/${modelName}`,
      description: modelDetails.description,
      pullCount: modelDetails.pullCount,
      updated: modelDetails.updated,
      size: modelDetails.size,
      capabilities: modelDetails.capabilities,
      //readme: readmeMd,
      tags: modelTags,
    });
  }

  return modelData;
}

// Function to fetch model details
async function getModelDetails(modelName) {
  const modelUri = `https://ollama.com/library/${modelName}`;
  const details = {};

  const { data: html } = await axios.get(modelUri);
  const $ = cheerio.load(html);

  // Extract description and readme
  details.description = $("#summary-content").text().trim();

  // Extract additional details
  details.pullCount = $("span[x-test-pull-count]").text().trim();
  details.updated = $("span[x-test-updated]").text().trim();
  details.size = $("span[x-test-size]")
    .text()
    .trim()
    .match(/[^b]+b/g);
  details.capabilities = $(".inline-flex.items-center.rounded-md.bg-indigo-50.px-2.py-0\\.5.text-xs.font-medium.text-indigo-600.sm\\:text-\\[13px\\]").text().trim();

  return details;
}

// Function to fetch model tags
async function getModelTags(modelName) {
  const tagsUri = `https://ollama.com/library/${modelName}/tags`;
  const tags = [];

  const { data: html } = await axios.get(tagsUri);
  const $ = cheerio.load(html);

  // Extract tag information
  $("a.group").each((index, element) => {
    const tagName = $(element).attr("href").split("/").pop().trim();
    const tagSize = $(element).find("span").first().text().trim();
    const tagUpdated = $(element).find("span").last().text().trim();

    tags.push({
      name: tagName,
      size: tagSize,
      updated: tagUpdated,
    });
  });
  return tags;
}

// Main
(async () => {
  try {
    // Get Ollama Models
    const models = await getOllamaModels();
    console.log(models);
    fs.writeFileSync("docs/model.json", JSON.stringify(models, null, 2));
    console.log("model.json has been updated successfully.");
  } catch (error) {
    console.error("Error while scraping or updating model.json:", error);
  }
})();
