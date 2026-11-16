# CS Note｜資工觀念互動講義庫

使用 AGENTS.md 管理教材格式與開發方式的純靜態網站。以三個資工主題展示：相同規則能持續產生風格一致、具有互動的新教材。

## 功能

| 教材 | 互動 |
| --- | --- |
| 二進位入門 | 點擊 8 個位元，顯示權重加總與十進位值 |
| 邏輯閘入門 | 切換 AND／OR／NOT 與輸入，對照完整真值表 |
| 圖的搜尋 | 逐步比較固定圖的 BFS／DFS 走訪順序 |

首頁包含中英文關鍵字搜尋；每篇有目錄、六個固定段落、可展開練習解答、重設按鈕、下一篇連結。無帳號、API 或外部套件依賴，可離線開啟。

## 使用

1. 將 ZIP 完整解壓縮。
2. 開啟 cs-note 資料夾中的 index.html（不可只在 ZIP 預覽模式中開啟）。
3. 或在此目錄執行 `python -m http.server 8000`，瀏覽 http://localhost:8000。

## 專案檔案

| 路徑 | 用途 |
| --- | --- |
| AGENTS.md | AI 開發規則、格式、流程與驗收條件 |
| index.html | 網站首頁、講義卡片與搜尋 |
| assets/css/style.css | 所有頁面共用的樣式 |
| assets/js/core.js | 運算與搜尋的純函式 |
| assets/js/main.js | 首頁搜尋 |
| lessons/<slug>/index.html、demo.js | 各篇講義與互動 |
| content/<slug>.md | 教材內容稿 |
| templates/lesson.html | 可複製的新講義範本 |
| scripts/check.py、test.cjs | 連結結構檢查與互動邏輯測試 |
| NOTES.md、CHANGELOG.md | 現況與變更紀錄 |
| GITHUB_SETUP.md | 上傳與 GitHub Pages 發布步驟 |
| SUBMISSION.md | 繳交格式，請填寫真實資料與已發布網址 |

## 新增一篇教材

先讓 AI 閱讀 AGENTS.md，接著使用這段指令：

> 請依 AGENTS.md 新增「堆疊與佇列」講義，slug 使用 stack-queue。先完成 content/stack-queue.md，再複製 templates/lesson.html 製作 lessons/stack-queue/index.html 及 demo.js。用操作示範比較 LIFO 與 FIFO，加入重設、空容器處理及一道可展開的練習題。更新首頁卡片、篇數、README、NOTES.md 與 CHANGELOG.md，檢查所有本機連結與互動，回報實際通過的檢查。

規則要求固定六段內容、共用樣式、相同命名與驗收方式，因此新頁面可沿用既有架構。範本含 {{...}} 標記，新增頁面時必須全部替換；範本本身不是完成的教材。

## 驗證

```bash
python scripts/check.py
node scripts/test.cjs
```

前者只需要 Python 3；後者需要 Node.js。網站使用本身不需要安裝這兩者。
靜態檢查涵蓋四個頁面的連結、資源、錨點與內容稿；邏輯測試涵蓋 256 種無號 8 位元整數、邏輯閘真值表、BFS／DFS 順序及循環圖。
瀏覽器驗證狀態請參閱 NOTES.md。

## GitHub 與公開網站

Repository：https://github.com/over-over-STEAK/cs-note

規則文件：https://github.com/over-over-STEAK/cs-note/blob/main/AGENTS.md

GitHub Pages 尚待啟用；請依 GITHUB_SETUP.md 第 3 節設定 main 分支與 /(root)，發布成功後填入真實網站網址。

## 參考與原創說明

參考 [DiveAI 講義庫](https://diveai-lab.github.io/diveai-lessons/) 與其 [CLAUDE.md](https://github.com/diveai-lab/diveai-lessons/blob/main/CLAUDE.md) 的「規則先行、內容稿、目錄與持續延伸」概念。本專案使用不同視覺設計、原創文字及互動程式，未複製其教材、Logo 或吉祥物。概念延伸閱讀附於各講義頁尾。
