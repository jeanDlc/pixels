import { MONTH_IN_MS } from "@/constants/time";
import { LRUCache } from "lru-cache";

export const imageCache = new LRUCache({
  max: 10,
  maxSize: 5000,
  ttl: MONTH_IN_MS,
});
