import { Settings } from "llamaindex";
import { DeepSeekLLM } from "@llamaindex/deepseek";
import { OpenAI } from "@llamaindex/openai";
import { HuggingFaceEmbedding } from "@llamaindex/huggingface";

export function setupProvider() {
  Settings.llm = new DeepSeekLLM({
    model: process.env.MODEL ?? "deepseek-chat",
    maxTokens: process.env.LLM_MAX_TOKENS
      ? Number(process.env.LLM_MAX_TOKENS)
      : undefined,
  });
  Settings.embedModel = new HuggingFaceEmbedding({
    model: process.env.EMBEDDING_MODEL,
    dimensions: process.env.EMBEDDING_DIM
      ? parseInt(process.env.EMBEDDING_DIM)
      : undefined,
  });
}
