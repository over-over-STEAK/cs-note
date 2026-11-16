# GitHub 上傳與公開網站

目標帳號：over-over-STEAK。建議新專案名稱：cs-note。

## 1. 建立空倉庫

1. 登入 GitHub，前往 https://github.com/new。
2. Owner 選 over-over-STEAK；Repository name 填 cs-note。
3. 選 Public，勾選 Add a README file，建立倉庫。若名稱已使用，先確認現有內容，不要覆蓋他人的或既有的專案。

## 2. 上傳完整專案

1. 先解壓縮 ZIP，打開裡面的 cs-note 資料夾。
2. 在倉庫的 Code 頁選 Add file → Upload files。
3. 將 cs-note 裡面的檔案與資料夾拖曳進去。不要只上傳 ZIP，也不要多包一層 cs-note 資料夾。
4. 確認倉庫最外層可看到 index.html、AGENTS.md、assets、lessons 等項目。
5. 填寫提交訊息，例如「Add CS Note interactive lessons and AGENTS rules」，按 Commit changes。
6. 確認 assets、content、lessons、templates、scripts 內的檔案也都已上傳。

## 3. 啟用 GitHub Pages

1. 開啟該倉庫 Settings → Pages。
2. Build and deployment 的 Source 選 Deploy from a branch。
3. Branch 選 main，資料夾選 /(root)，按 Save。
4. 等待部署完成，使用 Pages 顯示的 Visit site 開啟網站。若尚未出現，查看 Actions 的部署狀態。
5. 開啟首頁及三篇講義，測試搜尋、按鈕與返回首頁。
6. 從瀏覽器複製已成功開啟的真實網址，貼入 README.md 與 SUBMISSION.md。

## 4. 常見問題

- 404：確認 index.html 位在倉庫根目錄；Pages 的分支與資料夾選擇正確；部署已成功。
- 樣式不見：確認完整上傳 assets 資料夾；不要把相對路徑改成 /assets/...。
- 只看到 ZIP：請解壓縮後上傳內容，Pages 不會自動解壓縮你的 ZIP。
- 使用不同倉庫名稱：相對路徑仍可運作，繳交時請用實際發布網址。

## 5. 可選的 Git 指令方式

先建立遠端倉庫，再在解壓縮後的 cs-note 目錄執行（新空倉庫未初始化 README 時）：

```bash
git init
git add .
git commit -m "Create CS Note learning website"
git branch -M main
git remote add origin https://github.com/over-over-STEAK/cs-note.git
git push -u origin main
```

以上 remote URL 是「以此帳號與名稱建立倉庫後」才存在的預期位置，不代表已建立。若遠端已含 README，請先 clone 遠端，再將專案檔案複製入 clone 資料夾、commit、push，勿強制覆蓋遠端歷史。
