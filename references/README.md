# References

Screenshots of effects to build, one folder per topic.

This is input material, not documentation — it exists so a look can be pointed
at rather than described.

## How to add a topic

Make a folder named after the effect, drop the images in, and write a
`notes.md` beside them:

```
references/
  feedback-tunnel/
    01.jpg
    02.jpg
    03.jpg
    notes.md
  point-cloud/
    …
```

Folder names in kebab-case, describing the *effect*, not the source
(`radial-bloom`, not `vibify-screenshot-3`).

## notes.md is the important part

An image says what something looks like. It cannot say what you liked about it,
and that is the part that decides how it gets built. A couple of lines is
plenty:

```markdown
# Feedback tunnel

What to take: the way the trail separates into red and blue as it travels
outward, and how the whole thing stutters — it holds still for a beat, then
jumps. The motion is not smooth.

Not this: the neon palette. Colour comes from the hue slider.

Reference: <where it came from, if you want to remember>
```

"What to take" and "not this" are worth more than ten more screenshots.

## What is most useful

- **Several frames of the same effect** beats one frame each of ten effects.
  Three or four frames a second or two apart show how something *moves*, which
  a single frame never can. Video is no use — only stills can be read here.
- **Wide shots.** A crop of one corner loses the composition.
- **Anything with visible controls**, if the source had them — the parameter
  names alone say a lot about how an effect is built.

## Keeping the repository sane

Git keeps every version of a binary file forever, so images added here are
permanent weight on every future clone. Before committing:

- Resize to about **1600px** on the long edge. Nothing here needs more.
- **JPG or WebP** for anything photographic or gradient-heavy; PNG only for
  flat-colour UI where the crispness matters.

At those settings a screenshot lands around 300–600 KB, so a couple of hundred
images is roughly 100 MB. Full-resolution PNG screenshots are ten times that.

## A note on what goes public

This repository is public, so anything committed here is republished. For
personal reference material that is usually fine, but if some of it is work by
other people that you would rather not rehost, keep those out and paste them
into the chat instead — they will be seen there, just not kept.
