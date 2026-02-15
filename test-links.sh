#!/bin/bash
# Test all internal links on the handbook site
# Run after build: ./test-links.sh

PORT=${1:-5987}
BASE="http://localhost:$PORT"
FAIL=0
PASS=0

check() {
  local path="$1"
  local code
  code=$(curl -s -o /dev/null -w "%{http_code}" "$BASE$path")
  if [ "$code" = "200" ]; then
    echo "✅ $path"
    PASS=$((PASS + 1))
  else
    echo "❌ $path → $code"
    FAIL=$((FAIL + 1))
  fi
}

echo "🔍 Testing handbook links on $BASE ..."
echo ""

# Homepage
check "/"

# Highlight cards (3) - these change as new cases are added
echo ""
echo "⭐ Highlight cards:"
check "/docs/development/promo-video"
check "/docs/development/wedding-card"
check "/docs/communication/social-media-post"

# Category pages
echo ""
echo "📂 Category pages:"
check "/docs/category/-google-workspace"
check "/docs/category/-資訊查詢"
check "/docs/category/-自動化"
check "/docs/category/-開發"
check "/docs/category/-通訊"
check "/docs/category/-娛樂"
check "/docs/category/-ai-導入-aia"

# All doc pages
echo ""
echo "📄 Doc pages:"
check "/docs/google-workspace/oauth-setup"
check "/docs/google-workspace/sheets-reading"
check "/docs/google-workspace/calendar-reminders"
check "/docs/google-workspace/gmail-vacation-reply"
check "/docs/development/course-website"
check "/docs/information/weather-traffic"
check "/docs/information/lifestyle"
check "/docs/information/recipes"
check "/docs/information/news-summary"
check "/docs/automation/sentiment-monitoring"
check "/docs/automation/version-check"
check "/docs/automation/jokes-schedule"
check "/docs/automation/daily-report"
check "/docs/automation/handbook-auto-update"
check "/docs/automation/meeting-transcription"
check "/docs/automation/notebooklm-management"
check "/docs/communication/line-voice"
check "/docs/communication/self-introduction"
check "/docs/entertainment/gomoku"
check "/docs/ai-adoption/aia-adoption-plan"
check "/docs/ai-adoption/iso27001-ai"
check "/docs/ai-adoption/workplace-tools-2026"

# 2026-02-13
check "/docs/development/wedding-card"
check "/docs/communication/social-media-post"
check "/docs/information/security-review"
check "/docs/information/conference-agenda"

# 2026-02-14
check "/docs/development/promo-video"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━"
echo "✅ Pass: $PASS  ❌ Fail: $FAIL"
if [ "$FAIL" -gt 0 ]; then
  echo "⚠️  Some links are broken!"
  exit 1
else
  echo "🎉 All links OK!"
  exit 0
fi
