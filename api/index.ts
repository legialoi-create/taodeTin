import app from "../server";

export default async function handler(req: any, res: any) {
  try {
    return app(req, res);
  } catch (err: any) {
    console.error("[Vercel Serverless Function Crash]:", err);
    if (!res.headersSent) {
      return res.status(500).json({
        success: false,
        error: "Lỗi thực thi máy chủ: " + (err?.message || String(err)),
      });
    }
  }
}

