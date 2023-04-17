# git flow

### TL;DR

- git flow 主要有 `master`、`develop`、`feature`、`release`、`hotfix` 五種分支。
- 長期分支：`master`、`develop`。
- 短期分支： `feature`、`release`、`hotfix`。
- 在 `hotfix`、`release` 的任務完成後，要記得合併 `develop` ，以確保 `develop` 隨時為最新版本。

### 什麼是 git flow

git flow 主要有 `master`、`develop`、 `feature` 、`release` 、`hotfix` 五種分支，各分支負責不同的功能。

其中 `master` 以及 `develop` 這兩個分支又被稱做**長期分支**，因為它們會一直存活在整個 Git Flow 裡，而其它的分支大多會因任務結束而被刪除。

不同的團隊有可能會有不同的命名， `master` 有些團隊可能命名為 `production`，`release` 有些團隊可能取名為 `staging`，但是概念基本上是一樣的。

![flow.png](./flow.png)

1. `master`

- 用來存放穩定、隨時可上線的分支。
- 分支的來源只能從別的分支合併過來，開發者不會直接 commit 在這個分支。

2. `develop`

- 所有開發的基礎分支。
- 當要開發新功能的時候，所有 `feature` 都是從這個分支作為基底進行開發。

3. `feature`

- 開發新功能的分支。
- `feature` 都是從 `develop` 來的，功能完後會再併回 `develop`， 並刪除 `feature`。

4. `release`

- 上線前的測試分支。
- 當 `develop` 已經完成的差不多了，就可以把 `develop` 合併到 `release` 。
- 測試完成後，`release` 將會同時合併到 `master` 以及 `develop` ，並刪除 `release`。
- 需要合併回 `develop` 是因為 `release` 可能還會測到並修正一些 bug，以確保 `develop` 版本最新。

5. `hotfix`

- 當 `master` 上發現 bug 時，用來緊急修復的分支。
- 當線上產品發生緊急問題的時候，會從 `master` 開一個 `hotfix` 出來進行修復，`hotfix` 修復完成之後，會合併回 `master` ，也同時會合併到 `develop` ，並刪除`hotfix`。
- 由於 bug 是在 `hotfix` 修復的，如果沒有再合併回 `develop`，當 `develop` 重新合併 `master` 時， bug 會再次出現。

### git flow 優缺點

優點

- 流程清晰。
- 適合版本發佈的專案。

缺點

- 需要同時維護兩條長期分支。
- 需要經常切換分支。`hotfix`、`release` 經常忘記合併回 `develop`。

參考來源：

1.  [https://gitbook.tw/chapters/gitflow/why-need-git-flow.html](https://gitbook.tw/chapters/gitflow/why-need-git-flow.html)
