const inquiryForm = document.querySelector("[data-inquiry-form]");
const statusEl = document.querySelector("[data-form-status]");

if (inquiryForm) {
  inquiryForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = new FormData(inquiryForm);
    const summary = [
      "【バファースペース 問い合わせ】",
      `氏名・担当者名：${data.get("name") || ""}`,
      `会社名：${data.get("company") || ""}`,
      `メールアドレス：${data.get("email") || ""}`,
      `電話番号：${data.get("phone") || ""}`,
      `ご利用スペース：${data.get("space") || ""}`,
      `相談内容：${data.get("topic") || ""}`,
      "",
      "【メッセージ・詳細】",
      data.get("message") || ""
    ].join("\n");

    try {
      await navigator.clipboard.writeText(summary);
      statusEl.textContent = "問い合わせ文をコピーしました。開いたフォームに貼り付けて送信してください。";
    } catch (error) {
      statusEl.textContent = "フォームを開きます。入力内容を控えて送信してください。";
    }

    window.open(inquiryForm.action, "_blank", "noopener");
  });
}
