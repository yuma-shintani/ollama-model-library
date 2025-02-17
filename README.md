# Ollama Model Library

![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fyuma-shintani%2Follama-model-library%2Factions%2Fworkflows%2F144521343%2Fruns%3Fstatus%3Dcompleted%26per_page%3D1&query=%24.workflow_runs%5B0%5D.run_started_at&style=flat-square&label=Last%20update%20Ollama%20models)

Get Ollama models from the Ollama library website (https://ollama.com/library) in JSON format.

# Features

## Get Models JSON Format

Access the following link to obtain a list of Ollama models in JSON format.  
https://yuma-shintani.github.io/ollama-model-library/model.json

```json:model.json
[
  {
    "name": "deepseek-r1",
    "link": "https://ollama.com/library/deepseek-r1",
    "description": "DeepSeek's first-generation of reasoning models with comparable performance to OpenAI-o1, including six dense models distilled from DeepSeek-R1 based on Llama and Qwen.",
    "pullCount": "17M",
    "updated": "10 days ago",
    "size": [
      "1.5b",
      "7b",
      "8b",
      "14b",
      "32b",
      "70b",
      "671b"
    ],
    "capabilities": "",
    "tags": [
      {
        "name": "deepseek-r1:latest",
        "size": "",
        "updated": ""
      },
      {
        "name": "deepseek-r1:1.5b",
        "size": "",
        "updated": ""
      },
      {
        "name": "deepseek-r1:7b",
        "size": "",
        "updated": ""
      },
      {
        "name": "deepseek-r1:8b",
        "size": "",
        "updated": ""
      },
      {
        "name": "deepseek-r1:14b",
        "size": "",
        "updated": ""
      },
      {
        "name": "deepseek-r1:32b",
        "size": "",
        "updated": ""
      },
      {
        "name": "deepseek-r1:70b",
        "size": "",
        "updated": ""
      },
      {
        "name": "deepseek-r1:671b",
        "size": "",
        "updated": ""
      },
      {
        "name": "deepseek-r1:1.5b-qwen-distill-fp16",
        "size": "",
        "updated": ""
      },
      {
        "name": "deepseek-r1:1.5b-qwen-distill-q4_K_M",
        "size": "",
        "updated": ""
      },
      {
        "name": "deepseek-r1:1.5b-qwen-distill-q8_0",
        "size": "",
        "updated": ""
      },
      {
        "name": "deepseek-r1:14b-qwen-distill-fp16",
        "size": "",
        "updated": ""
      },
      {
        "name": "deepseek-r1:14b-qwen-distill-q4_K_M",
        "size": "",
        "updated": ""
      },
      {
        "name": "deepseek-r1:14b-qwen-distill-q8_0",
        "size": "",
        "updated": ""
      },
      {
        "name": "deepseek-r1:32b-qwen-distill-fp16",
        "size": "",
        "updated": ""
      },
      {
        "name": "deepseek-r1:32b-qwen-distill-q4_K_M",
        "size": "",
        "updated": ""
      },
      {
        "name": "deepseek-r1:32b-qwen-distill-q8_0",
        "size": "",
        "updated": ""
      },
      {
        "name": "deepseek-r1:671b-fp16",
        "size": "",
        "updated": ""
      },
      {
        "name": "deepseek-r1:671b-q4_K_M",
        "size": "",
        "updated": ""
      },
      {
        "name": "deepseek-r1:671b-q8_0",
        "size": "",
        "updated": ""
      },
      {
        "name": "deepseek-r1:70b-llama-distill-fp16",
        "size": "",
        "updated": ""
      },
      {
        "name": "deepseek-r1:70b-llama-distill-q4_K_M",
        "size": "",
        "updated": ""
      },
      {
        "name": "deepseek-r1:70b-llama-distill-q8_0",
        "size": "",
        "updated": ""
      },
      {
        "name": "deepseek-r1:7b-qwen-distill-fp16",
        "size": "",
        "updated": ""
      },
      {
        "name": "deepseek-r1:7b-qwen-distill-q4_K_M",
        "size": "",
        "updated": ""
      },
      {
        "name": "deepseek-r1:7b-qwen-distill-q8_0",
        "size": "",
        "updated": ""
      },
      {
        "name": "deepseek-r1:8b-llama-distill-fp16",
        "size": "",
        "updated": ""
      },
      {
        "name": "deepseek-r1:8b-llama-distill-q4_K_M",
        "size": "",
        "updated": ""
      },
      {
        "name": "deepseek-r1:8b-llama-distill-q8_0",
        "size": "",
        "updated": ""
      }
    ]
  }
]
```

You can incorporate the Ollama Library into your own applications.
![own app](/public/image.png)

## Models Update

Models are updated daily at midnight on Github Actions.

# License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for more details.

# Contact

For any inquiries or support, please open an issue on GitHub.
