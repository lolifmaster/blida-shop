import express from "express";
import { getPayloadClient } from "./get-payload";

const app = express();
const port = Number(process.env.PORT) || 3000;

const start = async () => {
  const payload = await getPayloadClient();
};