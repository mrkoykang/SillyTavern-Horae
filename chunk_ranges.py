from pathlib import Path
import re
import argparse


def get_word_chunk_ranges(text: str, chunk_size: int = 9000):
    lines = text.splitlines()
    ranges = []
    start_line = 1
    count = 0

    for i, line in enumerate(lines, start=1):
        words_in_line = len(re.findall(r"\b\w+\b", line))
        if count + words_in_line > chunk_size and count > 0:
            ranges.append((start_line, i - 1, count))
            start_line = i
            count = words_in_line
        else:
            count += words_in_line

    if count > 0:
        ranges.append((start_line, len(lines), count))

    return ranges


def get_character_chunk_ranges(text: str, chunk_size: int = 10000):
    lines = text.splitlines(keepends=True)
    ranges = []
    start_line = 1
    count = 0

    for i, line in enumerate(lines, start=1):
        line_len = len(line)
        if count + line_len > chunk_size and count > 0:
            ranges.append((start_line, i - 1, count))
            start_line = i
            count = line_len
        else:
            count += line_len

    if count > 0:
        ranges.append((start_line, len(lines), count))

    return ranges


def main():
    parser = argparse.ArgumentParser(description="Compute line number chunks for a text file.")
    parser.add_argument("path", type=Path, help="Path to the input text file.")
    parser.add_argument("--mode", choices=["words", "chars"], default="chars", help="Chunk by words or characters.")
    parser.add_argument("--size", type=int, default=None, help="Chunk size (words or characters).")
    args = parser.parse_args()

    text = args.path.read_text(encoding="utf-8")
    if args.mode == "words":
        size = args.size or 9000
        ranges = get_word_chunk_ranges(text, size)
        unit = "words"
    else:
        size = args.size or 10000
        ranges = get_character_chunk_ranges(text, size)
        unit = "chars"

    print(f"Total lines: {len(text.splitlines())}")
    print(f"Chunk mode: {args.mode}, size: {size} {unit}")
    print(f"Total chunks: {len(ranges)}\n")
    for idx, (start, end, count) in enumerate(ranges, start=1):
        print(f"{idx}: {start}-{end} ({count} {unit})")


if __name__ == "__main__":
    main()
