
---
layout: page
title: 
permalink: /style-guide/
---

# Style Guide

## Image Cards

### Standard Image Card
```
<div class="image-card-wrapper">
    <figure class="media-card">
        <img src="/assets/images/25_04/10th_greenNoiseRemoved_edit_sml600.png" alt="Example image">
        <figcaption>Standard image card with caption</figcaption>
    </figure>
</div>
```
The **Standard Image Card** is styled using the `.image-card-wrapper` and `.media-card` classes. It inherits the size of the image it contains, meaning a 600px wide image will be displayed as 600px wide. Key attributes:
- **Max width:** 100%
- **Border radius:** 8px
- **Box shadow:** 0 4px 20px rgba(0, 0, 0, 0.15)
- **Transition on hover:** scale (1.02)

### Centered Image Card
```
<div class="image-card-wrapper center">
    <figure class="media-card">
        <img src="/assets/images/25_03/138A3531.jpg" alt="Centered example image">
        <figcaption>Centered image card</figcaption>
    </figure>
</div>
```
Centered using the `.center` class. Same attributes as the standard card, but centered horizontally.

### Right-Aligned Image Card
```
<div class="image-card-wrapper right">
    <figure class="media-card">
        <img src="/assets/images/25_04/10th_greenNoiseRemoved_edit.png" alt="Right-aligned image card">
        <figcaption>Right-aligned image card</figcaption>
    </figure>
</div>
```
Right-aligned using the `.right` class. Floats to the right on larger screens, centered on smaller screens.

---

## Full-Width Image
```
<figure>
    <img src="/assets/images/25_04/10th_greenNoiseRemoved_edit_sml600.png" alt="Full-width image example">
    <figcaption>Full-width image example</figcaption>
</figure>
```
No wrapper needed. Takes up 100% of the parent container width.

---

## Image Grid
```
<div class="image-grid">
  <figure>
    <img src="/assets/images/25_03/138A3229.jpg" alt="Example image 1">
    <figcaption>Image 1</figcaption>
  </figure>
  <figure>
    <img src="/assets/images/25_03/138A3293.jpg" alt="Example image 2">
    <figcaption>Image 2</figcaption>
  </figure>
  <figure>
    <img src="/assets/images/25_03/138A3374.jpg" alt="Example image 3">
    <figcaption>Image 3</figcaption>
  </figure>
</div>
```
A flexible grid layout that automatically adjusts to the number of images.

---

## Photo Grid (2x3)
```
<div class="photo-grid">
  <figure class="media-card">
    <img src="/assets/images/25_03/138A3229.jpg" alt="Example image 1">
    <figcaption>Example image 1</figcaption>
  </figure>
  <figure class="media-card">
    <img src="/assets/images/25_03/138A3293.jpg" alt="Example image 2">
    <figcaption>Example image 2</figcaption>
  </figure>
  <figure class="media-card">
    <img src="/assets/images/25_03/138A3374.jpg" alt="Example image 3">
    <figcaption>Example image 3</figcaption>
  </figure>
  <figure class="media-card">
    <img src="/assets/images/25_03/138A3450.jpg" alt="Example image 4">
    <figcaption>Example image 4</figcaption>
  </figure>
  <figure class="media-card">
    <img src="/assets/images/25_03/138A3531.jpg" alt="Example image 5">
    <figcaption>Example image 5</figcaption>
  </figure>
  <figure class="media-card">
    <img src="/assets/images/25_03/138A3531.jpg" alt="Example image 6">
    <figcaption>Example image 6</figcaption>
  </figure>
</div>
```
A 2x3 grid, automatically responsive on smaller screens.

---

## Video Example
```
<div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/PmEsczIhK4I" frameborder="0" allowfullscreen></iframe>
</div>
```
Responsive video wrapper, maintaining aspect ratio.

---

## Notes and Tips
```
> [!NOTE]
> This is a note.

> [!TIP]
> This is a tip.
```
Admonition blocks for notes and tips.

---
