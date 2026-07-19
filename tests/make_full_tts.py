# -*- coding: utf-8 -*-
"""本番形式フルテスト（3回分）の音声を一括生成する。
- 入力: tests/full_audio_manifest.json（各mp3の出力先と、話者ごとのテキスト）
- edge-tts（無料・APIキー不要）。会話は話者ごとに別ボイスで合成し1つのmp3にバイナリ結合（ffmpeg不要）。
- 既存ファイルはスキップ（再実行で差分のみ生成）。
出力先:
  Listening/audio/f{1,2,3}_response_*.mp3, f{1,2,3}_long_*.mp3
  Speaking/audio/speak_f{1,2,3}_lr*.mp3, speak_f{1,2,3}_iv*.mp3
"""
import os, json, asyncio
import edge_tts

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))   # tests/ の親＝プロジェクト正本フォルダ
MANIFEST = os.path.join(BASE, "tests", "full_audio_manifest.json")

async def synth_bytes(text, voice):
    data = b""
    async for chunk in edge_tts.Communicate(text, voice, rate="+0%").stream():
        if chunk["type"] == "audio":
            data += chunk["data"]
    return data

async def build(entry):
    path = os.path.join(BASE, entry["audio"].replace("/", os.sep))
    if os.path.exists(path) and os.path.getsize(path) > 0:
        print(f"  skip {entry['audio']}")
        return
    os.makedirs(os.path.dirname(path), exist_ok=True)
    audio = b""
    for seg in entry["segments"]:
        audio += await synth_bytes(seg["text"], seg["voice"])
    with open(path, "wb") as f:
        f.write(audio)
    print(f"  OK   {entry['audio']} ({len(entry['segments'])} seg)")

async def main():
    with open(MANIFEST, encoding="utf-8") as f:
        items = json.load(f)
    print(f"Full-test audio files: {len(items)}  (Output under {BASE})")
    ok = 0
    for it in items:
        try:
            await build(it)
            ok += 1
        except Exception as e:
            print(f"  ERR  {it['audio']}: {e}")
    print(f"\nDONE. Processed {ok}/{len(items)} files.")

if __name__ == "__main__":
    asyncio.run(main())
