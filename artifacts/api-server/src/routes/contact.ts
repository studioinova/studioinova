import { Router, type IRouter } from "express";
import { SubmitContactBody, SubmitContactResponse } from "@workspace/api-zod";
import { db } from "@workspace/db";
import { contactsTable } from "@workspace/db/schema";

const router: IRouter = Router();

router.post("/contact", async (req, res) => {
  const parsed = SubmitContactBody.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ error: "Invalid input. Please check all fields." });
    return;
  }

  const { name, email, subject, message } = parsed.data;

  try {
    await db.insert(contactsTable).values({ name, email, subject, message });

    const response = SubmitContactResponse.parse({
      success: true,
      message: "Thank you for reaching out! We'll get back to you shortly.",
    });

    res.json(response);
  } catch (err) {
    req.log.error({ err }, "Failed to save contact submission");
    res.status(500).json({ error: "Something went wrong. Please try again later." });
  }
});

export default router;
